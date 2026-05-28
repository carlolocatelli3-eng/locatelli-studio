import { useState } from "react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, Copy, X, Heart, ChevronRight } from "lucide-react";
import { toast } from "sonner";

// Galeria de Luxo Definitiva - Imagens Locais Garantidas
const LUXURY_ITEMS = [
  {
    id: 1,
    brand: "CHANEL",
    title: "Haute Couture Tweed",
    description: "A essência da sofisticação parisiense. Tweed estruturado e silhueta clássica Chanel.",
    image: "/assets/luxury/chanel_1.jpg",
    prompt: "Chanel haute couture, iconic tweed suit, black and white editorial, Parisian luxury, Hasselblad 500C/M --ar 4:5 --stylize 800"
  },
  {
    id: 2,
    brand: "DIOR",
    title: "New Look Majesty",
    description: "A revolução da feminilidade. Silhueta New Look com volume dramático e elegância extrema.",
    image: "/assets/luxury/dior_1.jpg",
    prompt: "Christian Dior New Look, voluminous skirt, cinched waist, high fashion editorial, dramatic lighting, Phase One IQ4 --ar 4:5 --stylize 850"
  },
  {
    id: 3,
    brand: "VALENTINO",
    title: "Red Passion",
    description: "O vermelho lendário da Valentino em seda pura e corte cinematográfico.",
    image: "/assets/luxury/valentino_1.jpg",
    prompt: "Valentino red silk gown, flowing fabric, luxury red carpet, high fashion editorial, Leica M11 --ar 4:5 --stylize 900"
  },
  {
    id: 4,
    brand: "TOM FORD",
    title: "Modern Power",
    description: "Minimalismo sexy e alfaiataria impecável que define o luxo contemporâneo.",
    image: "/assets/luxury/tomford_1.jpg",
    prompt: "Tom Ford tailoring, black silk suit, sharp lines, minimalist luxury, studio lighting, Canon 5D Mark IV --ar 4:5 --stylize 800"
  },
  {
    id: 5,
    brand: "CHANEL",
    title: "Grand Palais Runway",
    description: "O espetáculo da moda no Grand Palais. Coleção clássica de alta costura.",
    image: "/assets/luxury/chanel_2.jpg",
    prompt: "Chanel runway show Grand Palais, multiple models, haute couture collection, Karl Lagerfeld aesthetic --ar 4:5 --stylize 750"
  },
  {
    id: 6,
    brand: "DIOR",
    title: "Atelier Secrets",
    description: "Os detalhes minuciosos e o artesanato supremo da casa Dior.",
    image: "/assets/luxury/dior_2.jpg",
    prompt: "Dior atelier craftsmanship, intricate embroidery, luxury fabric detail, macro fashion photography --ar 4:5 --stylize 800"
  },
  {
    id: 7,
    brand: "VALENTINO",
    title: "Ethereal Silk",
    description: "A leveza da seda em movimento, capturando a essência romântica da marca.",
    image: "/assets/luxury/valentino_2.jpg",
    prompt: "Valentino ethereal silk dress, motion blur, soft lighting, romantic luxury editorial --ar 4:5 --stylize 850"
  },
  {
    id: 8,
    brand: "GUCCI",
    title: "Baroque Luxury",
    description: "Exuberância e padrões ricos que celebram o luxo decorativo italiano.",
    image: "/assets/luxury/gucci_1.jpg",
    prompt: "Gucci baroque editorial, rich patterns, ornate accessories, luxury shop front, Pentax 67 --ar 4:5 --stylize 820"
  }
];

