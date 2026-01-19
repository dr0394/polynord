import { ArrowRight, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface NavigationProps {
  onOpenForm: () => void;
}

export default function Navigation({ onOpenForm }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleOpenForm = () => {
    setIsMobileMenuOpen(false);
    onOpenForm();
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4'
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/logo-polynord.png"
              alt="Polynord Folientechnik"
              className="h-8 w-auto"
            />
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('leistungen')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Leistungen
            </button>
            <button onClick={() => scrollToSection('branchen')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Branchen
            </button>
            <button onClick={() => scrollToSection('hersteller')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Partner
            </button>
            <button onClick={() => scrollToSection('referenzen')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Referenzen
            </button>
            <button onClick={() => scrollToSection('ablauf')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Ablauf
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              FAQ
            </button>
            <button onClick={() => scrollToSection('kontakt')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Kontakt
            </button>
            <button
              onClick={onOpenForm}
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-teal-600 hover:opacity-90 text-white rounded-lg transition-all font-semibold"
            >
              Anfrage
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-white z-40 overflow-y-auto">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('leistungen')}
                className="text-left px-6 py-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium rounded-xl"
              >
                Leistungen
              </button>
              <button
                onClick={() => scrollToSection('branchen')}
                className="text-left px-6 py-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium rounded-xl"
              >
                Branchen
              </button>
              <button
                onClick={() => scrollToSection('hersteller')}
                className="text-left px-6 py-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium rounded-xl"
              >
                Partner
              </button>
              <button
                onClick={() => scrollToSection('referenzen')}
                className="text-left px-6 py-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium rounded-xl"
              >
                Referenzen
              </button>
              <button
                onClick={() => scrollToSection('ablauf')}
                className="text-left px-6 py-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium rounded-xl"
              >
                Ablauf
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-left px-6 py-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium rounded-xl"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection('kontakt')}
                className="text-left px-6 py-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium rounded-xl"
              >
                Kontakt
              </button>
              <button
                onClick={handleOpenForm}
                className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-teal-600 hover:opacity-90 text-white rounded-xl transition-all font-semibold mt-4"
              >
                Anfrage stellen
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
