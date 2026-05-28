import { useState } from "react";
import { Link } from "wouter";
import { 
  promptStyles, 
  generateMasterPrompt, 
  cameraOptions, 
  lightingOptions,
  type GeneratedPrompts
} from "@/lib/promptPatterns";
import { 
  generateTwitterShareUrl,
  generateWhatsAppShareUrl,
  generateLinkedInShareUrl,
  generateFacebookShareUrl,
  generatePinterestShareUrl,
  generateTelegramShareUrl,
  generateThreadsShareUrl,
  generateEmailShareUrl,
  generateShareText,
  generateInstagramKit,
  copyToClipboard
} from "@/lib/shareUtils";
import { Button } from "@/components/ui/button";
import { 
  Copy, 
  Download, 
  Sparkles, 
  Wand2, 
  Dice5, 
  Settings2,
  MonitorPlay,
  Layers,
  Zap,
  Share2,
  Twitter,
  MessageCircle,
  Linkedin,
  Facebook,
  Mail,
  Link as LinkIcon,
  Camera,
  Pin,
  Send,
  MessageSquare,
  Heart,
  ChevronRight,
  Eye,
  Trash2,
  Save,
  RotateCcw
} from "lucide-react";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";

// Visual Chip Data
const MATERIALS = [
  // Clássicos de Luxo
  "Seda Italiana", "Couro Vegano", "Lã Estruturada", "Algodão Premium",
  "Linho Belga", "Cashmere Puro", "Poliéster Reciclado", "Veludo Francês",
  // Texturas Orgânicas
  "Seda Selvagem", "Camurça Macia", "Linho Rústico", "Juta Refinada",
  // Alta Tecnologia
  "Neoprene Esculpido", "Malha Metálica", "Tecido Refletivo", "Fibra de Carbono",
  // Estruturados & Volumosos
  "Tule Volumoso", "Renda Intrincada", "Cetim Duquesa", "Organza Crocante",
  // Experimentais & Luxo Extremo
  "Látex Brilhante", "Penas de Avestruz", "Cristais Incrustados", "Ouro Tecido",
  // Naturais Premium
  "Lã Merino Fina", "Seda Bruta", "Couro Italiano", "Camurça Sueca",
  // Futuristas
  "Tecido Iridescente", "Holográfico Metálico", "Luminescente Noturno", "Sensível ao Toque"
];

const ACTIONS = [
  "Olhando fixamente", "Caminhando elegantemente", "Encostada na parede",
  "Saltando em movimento", "Dançando fluidamente", "Sentada contemplativa",
  "Correndo dinamicamente", "Posando teatralmente"
];

const LOCATIONS = [
  "Loft vazio minimalista", "Deserto ao pôr do sol", "Praia rochosa",
  "Floresta densa", "Metrópole urbana", "Estúdio branco", "Castelo antigo",
  "Galeria de arte moderna"
];

