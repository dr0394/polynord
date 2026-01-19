import { useState } from 'react';
import { X, ChevronRight, ChevronLeft } from 'lucide-react';

interface MultiStepFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MultiStepForm({ isOpen, onClose }: MultiStepFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    anfrageart: '',
    objekttyp: '',
    name: '',
    email: '',
    telefon: '',
    nachricht: ''
  });

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `Neue Anfrage über sonnenschutzfolien-montage.de\n\nArt: ${formData.anfrageart}\nObjekt: ${formData.objekttyp}\nName: ${formData.name}\nE-Mail: ${formData.email}\nTelefon: ${formData.telefon}\n\nNachricht: ${formData.nachricht}`;

    const emailSubject = 'Neue Anfrage: Sonnenschutzfolien';
    const emailBody = `Neue Anfrage über sonnenschutzfolien-montage.de\n\nArt der Anfrage: ${formData.anfrageart}\nObjekttyp: ${formData.objekttyp}\n\nKontaktdaten:\nName: ${formData.name}\nE-Mail: ${formData.email}\nTelefon: ${formData.telefon}\n\nNachricht:\n${formData.nachricht}`;

    window.open(`https://wa.me/491234567890?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    window.location.href = `mailto:info@polynord.de?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    onClose();
    setStep(1);
    setFormData({
      anfrageart: '',
      objekttyp: '',
      name: '',
      email: '',
      telefon: '',
      nachricht: ''
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4 overflow-y-auto" onClick={onClose}>
      <div className="bg-white rounded-xl sm:rounded-2xl max-w-lg w-full p-6 sm:p-8 relative my-8" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <div className="mb-6 sm:mb-8">
          <div className="flex items-center justify-between mb-3 pr-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Jetzt Anfrage senden</h2>
            <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">Schritt {step} von 4</span>
          </div>
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`h-1 flex-1 rounded-full transition-colors ${
                  i <= step ? 'bg-primary-500' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Art der Anfrage</h3>
              {['Beratung', 'Angebot anfordern', 'Aufmaß vereinbaren', 'Allgemeine Frage'].map((option) => (
                <label key={option} className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-primary-500 transition-colors">
                  <input
                    type="radio"
                    name="anfrageart"
                    value={option}
                    checked={formData.anfrageart === option}
                    onChange={(e) => setFormData({ ...formData, anfrageart: e.target.value })}
                    className="w-4 h-4 text-primary-600 accent-primary-500"
                  />
                  <span className="ml-3 text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Wo sollen die Folien montiert werden?</h3>
              {['Privathaus / Wohnung', 'Büro / Gewerbe', 'Wintergarten / Glasfassade', 'Lager / Industriehalle', 'Sonstiges'].map((option) => (
                <label key={option} className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-primary-500 transition-colors">
                  <input
                    type="radio"
                    name="objekttyp"
                    value={option}
                    checked={formData.objekttyp === option}
                    onChange={(e) => setFormData({ ...formData, objekttyp: e.target.value })}
                    className="w-4 h-4 text-primary-600 accent-primary-500"
                  />
                  <span className="ml-3 text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Deine Kontaktdaten</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Dein Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">E-Mail *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="deine@email.de"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Telefon *</label>
                <input
                  type="tel"
                  required
                  value={formData.telefon}
                  onChange={(e) => setFormData({ ...formData, telefon: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="+49 123 456789"
                />
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Noch etwas, das wir wissen sollten?</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Deine Nachricht (optional)</label>
                <textarea
                  value={formData.nachricht}
                  onChange={(e) => setFormData({ ...formData, nachricht: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent h-32 resize-none"
                  placeholder="z.B. gewünschter Termin, Anzahl der Fenster, besondere Anforderungen..."
                />
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Zusammenfassung:</strong><br />
                  Art: {formData.anfrageart}<br />
                  Objekt: {formData.objekttyp}<br />
                  Kontakt: {formData.name}, {formData.email}
                </p>
              </div>
            </div>
          )}

          <div className="flex gap-3 mt-6">
            {step > 1 && (
              <button
                type="button"
                onClick={handleBack}
                className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                Zurück
              </button>
            )}
            {step < 4 ? (
              <button
                type="button"
                onClick={handleNext}
                disabled={
                  (step === 1 && !formData.anfrageart) ||
                  (step === 2 && !formData.objekttyp)
                }
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Weiter
                <ChevronRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-semibold"
              >
                Anfrage absenden
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
