import { useState } from "react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sparkles,
  Copy,
  ArrowRight,
  X,
  Heart,
  ChevronRight
} from "lucide-react";
import { toast } from "sonner";

// Gallery Data - 8 Referências Mundiais de Alta Costura
const GALLERY_ITEMS = [
  {
    id: 1,
    style: "Chanel Haute Couture",
    brand: "Chanel",
    description: "A essência da sofisticação parisiense. Tweed estruturado, pérolas autênticas e silhueta minimalista que define a elegância atemporal.",
    image: "https://images.unsplash.com/photo-1595777707802-221b0ae4e3fb?w=1000&h=1200&fit=crop&q=95&crop=entropy&cs=tinysrgb",
    prompt: "Chanel haute couture editorial, structured tweed jacket, pearl accessories, Parisian elegance, shot on Hasselblad 500C/M, soft studio lighting, timeless luxury --ar 4:5 --stylize 800 --v 6.0",
    category: "Luxury",
    platform: "midjourney"
  },
  {
    id: 2,
    style: "Christian Dior New Look",
    brand: "Dior",
    description: "A revolução da silhueta. Vestido de baile com saia volumosa e cintura marcada que redefiniu a feminilidade extrema na alta costura.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1000&h=1200&fit=crop&q=95&crop=entropy&cs=tinysrgb",
    prompt: "Christian Dior New Look ball gown, voluminous silk gown, cinched waist, dramatic silhouette, shot on Phase One IQ4, dramatic studio lighting, haute couture elegance --ar 4:5 --stylize 850 --v 6.0",
    category: "Luxury",
    platform: "midjourney"
  },
  {
    id: 3,
    style: "Valentino Red Carpet",
    brand: "Valentino",
    description: "O vermelho icónico que define gerações. Vestido de noite em seda vermelha intensa com corte perfeito e glamour cinematográfico.",
    image: "https://images.unsplash.com/photo-1539008588-bbf93b20d075?w=1000&h=1200&fit=crop&q=95&crop=entropy&cs=tinysrgb",
    prompt: "Valentino red carpet gown, iconic red silk evening dress, perfect tailoring, cinematic glamour, shot on Leica M11, dramatic side lighting, editorial elegance --ar 4:5 --stylize 880 --v 6.0",
    category: "Luxury",
    platform: "midjourney"
  },
  {
    id: 4,
    style: "Tom Ford Black Tailoring",
    brand: "Tom Ford",
    description: "Minimalismo luxuoso e poder absoluto. Terno preto impecável com corte arquitetónico que intimida e seduz simultaneamente.",
    image: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=1000&h=1200&fit=crop&q=95&crop=entropy&cs=tinysrgb",
    prompt: "Tom Ford haute couture tailored suit, perfectly cut black suit, architectural silhouette, urban luxury, shot on Canon 5D Mark IV, minimalist studio lighting, editorial power --ar 4:5 --stylize 800 --v 6.0",
    category: "Luxury",
    platform: "midjourney"
  },
  {
    id: 5,
    style: "Schiaparelli Surrealism",
    brand: "Schiaparelli",
    description: "Surrealismo na alta costura. Formas impossíveis, detalhes oníricos e uma abordagem conceitual que desafia a realidade visual.",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1000&h=1200&fit=crop&q=95&crop=entropy&cs=tinysrgb",
    prompt: "Schiaparelli surrealism haute couture, impossible shapes, surreal details, conceptual fashion art, shot on Mamiya RB67, dramatic theatrical lighting, editorial innovation --ar 4:5 --stylize 900 --v 6.0",
    category: "Luxury",
    platform: "midjourney"
  },
  {
    id: 6,
    style: "Prada Technical Innovation",
    brand: "Prada",
    description: "Quando a tecnologia encontra a alta costura. Nylon técnico, design funcional e luxuoso que inovação desafia convenções.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1000&h=1200&fit=crop&q=95&crop=entropy&cs=tinysrgb",
    prompt: "Prada technical haute couture, innovative nylon jacket, modern silhouette, functional luxury, shot on Hasselblad, minimalist composition, contemporary elegance --ar 4:5 --stylize 750 --v 6.0",
    category: "Luxury",
    platform: "midjourney"
  },
  {
    id: 7,
    style: "Gucci Baroque Opulence",
    brand: "Gucci",
    description: "Luxo decorativo e exuberante. Padrões florais vibrantes, cores saturadas e ornamentação rica que celebra a natureza como símbolo de riqueza.",
    image: "https://images.unsplash.com/photo-1552062407-c551eeda4bbb?w=1000&h=1200&fit=crop&q=95&crop=entropy&cs=tinysrgb",
    prompt: "Gucci baroque haute couture, vibrant floral patterns, ornate details, saturated colors, opulent luxury, shot on Pentax 67, natural studio lighting, editorial exuberance --ar 4:5 --stylize 820 --v 6.0",
    category: "Luxury",
    platform: "midjourney"
  },
  {
    id: 8,
    style: "Hermès Artisanal Craft",
    brand: "Hermès",
    description: "Artesanato supremo e discreto. Seda francesa em padrões exclusivos e qualidade incomparável que sussurra luxo em vez de gritar.",
    image: "https://images.unsplash.com/photo-1470229722913-7f419344ca51?w=1000&h=1200&fit=crop&q=95&crop=entropy&cs=tinysrgb",
    prompt: "Hermès artisanal haute couture, French silk dress, exclusive patterns, supreme craftsmanship, understated luxury, shot on Leica M10, soft natural lighting, editorial refinement --ar 4:5 --stylize 780 --v 6.0",
    category: "Luxury",
    platform: "midjourney"
  }
];

const STYLES = ["Todos", "Luxury"];

