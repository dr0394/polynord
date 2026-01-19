import { useState } from 'react';
import Navigation from './components/Navigation';
import MultiStepForm from './components/MultiStepForm';
import CookieBanner from './components/CookieBanner';
import WhatsAppButton from './components/WhatsAppButton';
import AnimatedSection from './components/AnimatedSection';
import { Check, Sun, Shield, TrendingDown, Building2, Eye, Clock, MessageSquare, MapPin, Phone, Mail, ArrowRight, Award, Target, Factory, Hotel, ShoppingBag, Car, ChevronDown, Play, Cross } from 'lucide-react';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const montageBilder = [
    'https://alkaio.com/media/820926304331245.jpeg',
    'https://alkaio.com/media/1613665113117350.jpeg',
    'https://alkaio.com/media/1363600585511876.jpeg',
    'https://alkaio.com/media/1781107312845761.jpeg',
    'https://alkaio.com/media/860337543422662.jpeg',
    'https://alkaio.com/media/1679974710043326.jpeg',
    'https://alkaio.com/media/4244061972577101.jpeg',
    'https://alkaio.com/media/1291153579520746.jpeg',
    'https://alkaio.com/media/913580214527813.jpeg',
    'https://alkaio.com/media/848803731279319.jpeg',
    'https://alkaio.com/media/1289622273190752.jpeg',
    'https://alkaio.com/media/26072462402366793.jpeg',
    'https://alkaio.com/media/874198455352443.jpeg',
    'https://alkaio.com/media/907414865126740.jpeg',
    'https://alkaio.com/media/1943527546512451.jpeg',
    'https://alkaio.com/media/1216679509829257.jpeg',
    'https://alkaio.com/media/897702776086842.jpeg',
    'https://alkaio.com/media/2430018694080802.jpeg',
    'https://alkaio.com/media/1678565046835258.jpeg',
    'https://alkaio.com/media/4097010213882063.jpeg',
    'https://alkaio.com/media/1939129230331080.jpeg'
  ];

  const videos = [
    'https://alkaio.com/media/902321815589406.mp4',
    'https://alkaio.com/media/1571285977412008.mp4',
    'https://alkaio.com/media/2661861107513241.mp4'
  ];

  const herstellerLogos = [
    { name: '3M', url: 'https://alkaio.com/media/1937999817102262.png' },
    { name: 'BRUXAFOL', url: 'https://alkaio.com/media/1969384776945856.png' },
    { name: 'Hanita Coatings', url: 'https://alkaio.com/media/744473544942768.jpeg' },
    { name: 'BRUXSAFOL', url: 'https://alkaio.com/media/854168330855277.png' },
    { name: 'LLumar', url: 'https://alkaio.com/media/1290781782882824.png' },
    { name: 'LLumar Window Film', url: 'https://alkaio.com/media/1451204883092388.jpeg' }
  ];

  const referenzLogos = [
    { name: 'Mont Blanc', url: 'https://alkaio.com/media/1436589231231270.jpeg' },
    { name: 'DOW', url: 'https://alkaio.com/media/1902791803692116.jpeg' },
    { name: 'ISFH', url: 'https://alkaio.com/media/2031753147622904.jpeg' },
    { name: 'Klinikum Burgenlandkreis', url: 'https://alkaio.com/media/3113137095539956.jpeg' },
    { name: 'frunol delicia', url: 'https://alkaio.com/media/2694757104210046.jpeg' },
    { name: 'Posthotel Holiday Villa', url: 'https://alkaio.com/media/1537930237431279.jpeg' },
    { name: 'Lufthansa', url: 'https://alkaio.com/media/26098440863096023.jpeg' },
    { name: 'KIND', url: 'https://alkaio.com/media/1415545136893199.jpeg' },
    { name: 'Jil Sander', url: 'https://alkaio.com/media/1387179569808315.jpeg' },
    { name: 'AES', url: 'https://alkaio.com/media/1637893820977644.jpeg' },
    { name: 'R+V', url: 'https://alkaio.com/media/1246879070834162.jpeg' }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navigation onOpenForm={() => setIsFormOpen(true)} />
      <MultiStepForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      <CookieBanner />
      <WhatsAppButton />

      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-teal-600 rounded-full blur-[100px]"></div>
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
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div>
              <AnimatedSection animation="fade-right" delay={100}>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-bold mb-6 border border-white/20">
                  <Building2 className="w-4 h-4" />
                  GEWERBE & INDUSTRIE
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                  <span className="text-white block mb-3 drop-shadow-2xl">Professionelle</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 block mb-3 drop-shadow-2xl">Sonnenschutzfolien</span>
                  <span className="text-white/80 text-2xl sm:text-3xl md:text-4xl font-light block">für Industrie & Gewerbe</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={300}>
                <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                  Deutschland- und europaweite Montage von Hitzeschutz-, Blendschutz- und UV-Schutzfolien für Hallen, Produktionsstätten, Bürogebäude und mehr.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={500}>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button
                    onClick={() => setIsFormOpen(true)}
                    className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-xl transition-all font-bold text-lg shadow-2xl hover:shadow-blue-500/50"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      Angebot anfragen
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                  <button
                    onClick={() => {
                      const el = document.getElementById('leistungen');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 rounded-xl transition-all font-semibold text-lg"
                  >
                    Beratung vereinbaren
                  </button>
                </div>

                <div className="flex flex-wrap gap-3">
                  {[
                    { icon: Building2, text: 'Industrie & Gewerbe' },
                    { icon: Target, text: 'DE & EU Montage' },
                    { icon: Award, text: 'Qualitätsfolien' },
                    { icon: Check, text: 'Erfahrenes Team' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-teal-400 flex items-center justify-center">
                        <item.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white font-semibold text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            <div className="hidden lg:block">
              <AnimatedSection animation="fade-left" delay={400}>
                <div className="relative">
                  <div className="absolute -inset-12 bg-gradient-to-r from-blue-600/30 to-teal-600/20 rounded-[4rem] blur-3xl"></div>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src="https://alkaio.com/media/820926304331245.jpeg"
                      alt="Professionelle Montage von Sonnenschutzfolien"
                      className="w-full h-[600px] object-cover"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-800/20 to-transparent"></div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <section id="problem" className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <AnimatedSection animation="fade-up">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Herausforderungen in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Industrie und Gewerbe</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Überhitzte Produktionshallen, blendende Büroräume und hohe Energiekosten belasten Ihren Betrieb. Sonnenschutzfolien bieten die Lösung.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Sun, title: 'Hitzeprobleme', desc: 'Überhitzte Räume in Produktion, Lager und Büros beeinträchtigen Produktivität und Wohlbefinden.' },
              { icon: Eye, title: 'Blendung', desc: 'Störende Reflexionen an Bildschirmen und Arbeitsplätzen reduzieren Effizienz und erhöhen Fehlerquoten.' },
              { icon: TrendingDown, title: 'Hohe Energiekosten', desc: 'Klimaanlagen laufen auf Hochtouren und treiben die Betriebskosten unnötig in die Höhe.' }
            ].map((item, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-blue-200 transition-all shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-teal-100 rounded-xl flex items-center justify-center mb-6">
                    <item.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="leistungen" className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <AnimatedSection animation="fade-up">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-5 py-2.5 rounded-full text-sm font-bold mb-8">
                <Shield className="w-4 h-4" />
                UNSERE LEISTUNGEN
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Professionelle <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Folienlösungen</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Beratung, Aufmaß, Folienauswahl, Montage und Dokumentation – alles aus einer Hand
              </p>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: 'Hitzeschutzfolien',
                features: ['Bis zu 80% weniger Wärmeeinstrahlung', 'Reduzierung der Kühlkosten um bis zu 30%', 'Angenehmes Raumklima in Produktionshallen'],
                image: 'https://alkaio.com/media/1613665113117350.jpeg'
              },
              {
                title: 'Blendschutzfolien',
                features: ['Keine störenden Reflexionen an Bildschirmen', 'Erhöhte Produktivität am Arbeitsplatz', 'Reduzierung von Augenbelastung'],
                image: 'https://alkaio.com/media/1363600585511876.jpeg'
              },
              {
                title: 'UV-Schutzfolien',
                features: ['99% UV-Blockierung für Gesundheit', 'Schutz vor Ausbleichen von Produkten', 'Verlängerung der Lebensdauer von Einrichtung'],
                image: 'https://alkaio.com/media/1781107312845761.jpeg'
              }
            ].map((service, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all group">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">{service.title}</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="branchen" className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <AnimatedSection animation="fade-up">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Branchen & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Anwendungsbereiche</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Unsere Folienlösungen für verschiedene Industrie- und Gewerbebereiche
              </p>
            </AnimatedSection>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { icon: Building2, title: 'Bürogebäude', desc: 'Blendschutz und Klimaverbesserung' },
              { icon: Factory, title: 'Produktion & Logistik', desc: 'Hitzeschutz in Hallen' },
              { icon: Cross, title: 'Kliniken & Pflege', desc: 'UV-Schutz und Wohlbefinden' },
              { icon: Hotel, title: 'Hotels & Gastronomie', desc: 'Komfort für Gäste' },
              { icon: ShoppingBag, title: 'Retail & Einzelhandel', desc: 'Schutz vor Ausbleichen' },
              { icon: Car, title: 'Automotive', desc: 'Showrooms und Werkstätten' },
              { icon: Building2, title: 'Öffentliche Gebäude', desc: 'Schulen, Verwaltung, Behörden' },
              { icon: Factory, title: 'Industrie allgemein', desc: 'Maßgeschneiderte Lösungen' }
            ].map((branche, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 50}>
                <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 border-2 border-gray-100 rounded-xl p-6 hover:border-blue-200 transition-all group">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <branche.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{branche.title}</h3>
                  <p className="text-gray-600 text-sm">{branche.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="montage" className="py-16 sm:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <AnimatedSection animation="fade-up">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full text-white text-sm font-bold mb-8 border border-white/20">
                <Target className="w-4 h-4" />
                MONTAGE IN DER PRAXIS
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                So arbeiten wir – <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Professionell & Zuverlässig</span>
              </h2>
              <p className="text-xl text-white/80 leading-relaxed">
                Einblicke in unsere tägliche Arbeit: Von der Planung bis zur perfekten Montage
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {montageBilder.map((bild, index) => (
              <AnimatedSection key={index} animation="scale" delay={index * 30}>
                <div className="relative rounded-xl overflow-hidden group cursor-pointer aspect-square">
                  <img
                    src={bild}
                    alt={`Professionelle Montage von Sonnenschutzfolien ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="videos" className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <AnimatedSection animation="fade-up">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Montage <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">in Aktion</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Sehen Sie unsere Experten bei der Arbeit
              </p>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {videos.map((video, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                  <video
                    className="w-full aspect-video object-cover"
                    poster={montageBilder[index]}
                    controls
                    preload="metadata"
                  >
                    <source src={video} type="video/mp4" />
                    Ihr Browser unterstützt keine Videos.
                  </video>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="hersteller" className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <AnimatedSection animation="fade-up">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Hersteller & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Folienpartner</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Wir verarbeiten ausschließlich Qualitätsfolien führender Hersteller
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto items-center">
            {herstellerLogos.map((logo, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 50}>
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all flex items-center justify-center h-32 grayscale hover:grayscale-0 group">
                  <img
                    src={logo.url}
                    alt={`${logo.name} Logo`}
                    className="max-w-full max-h-full object-contain"
                    loading="lazy"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="referenzen" className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <AnimatedSection animation="fade-up">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Auszug unserer <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Referenzen</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Vertrauen von führenden Unternehmen und Institutionen
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto items-center">
            {referenzLogos.map((logo, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 40}>
                <div className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-blue-200 transition-all flex items-center justify-center h-28 grayscale hover:grayscale-0 group">
                  <img
                    src={logo.url}
                    alt={`${logo.name} Referenz`}
                    className="max-w-full max-h-full object-contain"
                    loading="lazy"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="ablauf" className="py-16 sm:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <AnimatedSection animation="fade-up">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full text-white text-sm font-bold mb-8 border border-white/20">
                <Clock className="w-4 h-4" />
                UNSER ABLAUF
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                In 5 Schritten <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">zum Ziel</span>
              </h2>
              <p className="text-xl text-white/80 leading-relaxed">
                Von der ersten Beratung bis zur Abnahme – transparent und professionell
              </p>
            </AnimatedSection>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { num: '01', title: 'Beratung', desc: 'Analyse Ihrer Anforderungen und Empfehlung der passenden Folienlösung' },
              { num: '02', title: 'Aufmaß', desc: 'Präzise Vermessung vor Ort für passgenaue Folien' },
              { num: '03', title: 'Folienauswahl', desc: 'Gemeinsame Auswahl der optimalen Folie aus unserem Sortiment' },
              { num: '04', title: 'Montage', desc: 'Professionelle Installation durch unser erfahrenes Team' },
              { num: '05', title: 'Abnahme & Dokumentation', desc: 'Qualitätskontrolle und vollständige Projektdokumentation' }
            ].map((schritt, index) => (
              <AnimatedSection key={index} animation="fade-right" delay={index * 100}>
                <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all group">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-teal-400 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <span className="text-2xl font-bold text-white">{schritt.num}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3">{schritt.title}</h3>
                      <p className="text-white/80 text-lg leading-relaxed">{schritt.desc}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <AnimatedSection animation="fade-up">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Häufig gestellte <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Fragen</span>
              </h2>
            </AnimatedSection>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              { q: 'Wie lange halten Sonnenschutzfolien?', a: 'Hochwertige Folien halten bei professioneller Montage und regelmäßiger Pflege 10-15 Jahre oder länger.' },
              { q: 'Können die Folien gereinigt werden?', a: 'Ja, Sonnenschutzfolien sind pflegeleicht und können mit handelsüblichen, nicht scheuernden Reinigungsmitteln gesäubert werden.' },
              { q: 'Beeinträchtigen die Folien die Sicht nach draußen?', a: 'Nein, moderne Folien reduzieren Hitze und Blendung, ohne die Sicht wesentlich zu beeinträchtigen.' },
              { q: 'Gibt es eine Garantie?', a: 'Ja, wir bieten auf alle Folien und Montagearbeiten eine Herstellergarantie von bis zu 10 Jahren.' },
              { q: 'Innen- oder Außenmontage?', a: 'Wir montieren je nach Anforderung innen oder außen. Außenmontage bietet den effektivsten Hitzeschutz.' },
              { q: 'Wird der Betrieb während der Montage unterbrochen?', a: 'In den meisten Fällen kann die Montage außerhalb der Betriebszeiten erfolgen, um Unterbrechungen zu minimieren.' },
              { q: 'Montieren Sie auch europaweit?', a: 'Ja, wir bieten deutschland- und europaweite Montage für größere Projekte an.' }
            ].map((faq, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 50}>
                <details className="group bg-gradient-to-br from-gray-50 to-blue-50/30 border-2 border-gray-100 rounded-xl p-6 hover:border-blue-200 transition-all">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <span className="text-lg font-bold text-gray-900">{faq.q}</span>
                    <ChevronDown className="w-5 h-5 text-blue-600 group-open:rotate-180 transition-transform" />
                  </summary>
                  <p className="mt-4 text-gray-600 leading-relaxed">{faq.a}</p>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt" className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            <div>
              <AnimatedSection animation="fade-right">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-5 py-2.5 rounded-full text-sm font-bold mb-8">
                  <MessageSquare className="w-4 h-4" />
                  KONTAKT
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Jetzt <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Anfrage stellen</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Deutschland- und europaweit im Einsatz für Ihre Projekte
                </p>

                <div className="space-y-6 mb-8">
                  {[
                    { icon: Phone, label: 'Telefon', value: '+49 123 456 7890' },
                    { icon: Mail, label: 'E-Mail', value: 'info@polynord.de' },
                    { icon: MapPin, label: 'Standort', value: 'Deutschland & Europa' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 font-semibold mb-1">{item.label}</div>
                        <div className="text-gray-900 font-bold text-lg">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setIsFormOpen(true)}
                  className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-xl transition-all font-bold text-xl shadow-xl hover:shadow-blue-500/50"
                >
                  Angebot anfragen
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </AnimatedSection>
            </div>

            <div>
              <AnimatedSection animation="fade-left">
                <div className="bg-white rounded-3xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Schnellanfrage</h3>
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Name / Firma *</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
                        placeholder="Ihre Firma"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">E-Mail *</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
                        placeholder="ihre@email.de"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Telefon *</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
                        placeholder="+49 ..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Bereich</label>
                      <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none">
                        <option>Hitzeschutz</option>
                        <option>Blendschutz</option>
                        <option>UV-Schutz</option>
                        <option>Alle Bereiche</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Nachricht</label>
                      <textarea
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none h-32 resize-none"
                        placeholder="Beschreiben Sie Ihr Projekt..."
                      ></textarea>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsFormOpen(true)}
                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-xl transition-all font-bold text-lg shadow-xl hover:shadow-blue-500/50"
                  >
                    Anfrage absenden
                  </button>
                  <p className="text-sm text-gray-500 mt-4 text-center">
                    Deutschland- & europaweit im Einsatz
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="mb-6">
                <img
                  src="/logo-polynord.png"
                  alt="Polynord Folientechnik"
                  className="h-16 w-auto mb-4 brightness-0 invert"
                />
              </div>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                Professionelle Sonnenschutzfolien für Industrie und Gewerbe. Deutschland- und europaweite Montage für maximalen Schutz und Effizienz.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-6 text-lg">Navigation</h3>
              <div className="space-y-3">
                {['leistungen', 'branchen', 'montage', 'hersteller', 'referenzen', 'ablauf', 'faq', 'kontakt'].map((id) => (
                  <button
                    key={id}
                    onClick={() => {
                      const el = document.getElementById(id);
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="block text-gray-400 hover:text-blue-400 transition-colors capitalize"
                  >
                    {id}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-6 text-lg">Rechtliches</h3>
              <div className="space-y-3">
                <a href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">Impressum</a>
                <a href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">Datenschutz</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Polynord Folientechnik. Alle Rechte vorbehalten.</p>
            <p>Professionelle Folienmontage in Deutschland & Europa</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
