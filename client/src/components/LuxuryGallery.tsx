import { useState } from "react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, Copy, X, Heart, ChevronRight } from "lucide-react";
import { toast } from "sonner";

// Galeria de Luxo - 8 Referências Mundiais de Alta Costura
const LUXURY_ITEMS = [
  {
    id: 1,
    brand: "CHANEL",
    title: "Tweed Elegance",
    description: "A essência da sofisticação parisiense. Jaqueta de tweed estruturada com pérolas autênticas.",
    image: "https://images.unsplash.com/photo-1595777707802-221b0ae4e3fb?w=1200&h=1400&fit=crop&q=95",
    prompt: "Chanel haute couture, structured tweed jacket, pearl accessories, Parisian elegance, Hasselblad 500C/M, studio lighting --ar 4:5 --stylize 800 --v 6.0"
  },
  {
    id: 2,
    brand: "DIOR",
    title: "New Look Ball Gown",
    description: "A revolução da silhueta. Vestido de baile com saia volumosa e cintura marcada.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=1400&fit=crop&q=95",
    prompt: "Christian Dior New Look, voluminous silk gown, cinched waist, dramatic silhouette, Phase One IQ4, dramatic lighting --ar 4:5 --stylize 850 --v 6.0"
  },
  {
    id: 3,
    brand: "VALENTINO",
    title: "Red Carpet Glamour",
    description: "O vermelho icónico que define gerações. Vestido de noite em seda vermelha intensa.",
    image: "https://images.unsplash.com/photo-1539008588-bbf93b20d075?w=1200&h=1400&fit=crop&q=95",
    prompt: "Valentino red carpet, iconic red silk gown, perfect tailoring, cinematic glamour, Leica M11, dramatic lighting --ar 4:5 --stylize 880 --v 6.0"
  },
  {
    id: 4,
    brand: "TOM FORD",
    title: "Black Tailoring",
    description: "Minimalismo luxuoso e poder absoluto. Terno preto impecável com corte arquitetónico.",
    image: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=1200&h=1400&fit=crop&q=95",
    prompt: "Tom Ford haute couture, perfectly cut black suit, architectural silhouette, minimalist luxury, Canon 5D Mark IV --ar 4:5 --stylize 800 --v 6.0"
  },
  {
    id: 5,
    brand: "SCHIAPARELLI",
    title: "Surrealism",
    description: "Formas impossíveis e detalhes oníricos que desafiam a realidade visual.",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1200&h=1400&fit=crop&q=95",
    prompt: "Schiaparelli surrealism, impossible shapes, surreal details, conceptual fashion art, Mamiya RB67, theatrical lighting --ar 4:5 --stylize 900 --v 6.0"
  },
  {
    id: 6,
    brand: "PRADA",
    title: "Technical Innovation",
    description: "Quando a tecnologia encontra a alta costura. Nylon técnico e design funcional.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&h=1400&fit=crop&q=95",
    prompt: "Prada technical haute couture, innovative nylon jacket, modern silhouette, functional luxury, Hasselblad --ar 4:5 --stylize 750 --v 6.0"
  },
  {
    id: 7,
    brand: "GUCCI",
    title: "Baroque Opulence",
    description: "Luxo decorativo e exuberante. Padrões florais vibrantes e cores saturadas.",
    image: "https://images.unsplash.com/photo-1552062407-c551eeda4bbb?w=1200&h=1400&fit=crop&q=95",
    prompt: "Gucci baroque haute couture, vibrant floral patterns, ornate details, saturated colors, Pentax 67 --ar 4:5 --stylize 820 --v 6.0"
  },
  {
    id: 8,
    brand: "HERMÈS",
    title: "Artisanal Craft",
    description: "Artesanato supremo e discreto. Seda francesa em padrões exclusivos.",
    image: "https://images.unsplash.com/photo-1470229722913-7f419344ca51?w=1200&h=1400&fit=crop&q=95",
    prompt: "Hermès artisanal haute couture, French silk dress, exclusive patterns, supreme craftsmanship, Leica M10 --ar 4:5 --stylize 780 --v 6.0"
  }
];

export default function LuxuryGallery() {
  const [selectedItem, setSelectedItem] = useState<typeof LUXURY_ITEMS[0] | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);

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
            <Link href="/luxury-gallery" className="text-sm font-bold bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-300 transition-colors">Galeria</Link>
            <Link href="/prompts" className="text-sm text-white/70 hover:text-yellow-400 transition-colors font-semibold">Prompts</Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 max-w-7xl py-16">
        {/* Header */}
        <div className="mb-20 text-center space-y-4">
          <Badge className="px-4 py-2 bg-yellow-400/20 border border-yellow-400 text-yellow-300 text-xs font-bold uppercase tracking-widest">Referências Mundiais de Luxo</Badge>
          <h1 className="text-7xl font-playfair font-bold text-white">Galeria de Moda</h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            As 8 maiores referências de alta costura do mundo. Cada campanha com seu Master Prompt técnico.
          </p>
        </div>

        {/* Gallery Grid - 2x4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          {LUXURY_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative overflow-hidden rounded-xl bg-white/5 border border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/20">
                {/* Image */}
                <div className="relative h-96 overflow-hidden bg-black">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-8 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs text-yellow-300 font-bold uppercase tracking-widest mb-2">{item.brand}</p>
                      <h3 className="text-2xl font-bold text-white leading-tight">{item.title}</h3>
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

                  <p className="text-base text-white/70 leading-relaxed">{item.description}</p>

                  <div className="flex gap-3 pt-4">
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopyPrompt(item.prompt);
                      }}
                      className="flex-1 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-lg text-sm py-2"
                    >
                      <Copy className="w-4 h-4 mr-2" /> Copiar
                    </Button>
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedItem(item);
                      }}
                      className="flex-1 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold rounded-lg text-sm py-2"
                    >
                      Ver Prompt
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-400/5 border border-yellow-400/30 rounded-2xl p-12 text-center space-y-6">
          <h2 className="text-4xl font-playfair font-bold text-white">Crie Campanhas de Luxo</h2>
          <p className="text-xl text-white/60">Use o gerador de prompts para criar campanhas que rivalizam com as maiores marcas.</p>
          <Link href="/prompts">
            <Button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-lg px-8 py-4 rounded-xl">
              Ir para o Gerador <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white/5 border border-yellow-400/30 rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden max-h-[90vh] overflow-y-auto">
            <div className="relative h-96 overflow-hidden">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-lg"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            <div className="p-8 space-y-6">
              <div>
                <p className="text-sm text-yellow-300 font-bold uppercase tracking-widest mb-2">{selectedItem.brand}</p>
                <h2 className="text-3xl font-playfair font-bold text-white mb-4">{selectedItem.title}</h2>
                <p className="text-base text-white/70 leading-relaxed">{selectedItem.description}</p>
              </div>

              <div className="space-y-3 border-t border-white/10 pt-6">
                <h3 className="text-white font-bold text-sm uppercase tracking-widest">Master Prompt</h3>
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
                  className={`px-6 py-3 rounded-lg font-bold ${
                    favorites.includes(selectedItem.id)
                      ? "bg-red-500/30 border border-red-400 text-red-300"
                      : "bg-white/10 border border-white/20 text-white hover:bg-white/20"
                  }`}
                >
                  <Heart className={`w-4 h-4 ${favorites.includes(selectedItem.id) ? "fill-current" : ""}`} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