export default function Gallery() {
  const [selectedStyle, setSelectedStyle] = useState("Todos");
  const [selectedItem, setSelectedItem] = useState<typeof GALLERY_ITEMS[0] | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);

  const filteredItems = selectedStyle === "Todos"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedStyle);

  const handleCopyPrompt = (prompt: string) => {
    navigator.clipboard.writeText(prompt);
    toast.success("Prompt copiado!");
  };

  const handleToggleFavorite = (id: number) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
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
            <Link href="/galeria" className="text-sm font-bold bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-300 transition-colors">Galeria</Link>
            <Link href="/prompts" className="text-sm text-white/70 hover:text-yellow-400 transition-colors font-semibold">Prompts</Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 max-w-7xl py-12">
        {/* Header */}
        <div className="mb-16 text-center space-y-4">
          <Badge className="px-4 py-2 bg-yellow-400/20 border border-yellow-400 text-yellow-300 text-xs font-bold uppercase tracking-widest">Referências Mundiais de Luxo</Badge>
          <h1 className="text-6xl md:text-7xl font-playfair font-bold text-white">Galeria de Moda</h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Explore as 8 maiores referências de alta costura do mundo. Cada campanha vem com o seu Master Prompt técnico.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mb-16">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="bg-white/5 border border-yellow-400/20 hover:border-yellow-400/50 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20 h-full flex flex-col">
                {/* Image Container */}
                <div className="relative h-96 overflow-hidden bg-black flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.style}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <CardContent className="p-8 space-y-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <p className="text-xs text-yellow-300 font-bold uppercase tracking-widest mb-2">{item.brand}</p>
                        <h3 className="text-2xl font-bold text-white leading-tight">{item.style}</h3>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleToggleFavorite(item.id);
                        }}
                        className={`p-2 rounded-lg transition-all flex-shrink-0 ${
                          favorites.includes(item.id)
                            ? "bg-red-500/30 border border-red-400"
                            : "bg-white/10 border border-white/20 hover:bg-white/20"
                        }`}
                      >
                        <Heart className={`w-5 h-5 ${favorites.includes(item.id) ? "fill-red-400 text-red-400" : "text-white"}`} />
                      </button>
                    </div>
                    <Badge className="bg-yellow-400/20 border border-yellow-400 text-yellow-300 text-xs font-bold w-fit">
                      Luxury Campaign
                    </Badge>
                  </div>

                  <p className="text-base text-white/70 leading-relaxed">{item.description}</p>

                  <div className="flex gap-3 pt-4">
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopyPrompt(item.prompt);
                      }}
                      size="sm"
                      className="flex-1 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-lg text-sm py-2"
                    >
                      <Copy className="w-4 h-4 mr-2" /> Copiar Prompt
                    </Button>
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedItem(item);
                      }}
                      size="sm"
                      className="flex-1 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold rounded-lg text-sm py-2"
                    >
                      <ArrowRight className="w-4 h-4 mr-2" /> Detalhes
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Prompt Detail Modal */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in">
            <Card className="bg-white/5 border border-yellow-400/30 shadow-2xl rounded-2xl max-w-2xl w-full overflow-hidden max-h-[90vh] overflow-y-auto">
              <div className="relative h-96 overflow-hidden">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.style}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-lg transition-all"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              <CardContent className="p-8 space-y-6">
                <div>
                  <p className="text-sm text-yellow-300 font-bold uppercase tracking-widest mb-2">{selectedItem.brand}</p>
                  <h2 className="text-3xl font-playfair font-bold text-white mb-4">{selectedItem.style}</h2>
                  <p className="text-base text-white/70 leading-relaxed mb-6">{selectedItem.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    <Badge className="bg-yellow-400/20 border border-yellow-400 text-yellow-300 font-semibold">Luxury Campaign</Badge>
                    <Badge className="bg-white/10 border border-white/20 text-white/70 font-semibold">{selectedItem.platform}</Badge>
                  </div>
                </div>

                <div className="space-y-3 border-t border-white/10 pt-6">
                  <h3 className="text-white font-bold text-sm uppercase tracking-widest">Master Prompt Técnico</h3>
                  <div className="bg-black border-2 border-yellow-400/30 rounded-lg p-4 font-mono text-sm text-yellow-100 max-h-48 overflow-y-auto leading-relaxed">
                    {selectedItem.prompt}
                  </div>
                </div>

                <div className="flex gap-3 border-t border-white/10 pt-6">
                  <Button
                    onClick={() => {
                      handleCopyPrompt(selectedItem.prompt);
                      setSelectedItem(null);
                    }}
                    className="flex-1 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-lg py-3"
                  >
                    <Copy className="w-4 h-4 mr-2" /> Copiar Prompt
                  </Button>
                  <Button
                    onClick={() => handleToggleFavorite(selectedItem.id)}
                    className={`px-6 py-3 rounded-lg font-bold transition-all ${
                      favorites.includes(selectedItem.id)
                        ? "bg-red-500/30 border border-red-400 text-red-300"
                        : "bg-white/10 border border-white/20 text-white hover:bg-white/20"
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${favorites.includes(selectedItem.id) ? "fill-current" : ""}`} />
                  </Button>
                  <Button
                    onClick={() => setSelectedItem(null)}
                    className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg font-bold"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-yellow-400/10 to-yellow-400/5 border border-yellow-400/30 rounded-2xl p-12 text-center space-y-6">
          <h2 className="text-4xl font-playfair font-bold text-white">Crie Campanhas de Luxo</h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Use o nosso gerador de prompts de elite para criar campanhas que rivalizam com as maiores marcas de moda do mundo.
          </p>
          <Link href="/prompts">
            <Button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-lg px-8 py-4 rounded-xl shadow-lg shadow-yellow-400/30">
              Ir para o Gerador <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