export default function PromptGenerator() {
  const [selectedStyle, setSelectedStyle] = useState(promptStyles[0].id);
  const [selectedMaterial, setSelectedMaterial] = useState(MATERIALS[0]);
  const [selectedAction, setSelectedAction] = useState(ACTIONS[0]);
  const [selectedLocation, setSelectedLocation] = useState(LOCATIONS[0]);
  const [camera, setCamera] = useState(cameraOptions[0]);
  const [lighting, setLighting] = useState(lightingOptions[0]);
  const [aspectRatio, setAspectRatio] = useState("4:5");
  const [stylize, setStylize] = useState(250);
  const [generatedPrompts, setGeneratedPrompts] = useState<GeneratedPrompts | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeTab, setActiveTab] = useState("midjourney");
  const [savedPrompts, setSavedPrompts] = useState<Array<{id: string, name: string, prompts: GeneratedPrompts}>>([]);

  const currentStyle = promptStyles.find(s => s.id === selectedStyle);

  const handleGeneratePrompt = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const variables = {
        location: selectedLocation,
        action: selectedAction,
        material: selectedMaterial
      };
      const prompts = generateMasterPrompt(
        selectedStyle, 
        variables, 
        camera, 
        lighting, 
        aspectRatio, 
        stylize.toString()
      );
      setGeneratedPrompts(prompts);
      setIsGenerating(false);
      toast.success("Prompts gerados com sucesso!");
    }, 600);
  };

  const handleSavePrompt = () => {
    if (!generatedPrompts) return;
    const newPrompt = {
      id: Date.now().toString(),
      name: `${currentStyle?.name} - ${selectedLocation}`,
      prompts: generatedPrompts
    };
    setSavedPrompts([...savedPrompts, newPrompt]);
    toast.success("Prompt guardado!");
  };

  const handleLoadPrompt = (prompt: typeof savedPrompts[0]) => {
    setGeneratedPrompts(prompt.prompts);
    toast.success("Prompt carregado!");
  };

  const handleDeletePrompt = (id: string) => {
    setSavedPrompts(savedPrompts.filter(p => p.id !== id));
    toast.success("Prompt eliminado!");
  };

  const handleRandomize = () => {
    setSelectedStyle(promptStyles[Math.floor(Math.random() * promptStyles.length)].id);
    setSelectedMaterial(MATERIALS[Math.floor(Math.random() * MATERIALS.length)]);
    setSelectedAction(ACTIONS[Math.floor(Math.random() * ACTIONS.length)]);
    setSelectedLocation(LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)]);
    setCamera(cameraOptions[Math.floor(Math.random() * cameraOptions.length)]);
    setLighting(lightingOptions[Math.floor(Math.random() * lightingOptions.length)]);
    toast.info("Configuração aleatória aplicada!");
  };

  const handleCopyPrompt = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copiado!");
  };

  const handleDownloadAll = () => {
    if (!generatedPrompts) return;
    const content = `LOCATELLI STUDIO - EXPORT DE PROMPTS
=====================================
Estilo: ${currentStyle?.name}
Localização: ${selectedLocation}
Ação: ${selectedAction}
Material: ${selectedMaterial}
Câmera: ${camera}
Iluminação: ${lighting}
Data: ${new Date().toLocaleDateString("pt-BR")}

---MIDJOURNEY---
${generatedPrompts.midjourney}

---STABLE DIFFUSION---
${generatedPrompts.stableDiffusion}

---DALL-E 3---
${generatedPrompts.dalle}
`;
    const element = document.createElement("a");
    const file = new Blob([content], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `locatelli-prompts-${Date.now()}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    toast.success("Arquivo baixado!");
  };

  const handleShareTwitter = () => {
    const url = generateTwitterShareUrl({
      styleName: currentStyle?.name || "Elite Fashion Prompt",
      platform: activeTab as "midjourney" | "stableDiffusion" | "dalle",
      prompt: generatedPrompts?.[activeTab as keyof GeneratedPrompts] || ""
    });
    window.open(url, "_blank");
    toast.success("Partilhado no X!");
  };

  const handleInstagramKit = async () => {
    const text = generateInstagramKit({
      styleName: currentStyle?.name || "Elite Fashion Prompt",
      platform: activeTab as "midjourney" | "stableDiffusion" | "dalle",
      prompt: generatedPrompts?.[activeTab as keyof GeneratedPrompts] || ""
    });
    await copyToClipboard(text);
    toast.success("Kit Instagram copiado!");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black border-b border-yellow-400/30 backdrop-blur-md">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-black" />
            </div>
            <span className="font-playfair text-2xl font-bold text-white">Locatelli Studio</span>
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/" className="text-sm text-white/70 hover:text-yellow-400 transition-colors font-semibold">Início</Link>
            <Link href="/galeria" className="text-sm text-white/70 hover:text-yellow-400 transition-colors font-semibold">Galeria</Link>
            <Link href="/prompts" className="text-sm font-bold bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-300 transition-colors">Prompts</Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 max-w-7xl py-12">
        {/* Header */}
        <div className="mb-16 text-center space-y-4">
          <Badge className="px-4 py-2 bg-yellow-400/20 border border-yellow-400 text-yellow-300 text-xs font-bold uppercase tracking-widest">Gerador Elite v4.0</Badge>
          <h1 className="text-6xl md:text-7xl font-playfair font-bold text-white">Construtor de Prompts</h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Crie prompts cinematográficos de elite com um simples clique. Interface intuitiva, resultados profissionais.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Sidebar - Styles */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-white/5 border border-yellow-400/30 shadow-2xl rounded-2xl overflow-hidden">
              <CardHeader className="bg-yellow-400/10 border-b border-yellow-400/20 p-6">
                <CardTitle className="text-white text-lg font-bold flex items-center gap-2">
                  <Layers className="w-5 h-5 text-yellow-400" /> Estilos
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-3 max-h-96 overflow-y-auto">
                {promptStyles.map(style => (
                  <button
                    key={style.id}
                    onClick={() => {
                      setSelectedStyle(style.id);
                      setGeneratedPrompts(null);
                    }}
                    className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                      selectedStyle === style.id 
                        ? "border-yellow-400 bg-yellow-400/20 shadow-lg shadow-yellow-400/30" 
                        : "border-white/10 bg-white/5 hover:border-yellow-400/50 hover:bg-white/10"
                    }`}
                  >
                    <h3 className={`font-bold text-sm ${selectedStyle === style.id ? "text-yellow-300" : "text-white"}`}>{style.name}</h3>
                    <p className="text-xs text-white/50 mt-1">{style.description}</p>
                  </button>
                ))}
              </CardContent>
            </Card>

            {/* Saved Prompts */}
            {savedPrompts.length > 0 && (
              <Card className="bg-white/5 border border-yellow-400/20 shadow-xl rounded-2xl">
                <CardHeader className="bg-yellow-400/5 border-b border-yellow-400/20 p-4">
                  <CardTitle className="text-white text-sm font-bold">Guardados</CardTitle>
                </CardHeader>
                <CardContent className="p-4 space-y-2 max-h-48 overflow-y-auto">
                  {savedPrompts.map(prompt => (
                    <div key={prompt.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10 hover:border-yellow-400/30">
                      <button
                        onClick={() => handleLoadPrompt(prompt)}
                        className="text-xs text-white/70 hover:text-yellow-300 truncate flex-1 text-left font-semibold"
                      >
                        {prompt.name}
                      </button>
                      <button
                        onClick={() => handleDeletePrompt(prompt.id)}
                        className="text-white/40 hover:text-red-400 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>

          {/* Center - Visual Builder */}
          <div className="lg:col-span-2 space-y-8">
            {/* Material Selection */}
            <Card className="bg-white/5 border border-yellow-400/30 shadow-2xl rounded-2xl overflow-hidden">
              <CardHeader className="bg-yellow-400/10 border-b border-yellow-400/20 p-6">
                <CardTitle className="text-white text-lg font-bold">Material da Roupa</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {MATERIALS.map(material => (
                    <button
                      key={material}
                      onClick={() => setSelectedMaterial(material)}
                      className={`p-4 rounded-xl border-2 font-semibold text-sm transition-all ${
                        selectedMaterial === material
                          ? "border-yellow-400 bg-yellow-400/20 text-yellow-300 shadow-lg shadow-yellow-400/30"
                          : "border-white/10 bg-white/5 text-white/70 hover:border-yellow-400/50 hover:bg-white/10"
                      }`}
                    >
                      {material}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Action Selection */}
            <Card className="bg-white/5 border border-yellow-400/30 shadow-2xl rounded-2xl overflow-hidden">
              <CardHeader className="bg-yellow-400/10 border-b border-yellow-400/20 p-6">
                <CardTitle className="text-white text-lg font-bold">Ação do Sujeito</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {ACTIONS.map(action => (
                    <button
                      key={action}
                      onClick={() => setSelectedAction(action)}
                      className={`p-4 rounded-xl border-2 font-semibold text-sm transition-all ${
                        selectedAction === action
                          ? "border-yellow-400 bg-yellow-400/20 text-yellow-300 shadow-lg shadow-yellow-400/30"
                          : "border-white/10 bg-white/5 text-white/70 hover:border-yellow-400/50 hover:bg-white/10"
                      }`}
                    >
                      {action}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Location Selection */}
            <Card className="bg-white/5 border border-yellow-400/30 shadow-2xl rounded-2xl overflow-hidden">
              <CardHeader className="bg-yellow-400/10 border-b border-yellow-400/20 p-6">
                <CardTitle className="text-white text-lg font-bold">Localização</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {LOCATIONS.map(location => (
                    <button
                      key={location}
                      onClick={() => setSelectedLocation(location)}
                      className={`p-4 rounded-xl border-2 font-semibold text-sm transition-all ${
                        selectedLocation === location
                          ? "border-yellow-400 bg-yellow-400/20 text-yellow-300 shadow-lg shadow-yellow-400/30"
                          : "border-white/10 bg-white/5 text-white/70 hover:border-yellow-400/50 hover:bg-white/10"
                      }`}
                    >
                      {location}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Technical Parameters */}
            <Card className="bg-white/5 border border-yellow-400/30 shadow-2xl rounded-2xl overflow-hidden">
              <CardHeader className="bg-yellow-400/10 border-b border-yellow-400/20 p-6">
                <CardTitle className="text-white text-lg font-bold flex items-center gap-2">
                  <Settings2 className="w-5 h-5 text-yellow-400" /> Parâmetros Técnicos
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-white/70 font-bold text-xs uppercase">Câmera</Label>
                    <select 
                      value={camera} 
                      onChange={e => setCamera(e.target.value)}
                      className="w-full bg-white/10 border border-yellow-400/30 text-white rounded-lg p-3 font-semibold hover:border-yellow-400/50 focus:border-yellow-400 focus:outline-none"
                    >
                      {cameraOptions.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-white/70 font-bold text-xs uppercase">Iluminação</Label>
                    <select 
                      value={lighting} 
                      onChange={e => setLighting(e.target.value)}
                      className="w-full bg-white/10 border border-yellow-400/30 text-white rounded-lg p-3 font-semibold hover:border-yellow-400/50 focus:border-yellow-400 focus:outline-none"
                    >
                      {lightingOptions.map(l => <option key={l} value={l}>{l}</option>)}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-white/70 font-bold text-xs uppercase">Aspect Ratio</Label>
                    <select 
                      value={aspectRatio} 
                      onChange={e => setAspectRatio(e.target.value)}
                      className="w-full bg-white/10 border border-yellow-400/30 text-white rounded-lg p-3 font-semibold hover:border-yellow-400/50 focus:border-yellow-400 focus:outline-none"
                    >
                      {["1:1", "4:5", "2:3", "16:9", "9:16"].map(ar => <option key={ar} value={ar}>{ar}</option>)}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-white/70 font-bold text-xs uppercase">Stylize: {stylize}</Label>
                    <Slider 
                      value={[stylize]} 
                      min={0} 
                      max={1000} 
                      step={50} 
                      onValueChange={v => setStylize(v[0])}
                      className="py-2"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button 
                onClick={handleGeneratePrompt}
                disabled={isGenerating}
                className="flex-1 bg-yellow-400 hover:bg-yellow-300 text-black h-16 text-lg font-bold rounded-xl shadow-lg shadow-yellow-400/30 transition-all"
              >
                {isGenerating ? "Processando..." : "Gerar Prompts"}
              </Button>
              <Button 
                onClick={handleRandomize}
                className="bg-white/10 hover:bg-white/20 text-white border border-yellow-400/30 h-16 px-6 rounded-xl font-bold transition-all"
              >
                <Dice5 className="w-5 h-5" />
              </Button>
              <Button 
                onClick={handleDownloadAll}
                disabled={!generatedPrompts}
                className="bg-white/10 hover:bg-white/20 text-white border border-yellow-400/30 h-16 px-6 rounded-xl font-bold transition-all disabled:opacity-50"
              >
                <Download className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Live Preview */}
        {generatedPrompts && (
          <div className="mt-16 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Card className="bg-white/5 border border-yellow-400/30 shadow-2xl rounded-2xl overflow-hidden">
              <CardHeader className="bg-yellow-400/10 border-b border-yellow-400/20 p-6">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-white text-xl font-bold flex items-center gap-2">
                    <Eye className="w-5 h-5 text-yellow-400" /> Pré-visualização
                  </CardTitle>
                  <Button 
                    onClick={handleSavePrompt}
                    className="bg-yellow-400/20 hover:bg-yellow-400/30 text-yellow-300 border border-yellow-400/50 rounded-lg px-4 py-2 font-bold text-sm"
                  >
                    <Save className="w-4 h-4 mr-2" /> Guardar
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="w-full justify-start bg-white/5 rounded-none border-b border-yellow-400/20 px-6 py-4 h-auto gap-2">
                    <TabsTrigger value="midjourney" className="px-4 py-2 rounded-lg font-bold data-[state=active]:bg-yellow-400/20 data-[state=active]:text-yellow-300">
                      <Zap className="w-4 h-4 mr-2" /> Midjourney
                    </TabsTrigger>
                    <TabsTrigger value="stableDiffusion" className="px-4 py-2 rounded-lg font-bold data-[state=active]:bg-yellow-400/20 data-[state=active]:text-yellow-300">
                      <Layers className="w-4 h-4 mr-2" /> Stable Diffusion
                    </TabsTrigger>
                    <TabsTrigger value="dalle" className="px-4 py-2 rounded-lg font-bold data-[state=active]:bg-yellow-400/20 data-[state=active]:text-yellow-300">
                      <MonitorPlay className="w-4 h-4 mr-2" /> DALL-E 3
                    </TabsTrigger>
                  </TabsList>

                  {["midjourney", "stableDiffusion", "dalle"].map(platform => (
                    <TabsContent key={platform} value={platform} className="p-6">
                      <div className="space-y-4">
                        <div className="bg-black border-2 border-yellow-400/30 rounded-xl p-6 font-mono text-sm text-yellow-100 min-h-48 max-h-64 overflow-y-auto leading-relaxed">
                          {generatedPrompts[platform as keyof GeneratedPrompts]}
                        </div>
                        <Button 
                          onClick={() => handleCopyPrompt(generatedPrompts[platform as keyof GeneratedPrompts])}
                          className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-xl py-3 transition-all"
                        >
                          <Copy className="w-4 h-4 mr-2" /> Copiar Prompt
                        </Button>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>

                {/* Share Section */}
                <div className="p-6 bg-white/5 border-t border-yellow-400/20">
                  <h4 className="text-white font-bold mb-4 flex items-center gap-2 uppercase text-sm tracking-widest">
                    <Share2 className="w-4 h-4 text-yellow-400" /> Partilhar
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <Button 
                      onClick={handleShareTwitter}
                      className="bg-black hover:bg-white/10 text-white border border-white/20 rounded-lg font-bold text-sm py-3"
                    >
                      <Twitter className="w-4 h-4 mr-2" /> X
                    </Button>
                    <Button 
                      onClick={handleInstagramKit}
                      className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white rounded-lg font-bold text-sm py-3"
                    >
                      <Camera className="w-4 h-4 mr-2" /> IG
                    </Button>
                    <Button 
                      className="bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg font-bold text-sm py-3"
                    >
                      <Pin className="w-4 h-4 mr-2" /> Pinterest
                    </Button>
                    <Button 
                      className="bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg font-bold text-sm py-3"
                    >
                      <Mail className="w-4 h-4 mr-2" /> Email
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
