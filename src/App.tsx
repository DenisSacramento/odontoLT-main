/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Instagram, 
  Phone, 
  MapPin, 
  ChevronRight, 
  Star, 
  Award, 
  ShieldCheck, 
  Sparkles, 
  Stethoscope,
  Clock,
  Menu,
  X
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

gsap.registerPlugin(ScrollTrigger);

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const bentoRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Entrance
      const heroTl = gsap.timeline();
      heroTl.from('.hero-title', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.2
      })
      .from('.hero-sub', {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      }, '-=0.8')
      .from('.hero-cta', {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.7)'
      }, '-=0.5');

      // Scroll Reveal for Bento Grid
      gsap.from('.bento-item', {
        scrollTrigger: {
          trigger: bentoRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });

      // Scroll Reveal for Services
      gsap.from('.service-card', {
        scrollTrigger: {
          trigger: servicesRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out'
      });

      // Parallax effect for hero image
      gsap.to('.hero-bg', {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        },
        y: 200,
        ease: 'none'
      });
    });

    return () => ctx.revert();
  }, []);

  const whatsappLink = "https://api.whatsapp.com/send/?phone=5511992108168&text=Ol%C3%A1%2C+gostaria+de+agendar+uma+consulta+com+a+Dra.+La%C3%ADs+Torres.";

  return (
    <div className="min-h-screen bg-dark-bg selection:bg-gold selection:text-dark-bg overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 glass py-6 px-6 md:px-16 flex justify-between items-center border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="logo text-xl font-bold tracking-[0.2em] uppercase font-serif">LT Odontologia</div>
        </div>
        
        <div className="hidden md:flex items-center gap-10 text-[11px] font-medium uppercase tracking-[0.15em] text-white/60">
          <a href="#differentials" className="hover:text-gold transition-colors">Procedimentos</a>
          <a href="#services" className="hover:text-gold transition-colors">A Clínica</a>
          <a href="#about" className="hover:text-gold transition-colors">Depoimentos</a>
          <a href="#contact" className="hover:text-gold transition-colors">Contato</a>
        </div>

        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gold text-dark-bg px-6 py-3 text-[11px] font-bold uppercase tracking-widest rounded-sm hover:bg-gold-light transition-all transform active:scale-95"
        >
          Agendar Consulta
        </a>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2070" 
            alt="Consultório Odontológico de Luxo"
            className="hero-bg w-full h-full object-cover opacity-30 scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-transparent to-dark-bg" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
          <div className="hero-content">
            <div className="hero-tag">Luxo & Tecnologia</div>
            <h2 className="hero-title hero-heading mb-8">
              Onde a Ciência encontra o <span className="italic text-gold">Refinamento.</span>
            </h2>
            <p className="hero-sub text-lg text-white/60 mb-10 max-w-md font-light leading-relaxed">
              Dra. Laís Torres. Elevando a odontologia e a estética orofacial ao patamar de arte. Localizada no coração de Santo André.
            </p>
            <div className="hero-cta flex items-center gap-6">
              <div className="w-16 h-px bg-gold hidden sm:block" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/80 font-medium">Pioneira em Otomodelação</span>
            </div>
            <div className="mt-12">
              <a 
                href="https://api.whatsapp.com/send/?phone=5511992108168&text=Ol%C3%A1%2C+gostaria+de+agendar+uma+consulta+com+a+Dra.+La%C3%ADs+Torres."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gold text-dark-bg px-10 py-5 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-gold-light transition-all group"
              >
                Iniciar Transformação
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div ref={bentoRef} className="bento-grid grid grid-cols-2 gap-4">
            {[
              { title: "Harmonização", desc: "Pós-graduação e olhar refinado.", img: "/harmonizacao.png" },
              { title: "Otomodelação", desc: "Referência nacional sem cortes.", img: "/otomodelacao2.png" },
              { title: "Implantes", desc: "Precisão digital e tecnologia.", img: "/implante.png" },
              { title: "Autoridade", desc: "Professora e Especialista.", img: "/prof-especialista.jpg" }
            ].map((item, idx) => (
              <div key={idx} className="bento-item glass p-6 rounded-2xl flex flex-col justify-between hover:border-gold/50 transition-colors group">
                <div>
                  <div className="bento-title text-[13px] font-bold text-gold uppercase mb-2 tracking-wider">{item.title}</div>
                  <div className="bento-desc text-[12px] text-white/50 leading-tight">{item.desc}</div>
                </div>
                <div className="mt-4 aspect-video rounded-lg overflow-hidden relative">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-500" referrerPolicy="no-referrer" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authority Bar */}
      <section className="authority-bar glass py-10 px-6 md:px-16 flex flex-wrap justify-between items-center gap-8 border-y border-white/10">
        <div className="stat-item text-center">
          <div className="stat-val text-3xl font-serif text-gold mb-1">12k+</div>
          <div className="stat-label text-[10px] uppercase tracking-widest text-white/50 font-medium">Seguidores</div>
        </div>
        <div className="stat-item text-center">
          <div className="stat-val text-3xl font-serif text-gold mb-1">4.8★</div>
          <div className="stat-label text-[10px] uppercase tracking-widest text-white/50 font-medium">Avaliação Google</div>
        </div>
        <div className="stat-item text-center">
          <div className="stat-val text-3xl font-serif text-gold mb-1">141</div>
          <div className="stat-label text-[10px] uppercase tracking-widest text-white/50 font-medium">Casos de Sucesso</div>
        </div>
        <div className="stat-item text-center">
          <div className="stat-val text-3xl font-serif text-gold mb-1">VIP</div>
          <div className="stat-label text-[10px] uppercase tracking-widest text-white/50 font-medium">Atendimento Exclusivo</div>
        </div>
        <div className="text-[10px] opacity-30 text-white uppercase tracking-[0.2em] font-medium hidden lg:block">
          Copyright © 2026 LT Odontologia
        </div>
      </section>

      {/* Differentials - Bento Grid */}
      <section id="differentials" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h3 className="text-gold text-xs font-bold tracking-[0.4em] uppercase mb-4">Por que nos escolher</h3>
          <h2 className="text-4xl md:text-6xl font-medium">Excelência em cada detalhe</h2>
        </div>

        <div ref={bentoRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
          {/* Bento Item 1 */}
          <div className="bento-item md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden relative group">
            <img 
              src="/otomodelacao.png" 
              alt="Pioneirismo em Otomodelação"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="w-12 h-12 rounded-xl bg-gold/20 backdrop-blur-md border border-gold/30 flex items-center justify-center mb-4">
                <Sparkles className="text-gold w-6 h-6" />
              </div>
              <h4 className="text-2xl font-medium mb-2">Pioneirismo em Otomodelação</h4>
              <p className="text-white/60 text-sm max-w-md">
                Técnicas modernas e resultados naturais que valorizam a beleza individual, corrigindo imperfeições com precisão cirúrgica.
              </p>
            </div>
          </div>

          {/* Bento Item 2 */}
          <div className="bento-item rounded-3xl glass p-8 flex flex-col justify-between group hover:border-gold/30 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
              <Award className="text-gold w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xl font-medium mb-2">Pós-Graduada em HOF</h4>
              <p className="text-white/50 text-xs leading-relaxed">
                Ciência e estética unidas para resultados equilibrados e sofisticados em Harmonização Orofacial.
              </p>
            </div>
          </div>

          {/* Bento Item 3 */}
          <div className="bento-item rounded-3xl bg-gold p-8 flex flex-col justify-between group">
            <div className="w-10 h-10 rounded-lg bg-dark-bg/10 flex items-center justify-center">
              <Stethoscope className="text-dark-bg w-5 h-5" />
            </div>
            <div className="text-dark-bg">
              <h4 className="text-xl font-bold mb-2">Especialista Clínica</h4>
              <p className="text-dark-bg/70 text-xs leading-relaxed font-medium">
                Ampla experiência em Prótese, Implantes e Cirurgias, garantindo segurança e precisão.
              </p>
            </div>
          </div>

          {/* Bento Item 4 */}
          <div className="bento-item md:col-span-1 rounded-3xl glass p-8 flex flex-col justify-between group hover:border-gold/30 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
              <ShieldCheck className="text-gold w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xl font-medium mb-2">Professora de HOF</h4>
              <p className="text-white/50 text-xs leading-relaxed">
                Atuação acadêmica na Faculdade CTA, mantendo-se na vanguarda das inovações da área.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-dark-card/30">
        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div className="max-w-2xl">
              <h3 className="text-gold text-xs font-bold tracking-[0.4em] uppercase mb-4">Nossos Serviços</h3>
              <h2 className="text-4xl md:text-6xl font-medium">Tratamentos de Alta Performance</h2>
            </div>
            <p className="text-white/50 max-w-md text-sm leading-relaxed">
              Combinamos tecnologia de ponta com um olhar artístico para entregar resultados que superam expectativas.
            </p>
          </div>

          <div ref={servicesRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Otomodelação", desc: "Correção estética das orelhas sem cortes invasivos.", icon: <Sparkles /> },
              { title: "Harmonização Facial", desc: "Preenchimentos e bioestimuladores para rejuvenescimento.", icon: <Star /> },
              { title: "Implantes Dentários", desc: "Reabilitação oral com tecnologia de carga imediata.", icon: <ShieldCheck /> },
              { title: "Próteses Estéticas", desc: "Lentes de contato e facetas em porcelana pura.", icon: <Award /> }
            ].map((service, idx) => (
              <div key={idx} className="service-card group glass p-8 rounded-3xl hover:bg-white/10 transition-all cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {/* Clone icon to add gold color */}
                  {Object.assign({}, service.icon, { props: { ...service.icon.props, className: "text-gold w-7 h-7" } })}
                </div>
                <h4 className="text-xl font-medium mb-4 group-hover:text-gold transition-colors">{service.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed mb-6">{service.desc}</p>
                <div className="flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Saiba mais <ChevronRight className="w-3 h-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-black">
              <img 
                src="/dra-lais-torres.png" 
                alt="Dra. Laís Torres - Especialista em Harmonização Orofacial"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback if image is not uploaded yet
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=2070";
                }}
              />
              {/* Sparkle Icons from the provided image */}
              <div className="absolute top-10 left-10 pointer-events-none opacity-80">
                <Sparkles className="text-white w-12 h-12" />
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 glass p-8 rounded-2xl hidden md:block max-w-xs border border-gold/20">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold text-gold" />)}
              </div>
              <p className="text-sm italic text-white/80">"Excelente profissional e muito cuidadosa. Transformou meu sorriso e minha confiança."</p>
              <p className="text-[10px] font-bold uppercase tracking-widest mt-4 text-gold">— Larissa Monteiro</p>
            </div>
          </div>

          <div>
            <h3 className="text-gold text-xs font-bold tracking-[0.4em] uppercase mb-4">Conheça a Especialista</h3>
            <h2 className="text-4xl md:text-6xl font-medium mb-8">Dra. Laís Torres</h2>
            <div className="space-y-6 text-white/60 leading-relaxed">
              <p>
                Escolher o profissional certo faz toda a diferença quando se trata de estética, saúde e autoestima. Aqui você encontra excelência, experiência e inovação.
              </p>
              <p>
                Pioneira em Otomodelação, a Dra. Laís Torres traz técnicas modernas e resultados naturais que valorizam a beleza individual de cada paciente.
              </p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                  <span className="text-sm font-medium text-white">Pós-Graduada em Harmonização Orofacial</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                  <span className="text-sm font-medium text-white">Especialista em Prótese, Implantes e Cirurgias</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                  <span className="text-sm font-medium text-white">Professora de HOF na Faculdade CTA</span>
                </li>
              </ul>
            </div>
            <div className="mt-12 flex items-center gap-8">
              <div className="text-center">
                <p className="text-3xl font-serif text-gold">12k+</p>
                <p className="text-[10px] uppercase tracking-widest opacity-50">Seguidores</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center">
                <p className="text-3xl font-serif text-gold">20+</p>
                <p className="text-[10px] uppercase tracking-widest opacity-50">Avaliações 5★</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center">
                <p className="text-3xl font-serif text-gold">10y+</p>
                <p className="text-[10px] uppercase tracking-widest opacity-50">Experiência</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto glass rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gold rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-gold rounded-full blur-[120px]" />
          </div>
          
          <h2 className="text-4xl md:text-7xl font-medium mb-8 relative z-10">Pronto para sua <span className="italic text-gold">melhor versão?</span></h2>
          <p className="text-white/60 mb-12 max-w-xl mx-auto text-lg relative z-10">
            Agende agora sua avaliação personalizada e descubra como podemos realçar sua beleza natural.
          </p>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gold text-dark-bg px-12 py-6 rounded-full font-bold uppercase tracking-[0.2em] text-sm hover:bg-gold-light transition-all transform hover:scale-105 relative z-10"
          >
            Agendar via WhatsApp
            <Phone className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-20 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 border border-gold flex items-center justify-center rounded-sm">
                <span className="text-gold font-serif text-lg font-bold">LT</span>
              </div>
              <h1 className="text-xs font-bold tracking-[0.2em] uppercase">LT Odontologia</h1>
            </div>
            <p className="text-white/40 text-sm max-w-sm mb-8 leading-relaxed">
              Excelência em odontologia avançada e harmonização facial. Localizado em Santo André, atendendo toda a região de São Paulo com exclusividade.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/dralaistorresf/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-gold transition-colors">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-gold">Localização</h4>
            <div className="space-y-4 text-white/50 text-sm">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0" />
                <p>Av. Palmares, 884 - Vila Palmares, Santo André - SP, 09061-410</p>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-gold shrink-0" />
                <p>Seg - Sex: 09:00 - 18:30</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-gold">Links Rápidos</h4>
            <ul className="space-y-3 text-white/50 text-sm">
              <li><a href="#differentials" className="hover:text-gold transition-colors">Diferenciais</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Procedimentos</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">Sobre a Dra.</a></li>
              <li><a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Agendar Consulta</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-white/30">
          <p>© 2026 LT Odontologia & Estética. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
          </div>
        </div>
      </footer>

      {/* Custom Styles for Marquee */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
