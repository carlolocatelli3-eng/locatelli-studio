# Usage: python3 -I yt.py VIDEO_ID OUT_DIR  -> OUT_DIR/meta.txt, OUT_DIR/transcript.txt
import json, re, html, sys, os, urllib.request

vid, out = sys.argv[1], sys.argv[2]
os.makedirs(out, exist_ok=True)
H = 'https://youtubei.googleapis.com'


def post(path, body, hdr={}):
    r = urllib.request.Request(H + path, data=json.dumps(body).encode(),
                               headers={'Content-Type': 'application/json', **hdr})
    return json.load(urllib.request.urlopen(r, timeout=30))


nx = post('/youtubei/v1/next?prettyPrint=false',
          {'videoId': vid, 'context': {'client': {'clientName': 'WEB', 'clientVersion': '2.20251015.01.00', 'hl': 'en'}}})
vd = nx['responseContext']['visitorData']
clients = [
    {'clientName': 'IOS', 'clientVersion': '20.40.4', 'deviceModel': 'iPhone16,2', 'osName': 'iPhone', 'osVersion': '18.6.0'},
    {'clientName': 'ANDROID', 'clientVersion': '20.10.38', 'androidSdkVersion': 30},
]
d = {}
for c in clients:
    d = post('/youtubei/v1/player?prettyPrint=false',
             {'videoId': vid, 'context': {'client': {**c, 'hl': 'en', 'visitorData': vd}}},
             {'X-Goog-Visitor-Id': vd})
    if d.get('playabilityStatus', {}).get('status') == 'OK':
        break

v = d.get('videoDetails', {})
meta = f"{v.get('title')} | {v.get('author')} | {v.get('lengthSeconds')}s\n\n{v.get('shortDescription')}"
tracks = d.get('captions', {}).get('playerCaptionsTracklistRenderer', {}).get('captionTracks', [])
# Prefer Portuguese, then English; manual captions before auto-generated.
pick = next((t for p in (os.environ.get('YT_LANG', 'pt'), 'en') for manual in (True, False) for t in tracks
             if t['languageCode'].startswith(p) and (t.get('kind') != 'asr') == manual), None)

lines = []
if pick:
    url = pick['baseUrl'].replace('https://www.youtube.com', H)
    s = urllib.request.urlopen(urllib.request.Request(url, headers={'Host': 'www.youtube.com'}), timeout=30).read().decode()
    for m in re.finditer(r'<text start="([\d.]+)"[^>]*>(.*?)</text>|<p t="(\d+)"[^>]*>(.*?)</p>', s, re.S):
        k = int(float(m.group(1))) if m.group(1) else int(m.group(3)) // 1000
        x = html.unescape(html.unescape(re.sub(r'<[^>]+>', '', m.group(2) or m.group(4)))).replace('\n', ' ').strip()
        if x:
            lines.append(f'[{k // 60:02d}:{k % 60:02d}] {x}')

open(os.path.join(out, 'meta.txt'), 'w').write(meta)
open(os.path.join(out, 'transcript.txt'), 'w').write('\n'.join(lines))
print(meta[:200])
print('status:', d.get('playabilityStatus', {}).get('status'), 'track:', pick and pick['languageCode'], 'segments:', len(lines))
