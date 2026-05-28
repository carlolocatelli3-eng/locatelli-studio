export interface ShareOptions {
  styleName: string;
  platform: "midjourney" | "stableDiffusion" | "dalle";
  prompt: string;
  baseUrl?: string;
}

export function generateShareText(options: ShareOptions): string {
  const { styleName, platform } = options;
  const platformName = {
    midjourney: "Midjourney",
    stableDiffusion: "Stable Diffusion",
    dalle: "DALL-E 3"
  }[platform];

  return `Criei um prompt cinematográfico de elite no Locatelli Studio! 🎬✨\n\nEstilo: ${styleName}\nPlataforma: ${platformName}\n\nVem explorar a ferramenta de prompts profissional: locatelli-studio.com`;
}

export function generateInstagramKit(options: ShareOptions): string {
  const { styleName } = options;
  return `✨ Locatelli Studio: ${styleName} Edition\n\nCreative Direction generated with AI for high-end fashion campaigns.\n\n#LocatelliStudio #AIPhotography #FashionAI #Midjourney #PromptEngineering #HighFashion #CreativeDirection #Editorial`;
}

export function generateTwitterShareUrl(options: ShareOptions): string {
  const text = generateShareText(options);
  const encodedText = encodeURIComponent(text);
  return `https://twitter.com/intent/tweet?text=${encodedText}&hashtags=fashion,AI,Midjourney,PromptEngineering`;
}

export function generateWhatsAppShareUrl(options: ShareOptions): string {
  const text = generateShareText(options);
  const encodedText = encodeURIComponent(text);
  return `https://wa.me/?text=${encodedText}`;
}

export function generateLinkedInShareUrl(options: ShareOptions): string {
  const text = generateShareText(options);
  const encodedText = encodeURIComponent(text);
  return `https://www.linkedin.com/sharing/share-offsite/?url=https://locatelli-studio.com&title=${encodedText}`;
}

export function generateFacebookShareUrl(options: ShareOptions): string {
  return `https://www.facebook.com/sharer/sharer.php?u=https://locatelli-studio.com&quote=${encodeURIComponent(generateShareText(options))}`;
}

export function generatePinterestShareUrl(options: ShareOptions): string {
  const text = generateShareText(options);
  const url = "https://locatelli-studio.com";
  // Pinterest requires an image for a direct pin, but we can pin the URL with a description
  return `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(text)}`;
}

export function generateTelegramShareUrl(options: ShareOptions): string {
  const text = generateShareText(options);
  return `https://t.me/share/url?url=https://locatelli-studio.com&text=${encodeURIComponent(text)}`;
}

export function generateThreadsShareUrl(options: ShareOptions): string {
  const text = generateShareText(options);
  return `https://www.threads.net/intent/post?text=${encodeURIComponent(text)}`;
}

export function generateEmailShareUrl(options: ShareOptions): string {
  const text = generateShareText(options);
  const subject = `Confira este prompt de elite do Locatelli Studio: ${options.styleName}`;
  return `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text + "\n\nPrompt:\n" + options.prompt)}`;
}

export function copyToClipboard(text: string): Promise<void> {
  return navigator.clipboard.writeText(text);
}
