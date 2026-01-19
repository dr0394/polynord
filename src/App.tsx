import { useState } from 'react';
import Navigation from './components/Navigation';
import MultiStepForm from './components/MultiStepForm';
import CookieBanner from './components/CookieBanner';
import WhatsAppButton from './components/WhatsAppButton';
import AnimatedSection from './components/AnimatedSection';
import FloatingElement from './components/FloatingElement';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import ParallaxSection from './components/ParallaxSection';
import { Check, Sun, Shield, TrendingDown, Sparkles, Home, Building2, Eye, Clock, MessageSquare, MapPin, Phone, Mail, Star, Zap, ArrowRight, ChevronRight, Award, Target, Users } from 'lucide-react';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navigation onOpenForm={() => setIsFormOpen(true)} />
      <MultiStepForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      <CookieBanner />
      <WhatsAppButton />

      {/* HERO - Asymmetric Split Screen with Diagonal */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-primary-500 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-secondary-500 rounded-full blur-[100px]"></div>
        </div>

        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        ></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[80vh]">
            <div className="lg:col-span-7">

              <AnimatedSection animation="fade-right" delay={100}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 sm:mb-10 leading-[1.05]">
                  <span className="text-white block mb-3 sm:mb-4 drop-shadow-2xl">Kühle Räume</span>
                  <span className="text-gradient-hero block mb-3 sm:mb-4 drop-shadow-2xl">ohne Klimaanlage</span>
                  <span className="text-white/70 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light block tracking-wide">durch Sonnenschutzfolien</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={300}>
                <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 lg:mb-10 leading-relaxed max-w-2xl">
                  Bis zu <span className="text-primary-400 font-bold">10°C kühler</span>, <span className="text-primary-400 font-bold">99% UV-Schutz</span> und <span className="text-primary-400 font-bold">30% Energieersparnis</span> – professionell montiert.
                </p>
              </AnimatedSection>

              {/* Mobile Image - Show between subtitle and CTA buttons */}
              <div className="lg:hidden mb-8">
                <AnimatedSection animation="fade-up" delay={350}>
                  <div className="relative">
                    <div className="absolute -inset-6 bg-gradient-to-r from-primary-500/30 to-yellow-500/20 rounded-[2rem] blur-3xl"></div>
                    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                      <img
                        src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200"
                        alt="Sonnenschutz"
                        className="w-full h-[280px] sm:h-[350px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-800/30 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="glass-premium p-5 rounded-xl">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center shadow-xl flex-shrink-0">
                              <Check className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <div className="text-white font-bold text-base sm:text-lg mb-0.5">Professionell montiert</div>
                              <div className="text-primary-200 font-medium text-sm">In nur 1 Tag</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              <AnimatedSection animation="fade-up" delay={500}>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <button
                    onClick={() => setIsFormOpen(true)}
                    className="group relative flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-2xl transition-all font-bold text-base sm:text-lg shadow-2xl hover:shadow-primary-500/50 magnetic-button overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      Kostenlose Beratung
                      <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </button>
                  <button
                    onClick={() => {
                      const el = document.getElementById('leistungen');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-8 sm:px-10 py-4 sm:py-5 glass-effect hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 rounded-2xl transition-all font-semibold text-base sm:text-lg backdrop-blur-md"
                  >
                    Mehr erfahren
                  </button>
                </div>

                <div className="flex items-center gap-3 glass-premium px-5 sm:px-6 py-3 sm:py-4 rounded-2xl w-fit">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1 mb-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-white font-bold ml-1 text-sm sm:text-base">4.8</span>
                    </div>
                    <span className="text-white/80 text-xs sm:text-sm">Google Bewertungen</span>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={700}>
                <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-0">
                  {[
                    { icon: Shield, text: '99% UV-Schutz', color: 'emerald' },
                    { icon: TrendingDown, text: '80% weniger Hitze', color: 'teal' },
                    { icon: Award, text: '5 Jahre Garantie', color: 'yellow' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 sm:gap-3 glass-premium px-4 sm:px-6 py-3 sm:py-4 rounded-2xl hover:scale-105 transition-transform cursor-pointer group">
                      <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br ${
                        item.color === 'yellow'
                          ? 'from-yellow-400 to-amber-500'
                          : item.color === 'teal'
                          ? 'from-secondary-400 to-primary-500'
                          : 'from-primary-400 to-primary-600'
                      } flex items-center justify-center shadow-lg flex-shrink-0`}>
                        <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <span className="text-white font-semibold text-sm sm:text-base">{item.text}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Desktop Image - Hidden on mobile */}
            <div className="hidden lg:block lg:col-span-5 relative">
              <AnimatedSection animation="fade-left" delay={400}>
                <FloatingElement duration={5}>
                  <div className="relative">
                    <div className="absolute -inset-12 bg-gradient-to-r from-primary-500/30 to-yellow-500/20 rounded-[4rem] blur-3xl"></div>
                    <div className="relative rounded-[3rem] overflow-hidden premium-shadow transform lg:rotate-3 hover:rotate-0 transition-all duration-700 hover:scale-105">
                      <img
                        src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200"
                        alt="Sonnenschutz"
                        className="w-full h-[600px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-800/30 to-transparent"></div>
                      <div className="absolute bottom-10 left-10 right-10">
                        <div className="glass-premium p-8 rounded-[2rem]">
                          <div className="flex items-center gap-5">
                            <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center shadow-xl">
                              <Check className="w-8 h-8 text-white" />
                            </div>
                            <div>
                              <div className="text-white font-bold text-xl mb-1">Professionell montiert</div>
                              <div className="text-primary-200 font-medium">In nur 1 Tag</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </FloatingElement>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>


      {/* SECTION 1: WARUM SONNENSCHUTZFOLIEN */}
      <section id="vorteile" className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 max-w-4xl mx-auto">
            <AnimatedSection animation="fade-up">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold mb-6 sm:mb-8 shadow-lg glow-primary">
                <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
                FENSTERFOLIEN SONNENSCHUTZFOLIEN
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight px-4">
                Sonnenschutzfolie bringt eine <span className="text-gradient-premium">Vielzahl an Vorteilen</span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed px-4">
                Intelligente Lösung für angenehmere Temperaturen, UV-Schutz und Energieeinsparungen
              </p>
            </AnimatedSection>
          </div>

          {/* Hauptvorteile Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto mb-12 sm:mb-16 lg:mb-20">
            {[
              { icon: Sun, title: 'Angenehmere Temperaturen', desc: 'Bis zu 80% weniger Wärmeeinstrahlung im Sommer für spürbar kühlere Räume' },
              { icon: Shield, title: '99% UV-Schutz', desc: 'Schutz vor schädlicher UV-Strahlung für Gesundheit und Möbel' },
              { icon: TrendingDown, title: 'Energieeinsparungen', desc: 'Bis zu 30% weniger Kühlkosten bei Klimaanlagen' },
              { icon: Eye, title: 'Blendschutz', desc: 'Reduziert störende Reflexionen und Blendung im Raum' },
              { icon: Check, title: 'Nachträglich anbringbar', desc: 'Außen- und Innenanbringung möglich, schnelle Installation' },
              { icon: Sparkles, title: 'Wartungsfrei', desc: 'Leicht zu reinigen und langlebig, inklusive Splitterschutz' }
            ].map((item, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 50}>
                <div className="bg-white border-2 border-gray-100 rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 hover-lift premium-shadow hover:border-primary-200 transition-all h-full group">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl sm:rounded-2xl flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <item.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Funktionsweise */}
          <div className="max-w-6xl mx-auto mb-12 sm:mb-16 lg:mb-20">
            <AnimatedSection animation="fade-up">
              <div className="bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 md:p-16 premium-shadow premium-card overflow-hidden relative">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                    So funktionieren Sonnenschutzfolien
                  </h3>
                  <p className="text-white/95 text-lg md:text-xl leading-relaxed mb-8">
                    Sonnenstrahlen setzen sich aus drei Komponenten zusammen: dem sichtbaren Licht (ca. 50%), der Infrarotstrahlung (ca. 47%) und der Ultraviolettstrahlung (ca. 3%).
                  </p>
                  <p className="text-white/95 text-lg md:text-xl leading-relaxed mb-10">
                    Genau diese 3% UV-Strahlung können bei Menschen Sonnenbrand und Hautkrebs verursachen und Möbeln sowie Fußböden stark zusetzen. Durch die UV-Filter-Funktion werden mehr als 99% der UV-Strahlen blockiert.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-6">
                    <div className="glass-premium p-6 rounded-3xl">
                      <div className="text-4xl font-bold text-yellow-300 mb-2">50%</div>
                      <div className="text-white font-semibold">Sichtbares Licht</div>
                    </div>
                    <div className="glass-premium p-6 rounded-3xl">
                      <div className="text-4xl font-bold text-yellow-300 mb-2">47%</div>
                      <div className="text-white font-semibold">Infrarotstrahlung</div>
                    </div>
                    <div className="glass-premium p-6 rounded-3xl">
                      <div className="text-4xl font-bold text-yellow-300 mb-2">3%</div>
                      <div className="text-white font-semibold">UV-Strahlung</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Vorher-Nachher Slider */}
          <div className="max-w-6xl mx-auto mb-12 sm:mb-16 lg:mb-20">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-8 sm:mb-12 px-4">
                <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Der <span className="text-gradient-premium">Unterschied</span> ist sichtbar
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  Sehen Sie selbst: Mit unseren Sonnenschutzfolien reduzieren Sie Blendung und Hitze deutlich
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="scale" delay={100}>
              <div className="h-[350px] sm:h-[450px] md:h-[500px] lg:h-[600px] premium-shadow">
                <BeforeAfterSlider
                  beforeImage="/solarvorher.jpg"
                  afterImage="/solarvorher1.jpg"
                  beforeLabel="Ohne Folie"
                  afterLabel="Mit Sonnenschutzfolie"
                />
              </div>
            </AnimatedSection>
          </div>

          {/* Verschiedene Färbungen */}
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-8 sm:mb-12 px-4">
                <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Verschiedene <span className="text-gradient-premium">Färbungen und Stärken</span>
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  Sonnenschutzfolie gibt es in verschiedenen Varianten – von klar bis dunkel, perfekt angepasst an Ihre Anforderungen
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <AnimatedSection animation="fade-right" delay={100}>
                <div className="bg-gradient-to-br from-blue-50 via-primary-50 to-white rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-10 premium-shadow hover-lift h-full relative overflow-hidden">
                  <div className="absolute top-4 right-4 w-24 h-24 sm:w-32 sm:h-32 opacity-20">
                    <img src="/sonnenschutzfolien-3-1-400x400.png" alt="Sonnenschutzfolie" className="w-full h-full object-contain" />
                  </div>
                  <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-xl sm:rounded-2xl shadow-lg mb-5 sm:mb-6 relative z-10">
                    <Sun className="w-7 h-7 sm:w-8 sm:h-8 text-primary-600" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 relative z-10">Helle & klare Folien</h4>
                  <p className="text-gray-700 leading-relaxed mb-4 relative z-10">
                    Optimaler Blick nach draußen bei gleichzeitigem Schutz vor Hitze und UV-Strahlen.
                  </p>
                  <p className="text-gray-600 leading-relaxed relative z-10">
                    Ideal für Wohnzimmer, Büroräume und Konferenzräume mit viel Sonnenlicht.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-left" delay={100}>
                <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-10 premium-shadow hover-lift h-full relative overflow-hidden">
                  <div className="absolute bottom-4 left-4 w-40 h-40 opacity-10">
                    <img src="/sichtschutzfolien-2-1-e1618214261155.png" alt="Sichtschutzfolie" className="w-full h-full object-contain" />
                  </div>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500/20 rounded-2xl shadow-lg mb-6 border border-primary-500/30 relative z-10">
                    <Shield className="w-8 h-8 text-primary-400" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4 relative z-10">Dunkle Folien</h4>
                  <p className="text-white/90 leading-relaxed mb-4 relative z-10">
                    Höhere Absorption von Wärme und UV-Strahlen für maximalen Schutz.
                  </p>
                  <p className="text-white/80 leading-relaxed relative z-10">
                    Perfekt für Serverräume, Lagerhallen oder Archive ohne Tageslichtbedarf.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TECHNISCHE DETAILS & AUSSENMONTAGE */}
      <section id="technisches" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-primary-50/30 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary-200 rounded-full blur-3xl opacity-30"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-12 sm:mb-16 lg:mb-24 mx-auto text-center">
            <AnimatedSection animation="fade-up">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold mb-6 sm:mb-8 shadow-lg glow-primary">
                <Target className="w-3 h-3 sm:w-4 sm:h-4" />
                HERSTELLUNG & MONTAGE
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight px-4">
                Hochwertige <span className="text-gradient-premium">Fensterfolien</span> für maximale Wirkung
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed px-4">
                Professionelle Außenmontage für effektivsten Hitzeschutz und UV-Schutz
              </p>
            </AnimatedSection>
          </div>

          {/* Außenmontage Vorteile */}
          <div className="max-w-6xl mx-auto mb-12 sm:mb-16 lg:mb-20">
            <AnimatedSection animation="fade-up">
              <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 md:p-16 premium-shadow relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-full h-full"
                    style={{
                      backgroundImage: `radial-gradient(circle at 20% 50%, rgba(251, 191, 36, 0.3) 0%, transparent 50%),
                                       radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.4) 0%, transparent 50%)`
                    }}
                  ></div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-6 sm:mb-8 leading-tight">
                    Außenmontage für <span className="text-gold">maximalen Schutz</span>
                  </h3>
                  <p className="text-white/95 text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-10">
                    Die Sonnenenergie wird schon vor der Verglasung reflektiert und absorbiert – für den effektivsten Hitzeschutz und UV-Schutz.
                  </p>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { title: 'Effektivster Hitzeschutz', desc: 'Energie wird vor dem Glas reflektiert' },
                      { title: 'Maximaler UV-Schutz', desc: 'Blockiert 99% aller UV-Strahlen' },
                      { title: 'Energieeinsparungen', desc: 'Bis zu 30% weniger Kühlkosten' },
                      { title: 'Blendschutz', desc: 'Angenehmes Arbeiten ohne Reflexionen' },
                      { title: 'Splitterschutz', desc: 'Zusätzliche Sicherheit inklusive' },
                      { title: 'Preisgünstig', desc: 'Günstiger als viele Alternativen' }
                    ].map((item, i) => (
                      <div key={i} className="glass-premium p-6 rounded-2xl">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-8 h-8 bg-primary-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Check className="w-5 h-5 text-primary-300" />
                          </div>
                          <div>
                            <div className="text-white font-bold mb-1">{item.title}</div>
                            <div className="text-white/80 text-sm">{item.desc}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Verglasungsarten */}
          <div className="max-w-6xl mx-auto mb-20">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                  Geeignet für <span className="text-gradient-premium">alle Verglasungsarten</span>
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Außenmontage bei folgenden Verglasungen möglich
                </p>
              </div>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Building2, title: 'Doppelverglasungen', desc: 'Standard für Wohn- und Bürogebäude', hasImage: true },
                { icon: Home, title: 'Dreifachverglasungen', desc: 'Moderne Hochleistungsgläser', hasImage: false },
                { icon: Sun, title: 'Dachfenster', desc: 'Besonders effektiv bei Schräglagen', hasImage: false },
                { icon: Building2, title: 'Schrägverglasungen', desc: 'Wintergärten und Atrien', hasImage: false },
                { icon: Shield, title: 'Wärmeschutzgläser', desc: 'Kombination mit bestehenden Systemen', hasImage: true },
                { icon: Award, title: 'Sicherheitsgläser', desc: 'Zusätzlicher Splitterschutz', hasImage: false }
              ].map((item, index) => (
                <AnimatedSection key={index} animation="scale" delay={index * 50}>
                  <div className="bg-white rounded-[2rem] p-8 premium-shadow hover-lift border-2 border-gray-100 hover:border-primary-200 transition-all group relative overflow-hidden">
                    {item.hasImage && (
                      <div className="absolute top-2 right-2 w-20 h-20 opacity-10">
                        <img
                          src={index === 0 ? "/sichtschutzfolien-2-1-e1618214261155.png" : "/sonnenschutzfolien-3-1-400x400.png"}
                          alt="Folie"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg relative z-10">
                      <item.icon className="w-7 h-7 text-primary-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed relative z-10">{item.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Technische Daten */}
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fade-up">
              <div className="bg-white rounded-[3rem] p-12 md:p-16 premium-shadow">
                <div className="text-center mb-12">
                  <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                    Technische <span className="text-gradient-premium">Eigenschaften</span>
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                    Hochwertige Materialien und präzise Herstellung für langlebigen Schutz
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">UV-Blockierung</h4>
                        <p className="text-gray-600 leading-relaxed">Absorbiert und blockiert über 99% der schädlichen UV-Strahlen</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Sun className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Lichtdurchlässigkeit</h4>
                        <p className="text-gray-600 leading-relaxed">Kontrolliert den Anteil des sichtbaren Lichts je nach Folienstärke</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Eye className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Reflexionsvermögen</h4>
                        <p className="text-gray-600 leading-relaxed">Hohe Reflexion für mehr Privatsphäre und reduzierten Energieverbrauch</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <TrendingDown className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Wärmeschutz</h4>
                        <p className="text-gray-600 leading-relaxed">Blockiert Wärmeübertragung effektiv für angenehmere Raumtemperaturen</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Award className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Materialqualität</h4>
                        <p className="text-gray-600 leading-relaxed">Hochwertige Kunststoffe (EVA, PE, PP) für Langlebigkeit</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Folienstärke</h4>
                        <p className="text-gray-600 leading-relaxed">Von 50 bis 300 Mikron, passend für jeden Anwendungsbereich</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-12 border-t-2 border-gray-100 text-center">
                  <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-8">
                    Eine attraktive und nützliche Investition, um das Raumklima zu verbessern und Energiekosten zu reduzieren. Sonnenschutzfolien sind für kluge Köpfe und coole Rechner!
                  </p>
                  <button
                    onClick={() => setIsFormOpen(true)}
                    className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-3xl transition-all font-bold text-xl shadow-xl hover:shadow-primary-500/50 magnetic-button"
                  >
                    Jetzt kostenlos beraten lassen
                    <ArrowRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* GOOGLE REVIEWS SECTION */}
      <section id="referenzen" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 max-w-4xl mx-auto">
            <AnimatedSection animation="fade-up">
              <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
                <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">Bewertungen</span>
              </div>

              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 sm:w-7 sm:h-7 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-2xl sm:text-3xl font-bold text-gray-900">4.8</span>
              </div>
              <p className="text-base sm:text-lg text-gray-600">Basierend auf 247 Bewertungen</p>
            </AnimatedSection>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
            {[
              {
                name: 'M. Weber',
                date: 'vor 2 Wochen',
                text: 'Sehr professionelle Beratung und einwandfreie Montage. Die Sonnenschutzfolien funktionieren hervorragend – im Sommer ist es jetzt deutlich kühler. Absolut empfehlenswert!',
                rating: 5
              },
              {
                name: 'L. Schneider',
                date: 'vor 1 Monat',
                text: 'Schnelle Terminvereinbarung, pünktliche Ausführung und top Ergebnis. Die Fenster sehen aus wie vorher, aber die Hitze ist weg. Sehr zufrieden!',
                rating: 5
              },
              {
                name: 'P. Fischer',
                date: 'vor 3 Wochen',
                text: 'Hervorragende Qualität der Folien und professionelle Montage. Besonders gut gefällt mir, dass man von außen kaum einen Unterschied sieht. Klare Empfehlung.',
                rating: 5
              },
              {
                name: 'K. Hoffmann',
                date: 'vor 2 Monaten',
                text: 'Für unser Bürogebäude die perfekte Lösung. Keine Blendung mehr und deutlich niedrigere Klimakosten. Das Team war sehr kompetent und zuverlässig.',
                rating: 5
              },
              {
                name: 'R. Becker',
                date: 'vor 3 Wochen',
                text: 'Von der Beratung bis zur Montage alles perfekt. Die Folien wurden passgenau zugeschnitten und sauber angebracht. Bin sehr zufrieden mit dem Ergebnis!',
                rating: 5
              },
              {
                name: 'S. Richter',
                date: 'vor 1 Woche',
                text: 'Ausgezeichnete Arbeit! Die Raumtemperatur ist merklich gesunken und die Möbel sind jetzt vor UV-Strahlung geschützt. Sehr gutes Preis-Leistungs-Verhältnis.',
                rating: 5
              }
            ].map((review, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 50}>
                <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-base sm:text-lg flex-shrink-0">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm sm:text-base">{review.name}</div>
                        <div className="text-xs sm:text-sm text-gray-500">{review.date}</div>
                      </div>
                    </div>
                    <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </div>

                  <div className="flex gap-0.5 mb-3 sm:mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed flex-grow">
                    {review.text}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-up" delay={300}>
            <div className="mt-12 sm:mt-16 text-center">
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white border-2 border-gray-200 hover:border-gray-300 rounded-xl sm:rounded-2xl transition-all shadow-sm hover:shadow-md group"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="font-semibold text-gray-900 text-sm sm:text-base group-hover:text-blue-600 transition-colors">
                  Alle Bewertungen auf Google ansehen
                </span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

     
      {/* CTA - Split with Image */}
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <div className="relative bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 p-12 md:p-20 flex items-center">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-xl">
              <AnimatedSection animation="fade-right">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full text-white text-sm font-bold mb-8 border border-white/20">
                  <Sparkles className="w-4 h-4" />
                  JETZT ANFRAGEN
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight drop-shadow-2xl">
                  Bereit für ein <span className="text-gradient-hero">kühles Zuhause?</span>
                </h2>
                <p className="text-white/90 text-xl md:text-2xl leading-relaxed mb-10">
                  Vereinbare jetzt deine kostenlose Beratung und erhalte ein individuelles Angebot – unverbindlich und transparent.
                </p>
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="group inline-flex items-center gap-3 px-12 py-6 bg-white text-primary-600 rounded-3xl transition-all font-bold text-xl shadow-2xl hover:shadow-primary-500/30 magnetic-button mb-8"
                >
                  Kostenlose Beratung
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex flex-wrap items-center gap-6 text-white/90">
                  <div className="flex items-center gap-3 glass-premium px-5 py-3 rounded-2xl">
                    <Check className="w-5 h-5 text-primary-300" />
                    <span className="font-semibold">Unverbindlich</span>
                  </div>
                  <div className="flex items-center gap-3 glass-premium px-5 py-3 rounded-2xl">
                    <Check className="w-5 h-5 text-primary-300" />
                    <span className="font-semibold">Kostenlos</span>
                  </div>
                  <div className="flex items-center gap-3 glass-premium px-5 py-3 rounded-2xl">
                    <Check className="w-5 h-5 text-primary-300" />
                    <span className="font-semibold">In 2 Minuten</span>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>

          <div className="relative h-[500px] lg:h-auto">
            <img
              src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Sonnenschutz"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800/50 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* CONTACT - Asymmetric */}
      <section id="kontakt" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 sm:gap-12 max-w-7xl mx-auto">
            <div className="lg:col-span-2">
              <AnimatedSection animation="fade-right">
                <div className="lg:sticky lg:top-24">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold mb-6 sm:mb-8">
                    <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4" />
                    KONTAKT
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
                    Lass uns <span className="text-gradient-premium">sprechen</span>
                  </h2>
                  <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 sm:mb-12">
                    Kontaktiere uns für eine kostenlose Beratung. Wir freuen uns auf dein Projekt!
                  </p>

                  <div className="space-y-5 sm:space-y-6">
                    {[
                      { icon: Phone, label: 'Telefon', value: '+49 123 456 7890', link: 'tel:+491234567890' },
                      { icon: Mail, label: 'E-Mail', value: 'info@polynord.de', link: 'mailto:info@polynord.de' },
                      { icon: MapPin, label: 'Adresse', value: 'Musterstraße 123\n12345 Musterstadt' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4 sm:gap-5 group cursor-pointer">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:from-primary-500 group-hover:to-primary-600 transition-all shadow-lg group-hover:shadow-xl flex-shrink-0">
                          <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-600 group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm text-gray-500 font-semibold mb-1 sm:mb-2">{item.label}</div>
                          {item.link ? (
                            <a href={item.link} className="text-gray-900 font-bold text-base sm:text-lg hover:text-primary-600 transition-colors whitespace-pre-line">
                              {item.value}
                            </a>
                          ) : (
                            <div className="text-gray-900 font-bold text-base sm:text-lg whitespace-pre-line">{item.value}</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 p-8 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl border-2 border-primary-100">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                        <Clock className="w-6 h-6 text-primary-600" />
                      </div>
                      <span className="font-bold text-gray-900 text-lg">Öffnungszeiten</span>
                    </div>
                    <div className="text-gray-700 text-lg space-y-2 font-medium">
                      <div>Mo–Fr: 8:00–17:00 Uhr</div>
                      <div>Sa: Nach Vereinbarung</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-3">
              <AnimatedSection animation="fade-left">
                <div className="bg-white rounded-[3rem] p-12 premium-shadow">
                  <h3 className="text-3xl font-bold text-gray-900 mb-10">Schnellanfrage</h3>
                  <button
                    onClick={() => setIsFormOpen(true)}
                    className="w-full group flex items-center justify-center gap-3 px-12 py-7 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-3xl transition-all font-bold text-xl shadow-xl hover:shadow-primary-500/50 magnetic-button mb-10"
                  >
                    Formular öffnen
                    <ArrowRight className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <div className="rounded-3xl overflow-hidden premium-shadow ring-1 ring-gray-100">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4092466989847!2d13.404954!3d52.520008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c655f20989%3A0x26bbfb4e84674c63!2sBrandenburger%20Tor!5e0!3m2!1sde!2sde!4v1234567890"
                      width="100%"
                      height="450"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Standort"
                    ></iframe>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900 text-white py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="mb-6">
                <img
                  src="/logo-polynord.png"
                  alt="Polynord Folientechnik"
                  className="h-16 w-auto mb-4"
                />
              </div>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                Professionelle Sonnenschutzfolien für Privat und Gewerbe. Für mehr Komfort, weniger Energiekosten und langfristigen Schutz.
              </p>
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-gray-400 ml-2">5.0 von 1000+ Kunden</span>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-6 text-lg">Navigation</h3>
              <div className="space-y-3">
                {['leistungen', 'vorteile', 'referenzen', 'kontakt'].map((id) => (
                  <button
                    key={id}
                    onClick={() => {
                      const el = document.getElementById(id);
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="block text-gray-400 hover:text-primary-400 transition-colors capitalize"
                  >
                    {id}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-6 text-lg">Rechtliches</h3>
              <div className="space-y-3">
                <a href="#" className="block text-gray-400 hover:text-primary-400 transition-colors">Impressum</a>
                <a href="#" className="block text-gray-400 hover:text-primary-400 transition-colors">Datenschutz</a>
                <a href="#" className="block text-gray-400 hover:text-primary-400 transition-colors">AGB</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Polynord Folientechnik. Alle Rechte vorbehalten.</p>
            <p>Made with ♥ in Deutschland</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
