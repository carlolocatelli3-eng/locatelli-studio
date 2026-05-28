import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import GallerySection from "@/components/GallerySection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import HeroCarousel from "@/components/HeroCarousel";
import { Sparkles, ArrowRight, Zap, Layout, Eye, ChevronDown } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { useParallax } from "@/hooks/useParallax";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"workflow" | "benefits" | "guide">("workflow");
  
  // Scroll reveal animations
  const workflowSection = useInView({ threshold: 0.2, once: true });
  const benefitsSection = useInView({ threshold: 0.2, once: true });
  const testimonialsSection = useInView({ threshold: 0.2, once: true });
  const gallerySection = useInView({ threshold: 0.2, once: true });
  const ctaSection = useInView({ threshold: 0.2, once: true });
  
  // Parallax effect for hero image
  const { ref: heroRef, offset: heroOffset } = useParallax(0.3);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation - Luxury Black */}
      <nav className="sticky top-0 z-50 bg-primary/95 backdrop-blur-md border-b border-accent/20">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent rounded-sm flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <span className="font-playfair text-xl font-bold text-white">Locatelli Studio</span>
          </div>
          <div className="flex items-center gap-8">
            <a href="#workflow" className="text-sm text-white/80 hover:text-accent transition-colors">
              Fluxo
            </a>
            <a href="#benefits" className="text-sm text-white/80 hover:text-accent transition-colors">
              Benefícios
            </a>
            <a href="#testimonials" className="text-sm text-white/80 hover:text-accent transition-colors">
              Depoimentos
            </a>
            <a href="#guide" className="text-sm text-white/80 hover:text-accent transition-colors">
              Guia
            </a>
            <Link href="/galeria" className="text-sm font-semibold bg-accent text-primary px-4 py-2 rounded-sm hover:bg-accent/90 transition-colors">
              Galeria
            </Link>
            <Link href="/prompts" className="text-sm font-semibold bg-accent text-primary px-4 py-2 rounded-sm hover:bg-accent/90 transition-colors">
              Prompts
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section - Compact and Impactful */}
      <section className="relative h-screen overflow-hidden bg-gradient-to-br from-background via-background to-muted/5 flex items-center">
        <div className="container w-full h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center h-full">
            {/* Left Content - Fade In */}
            <div className="space-y-4 fade-in-left">
              <div className="space-y-2">
                <div className="inline-block animate-fade-in-up">
                  <span className="text-xs font-semibold tracking-widest text-accent uppercase">Transformação Digital</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-playfair font-bold leading-tight text-primary animate-fade-in-up stagger-1">
                  Locatelli Studio
                </h1>
                <p className="text-sm md:text-base text-foreground/70 max-w-lg leading-relaxed animate-fade-in-up stagger-2">
                  Transforme fotografias em campanhas profissionais com IA.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 pt-2 animate-fade-in-up stagger-3">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-sm" onClick={() => window.location.href = '/galeria'}>
                  Explorar Galeria <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/5 rounded-sm">
                  Documentação
                </Button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-3 pt-2 animate-fade-in-up stagger-4">
                <div className="space-y-1 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-accent" />
                  </div>
                  <p className="text-sm font-semibold text-primary">Rápido</p>
                  <p className="text-xs text-foreground/60">Minutos</p>
                </div>
                <div className="space-y-1 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-2">
                    <Layout className="w-5 h-5 text-accent" />
                  </div>
                  <p className="text-sm font-semibold text-primary">Escalável</p>
                  <p className="text-xs text-foreground/60">Ambientes</p>
                </div>
                <div className="space-y-1 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-2">
                    <Eye className="w-5 h-5 text-accent" />
                  </div>
                  <p className="text-sm font-semibold text-primary">Premium</p>
                  <p className="text-xs text-foreground/60">Qualidade</p>
                </div>
              </div>
            </div>

            {/* Right Visual - Hero Carousel */}
            <div className="relative fade-in-right h-full flex items-center justify-center overflow-hidden">
              <div 
                ref={heroRef}
                style={{ transform: `translateY(${heroOffset}px)` }}
                className="parallax-slow w-full h-full rounded-sm shadow-2xl border border-accent/20"
              >
                <HeroCarousel />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-5 h-5 text-accent/50" />
        </div>
      </section>

      {/* Workflow Section */}
      <section 
        id="workflow" 
        ref={workflowSection.ref}
        className="py-24 md:py-32 bg-white border-t border-accent/10"
      >
        <div className="container">
          <div className="space-y-16">
            <div className={`space-y-4 text-center transition-all duration-700 ${workflowSection.isInView ? 'fade-in-up opacity-100' : 'opacity-0'}`}>
              <span className="text-xs font-semibold tracking-widest text-accent uppercase">Processo</span>
              <h2 className="text-5xl font-playfair font-bold text-primary">Fluxo de Trabalho</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Transforme fotografias reais em campanhas profissionais em 4 etapas simples
              </p>
            </div>

            {/* Workflow Steps */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { num: "01", title: "Captura", desc: "Fotografia do produto real" },
                { num: "02", title: "Análise", desc: "IA analisa características" },
                { num: "03", title: "Geração", desc: "Cria múltiplas variações" },
                { num: "04", title: "Resultado", desc: "Campanhas prontas para uso" },
              ].map((step, idx) => (
                <div 
                  key={idx}
                  className={`relative group transition-all duration-700 ${
                    workflowSection.isInView ? 'fade-in-up opacity-100' : 'opacity-0'
                  }`}
                  style={{ transitionDelay: workflowSection.isInView ? `${idx * 100}ms` : '0ms' }}
                >
                  <div className="bg-white border border-accent/20 p-8 rounded-sm hover:border-accent/50 hover:shadow-lg transition-all duration-300">
                    <div className="text-4xl font-playfair font-bold text-accent/30 mb-4">{step.num}</div>
                    <h3 className="text-xl font-semibold text-primary mb-2">{step.title}</h3>
                    <p className="text-sm text-foreground/60">{step.desc}</p>
                  </div>
                  {idx < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-accent to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section 
        id="benefits" 
        ref={benefitsSection.ref}
        className="py-24 md:py-32 bg-muted/5"
      >
        <div className="container">
          <div className="space-y-16">
            <div className={`space-y-4 text-center transition-all duration-700 ${benefitsSection.isInView ? 'fade-in-up opacity-100' : 'opacity-0'}`}>
              <span className="text-xs font-semibold tracking-widest text-accent uppercase">Vantagens</span>
              <h2 className="text-5xl font-playfair font-bold text-primary">Por Que Usar</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Eficiência", desc: "Gere campanhas em minutos ao invés de horas" },
                { title: "Consistência", desc: "Mantenha identidade visual em todas as campanhas" },
                { title: "Escalabilidade", desc: "Produza conteúdo em múltiplos ambientes e estilos" },
              ].map((benefit, idx) => (
                <div 
                  key={idx}
                  className={`space-y-4 p-8 bg-white border border-accent/10 rounded-sm hover:border-accent/30 hover:shadow-lg transition-all duration-700 ${
                    benefitsSection.isInView ? 'scale-in opacity-100' : 'opacity-0'
                  }`}
                  style={{ transitionDelay: benefitsSection.isInView ? `${idx * 100}ms` : '0ms' }}
                >
                  <h3 className="text-2xl font-semibold text-primary">{benefit.title}</h3>
                  <p className="text-foreground/70">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        id="testimonials"
        ref={testimonialsSection.ref}
        className="py-24 md:py-32 bg-muted/5 border-t border-accent/10"
      >
        <div className="container">
          <div className={`space-y-12 transition-all duration-700 ${testimonialsSection.isInView ? 'fade-in-up opacity-100' : 'opacity-0'}`}>
            <div className="space-y-4 text-center">
              <span className="text-xs font-semibold tracking-widest text-accent uppercase">Confiança</span>
              <h2 className="text-5xl font-playfair font-bold text-primary">O Que Nossos Clientes Dizem</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Marcas de moda de todos os tamanhos confiam na skill Locatelli Studio
              </p>
            </div>
            <TestimonialsCarousel />
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section 
        ref={gallerySection.ref}
        className="py-24 md:py-32 bg-white border-t border-accent/10"
      >
        <div className="container">
          <div className={`space-y-12 transition-all duration-700 ${gallerySection.isInView ? 'fade-in-up opacity-100' : 'opacity-0'}`}>
            <div className="space-y-4 text-center">
              <span className="text-xs font-semibold tracking-widest text-accent uppercase">Exemplos</span>
              <h2 className="text-5xl font-playfair font-bold text-primary">Galeria de Campanhas</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Explore exemplos de campanhas geradas em diferentes ambientes e estilos
              </p>
            </div>
            <GallerySection />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        ref={ctaSection.ref}
        className="py-24 md:py-32 bg-primary text-white"
      >
        <div className={`container text-center space-y-8 transition-all duration-700 ${ctaSection.isInView ? 'fade-in-up opacity-100' : 'opacity-0'}`}>
          <div className="space-y-4">
            <h2 className="text-5xl font-playfair font-bold">Pronto para começar?</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Explore a galeria completa e descubra como transformar seus produtos em campanhas profissionais
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold rounded-sm" onClick={() => window.location.href = '/galeria'}>
              Explorar Galeria <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" className="bg-white/20 hover:bg-white/30 text-white font-semibold rounded-sm border border-white/30" onClick={() => window.location.href = '/prompts'}>
              Gerador de Prompts
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white/80 border-t border-accent/20 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-accent" />
                <span className="font-playfair font-bold text-white">Locatelli Studio</span>
              </div>
              <p className="text-sm text-white/60">Transformando moda com IA</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Recursos</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#workflow" className="hover:text-accent transition-colors">Fluxo</a></li>
                <li><a href="#benefits" className="hover:text-accent transition-colors">Benefícios</a></li>
                <li><Link href="/galeria" className="hover:text-accent transition-colors">Galeria</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Ferramentas</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/prompts" className="hover:text-accent transition-colors">Gerador de Prompts</Link></li>
                <li><a href="#" className="hover:text-accent transition-colors">Documentação</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Contato</h4>
              <p className="text-sm text-white/60">Entre em contato para mais informações</p>
            </div>
          </div>
          <div className="border-t border-accent/20 pt-8 text-center text-sm text-white/60">
            <p>&copy; 2026 Locatelli Studio. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