export default function FinalLuxuryGallery() {
  const [selectedItem, setSelectedItem] = useState<typeof LUXURY_ITEMS[0] | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);

  const handleCopyPrompt = (prompt: string) => {
    navigator.clipboard.writeText(prompt);
    toast.success("Prompt copiado!");
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/90 border-b border-yellow-400/20 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(250,204,21,0.3)]">
              <Sparkles className="w-6 h-6 text-black" />
            </div>
            <span className="font-playfair text-2xl font-bold tracking-tight">Locatelli Studio</span>
          </Link>
          <div className="flex items-center gap-10">
            <Link href="/" className="text-sm font-medium text-white/60 hover:text-yellow-400 transition-all">Início</Link>
            <Link href="/luxury" className="text-sm font-bold text-yellow-400 border-b-2 border-yellow-400 pb-1">Galeria</Link>
            <Link href="/prompts" className="text-sm font-medium text-white/60 hover:text-yellow-400 transition-all">Prompts</Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-20 max-w-7xl">
        {/* Header Section */}
        <div className="max-w-4xl mb-24 space-y-6">
          <Badge className="px-4 py-1.5 bg-yellow-400/10 border border-yellow-400/50 text-yellow-400 text-xs font-bold uppercase tracking-[0.2em]">
            Curadoria de Alta Costura
          </Badge>
          <h1 className="text-7xl md:text-8xl font-playfair font-bold leading-[1.1] tracking-tight">
            Referências <span className="text-yellow-400 italic">Mundiais</span>
          </h1>
          <p className="text-xl text-white/50 max-w-2xl leading-relaxed">
            Explore 8 campanhas icónicas que definem o topo da moda global. Cada imagem é acompanhada pelo seu Master Prompt técnico de elite.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {LUXURY_ITEMS.map((item) => (
            <div 
              key={item.id} 
              className="group space-y-8"
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-900 border border-white/5 shadow-2xl transition-all duration-700 group-hover:border-yellow-400/30">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                   <Button 
                    className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-6 rounded-xl text-lg shadow-xl"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopyPrompt(item.prompt);
                    }}
                   >
                     <Copy className="w-5 h-5 mr-3" /> Copiar Master Prompt
                   </Button>
                </div>
              </div>

              <div className="flex justify-between items-start gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-yellow-400 uppercase tracking-widest">{item.brand}</span>
                    <div className="w-8 h-[1px] bg-yellow-400/30" />
                  </div>
                  <h3 className="text-3xl font-playfair font-bold">{item.title}</h3>
                  <p className="text-white/40 text-lg leading-relaxed max-w-md">{item.description}</p>
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setFavorites(prev => prev.includes(item.id) ? prev.filter(f => f !== item.id) : [...prev, item.id]);
                  }}
                  className={`p-4 rounded-full border transition-all ${
                    favorites.includes(item.id) 
                    ? "bg-red-500/20 border-red-500 text-red-500" 
                    : "bg-white/5 border-white/10 text-white/30 hover:text-white hover:border-white/30"
                  }`}
                >
                  <Heart className={`w-6 h-6 ${favorites.includes(item.id) ? "fill-current" : ""}`} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-40 relative overflow-hidden rounded-[3rem] bg-neutral-900 border border-yellow-400/20 p-20 text-center space-y-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-yellow-400/10 blur-[120px] rounded-full" />
          <div className="relative space-y-6">
            <h2 className="text-5xl md:text-6xl font-playfair font-bold">Crie a sua própria Campanha</h2>
            <p className="text-xl text-white/40 max-w-2xl mx-auto leading-relaxed">
              Use o nosso gerador de prompts automatizado para criar direções de arte que rivalizam com as maiores casas de luxo do mundo.
            </p>
          </div>
          <Link href="/prompts">
            <Button className="relative bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-xl px-12 py-8 rounded-2xl shadow-[0_20px_40px_rgba(250,204,21,0.2)] transition-all hover:-translate-y-1">
              Ir para o Gerador de Prompts <ChevronRight className="w-6 h-6 ml-3" />
            </Button>
          </Link>
        </div>
      </main>

      {/* Modal Detail */}
      {selectedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/95 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="relative bg-neutral-900 border border-white/10 rounded-[2.5rem] max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden shadow-2xl">
            <div className="h-[400px] md:h-full bg-black">
              <img src={selectedItem.image} className="w-full h-full object-cover" alt={selectedItem.title} />
            </div>
            <div className="p-12 md:p-16 flex flex-col justify-center space-y-10">
              <button onClick={() => setSelectedItem(null)} className="absolute top-8 right-8 p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all">
                <X className="w-6 h-6 text-white" />
              </button>
              
              <div className="space-y-4">
                <span className="text-sm font-bold text-yellow-400 uppercase tracking-[0.3em]">{selectedItem.brand}</span>
                <h2 className="text-5xl font-playfair font-bold leading-tight">{selectedItem.title}</h2>
                <p className="text-xl text-white/50 leading-relaxed">{selectedItem.description}</p>
              </div>

              <div className="space-y-4 bg-black/50 p-8 rounded-3xl border border-white/5">
                <h4 className="text-xs font-bold text-white/30 uppercase tracking-widest">Master Prompt de Direção</h4>
                <p className="font-mono text-lg text-yellow-100/90 leading-relaxed">{selectedItem.prompt}</p>
              </div>

              <div className="flex gap-4">
                <Button 
                  className="flex-1 bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-8 rounded-2xl text-xl shadow-xl"
                  onClick={() => {
                    handleCopyPrompt(selectedItem.prompt);
                    setSelectedItem(null);
                  }}
                >
                  <Copy className="w-6 h-6 mr-3" /> Copiar Prompt
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
