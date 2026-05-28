import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: number;
  brand: string;
  logo: string;
  quote: string;
  author: string;
  role: string;
  metric: string;
  metricValue: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    brand: "Luxe Couture",
    logo: "LC",
    quote: "A skill Locatelli Studio transformou completamente nossa estratégia de marketing. Agora geramos campanhas em minutos ao invés de semanas.",
    author: "Sofia Martinez",
    role: "Diretora de Marketing",
    metric: "Aumento em Engajamento",
    metricValue: "+45%",
    rating: 5,
  },
  {
    id: 2,
    brand: "Urban Streetwear",
    logo: "US",
    quote: "Conseguimos escalar nossa produção de conteúdo de forma impressionante. A qualidade das campanhas geradas é profissional e consistente.",
    author: "João Silva",
    role: "Gerente de Conteúdo",
    metric: "Redução de Tempo",
    metricValue: "-70%",
    rating: 5,
  },
  {
    id: 3,
    brand: "Eco Fashion Co",
    logo: "EF",
    quote: "Perfeito para marcas sustentáveis como a nossa. Conseguimos manter nossa identidade visual em múltiplos ambientes e estilos.",
    author: "Maria Santos",
    role: "Fundadora",
    metric: "Campanhas/Mês",
    metricValue: "50+",
    rating: 5,
  },
  {
    id: 4,
    brand: "Indie Designs",
    logo: "ID",
    quote: "Como criadora independente, essa skill me permitiu competir com grandes marcas. O ROI foi imediato e impressionante.",
    author: "Ana Costa",
    role: "Criadora de Moda",
    metric: "Aumento em Vendas",
    metricValue: "+120%",
    rating: 5,
  },
  {
    id: 5,
    brand: "Athletic Plus",
    logo: "AP",
    quote: "A versatilidade de ambientes e estilos é incrível. Conseguimos criar campanhas para praia, urbano, estúdio... tudo em um só lugar.",
    author: "Carlos Oliveira",
    role: "Diretor Criativo",
    metric: "Satisfação de Clientes",
    metricValue: "98%",
    rating: 5,
  },
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setAutoPlay(false);
  };

  const current = testimonials[currentIndex];

  return (
    <div className="w-full space-y-8">
      {/* Main Testimonial Card */}
      <div className="relative bg-white border border-accent/20 rounded-sm p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300">
        {/* Brand Logo */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent/70 rounded-sm flex items-center justify-center">
            <span className="text-sm font-bold text-primary">{current.logo}</span>
          </div>
          <div>
            <h4 className="font-semibold text-primary text-lg">{current.brand}</h4>
            <p className="text-xs text-foreground/60">{current.role}</p>
          </div>
        </div>

        {/* Rating */}
        <div className="flex gap-1 mb-4">
          {Array.from({ length: current.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-accent text-accent" />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-lg text-foreground/80 mb-6 leading-relaxed italic">
          "{current.quote}"
        </blockquote>

        {/* Author */}
        <div className="flex items-center justify-between mb-6 pb-6 border-b border-accent/10">
          <div>
            <p className="font-semibold text-primary">{current.author}</p>
            <p className="text-sm text-foreground/60">{current.role}</p>
          </div>
          {/* Metric */}
          <div className="text-right">
            <p className="text-xs text-foreground/60 uppercase tracking-widest">{current.metric}</p>
            <p className="text-2xl font-bold text-accent">{current.metricValue}</p>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            size="sm"
            onClick={goToPrevious}
            className="rounded-sm border-accent/30 text-primary hover:bg-accent/5"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          {/* Dots Navigation */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-accent w-8"
                    : "bg-accent/30 w-2 hover:bg-accent/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={goToNext}
            className="rounded-sm border-accent/30 text-primary hover:bg-accent/5"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Slide Counter */}
      <div className="text-center text-sm text-foreground/60">
        Depoimento {currentIndex + 1} de {testimonials.length}
      </div>
    </div>
  );
}
