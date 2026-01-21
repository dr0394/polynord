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
    quadratmeter: '',
    firma: '',
    name: '',
    email: '',
    telefon: '',
    nachricht: ''
  });

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 5) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const emailSubject = 'Neue B2B-Anfrage: Sonnenschutzfolien Gewerbe/Industrie';
    const emailBody = `Neue B2B-Anfrage über sonnenschutzfolien-montage.de\n\nArt der Anfrage: ${formData.anfrageart}\nObjekttyp: ${formData.objekttyp}\nFläche: ${formData.quadratmeter || 'nicht angegeben'} m²\n\nKontaktdaten:\nFirma: ${formData.firma}\nName: ${formData.name}\nE-Mail: ${formData.email}\nTelefon: ${formData.telefon}\n\nNachricht:\n${formData.nachricht}`;

    window.location.href = `mailto:info@polynord.de?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    onClose();
    setStep(1);
    setFormData({
      anfrageart: '',
      objekttyp: '',
      quadratmeter: '',
      firma: '',
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
            <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">Schritt {step} von 5</span>
          </div>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={`h-1 flex-1 rounded-full transition-colors ${
                  i <= step ? 'bg-gradient-to-r from-blue-600 to-teal-600' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Art der Anfrage</h3>
              {['Beratung', 'Angebot anfordern', 'Aufmaß vereinbaren', 'Projektanfrage'].map((option) => (
                <label key={option} className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-500 transition-colors">
                  <input
                    type="radio"
                    name="anfrageart"
                    value={option}
                    checked={formData.anfrageart === option}
                    onChange={(e) => setFormData({ ...formData, anfrageart: e.target.value })}
                    className="w-4 h-4 text-blue-600 accent-blue-500"
                  />
                  <span className="ml-3 text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Wo sollen die Folien montiert werden?</h3>
              {['Bürogebäude', 'Produktionshalle / Lager', 'Klinik / Pflege', 'Hotel / Gastronomie', 'Retail / Einzelhandel', 'Sonstiges'].map((option) => (
                <label key={option} className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-500 transition-colors">
                  <input
                    type="radio"
                    name="objekttyp"
                    value={option}
                    checked={formData.objekttyp === option}
                    onChange={(e) => setFormData({ ...formData, objekttyp: e.target.value })}
                    className="w-4 h-4 text-blue-600 accent-blue-500"
                  />
                  <span className="ml-3 text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Projektdetails</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Fläche in m² (optional)</label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={formData.quadratmeter}
                  onChange={(e) => setFormData({ ...formData, quadratmeter: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="z.B. 150"
                />
                <p className="text-xs text-gray-500 mt-1">Ungefähre Fläche für die Folienverlegung</p>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Ihre Kontaktdaten</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Firma / Unternehmen *</label>
                <input
                  type="text"
                  required
                  value={formData.firma}
                  onChange={(e) => setFormData({ ...formData, firma: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Ihre Firma"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Ihr Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">E-Mail *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="ihre@email.de"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Telefon *</label>
                <input
                  type="tel"
                  required
                  value={formData.telefon}
                  onChange={(e) => setFormData({ ...formData, telefon: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+49 123 456789"
                />
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Noch etwas, das wir wissen sollten?</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ihre Nachricht (optional)</label>
                <textarea
                  value={formData.nachricht}
                  onChange={(e) => setFormData({ ...formData, nachricht: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32 resize-none"
                  placeholder="z.B. Projektumfang, Anzahl der Fenster, gewünschter Zeitrahmen, besondere Anforderungen..."
                />
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Zusammenfassung:</strong><br />
                  Art: {formData.anfrageart}<br />
                  Objekt: {formData.objekttyp}<br />
                  {formData.quadratmeter && `Fläche: ${formData.quadratmeter} m²`}<br />
                  Firma: {formData.firma}<br />
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
            {step < 5 ? (
              <button
                type="button"
                onClick={handleNext}
                disabled={
                  (step === 1 && !formData.anfrageart) ||
                  (step === 2 && !formData.objekttyp) ||
                  (step === 4 && (!formData.firma || !formData.name || !formData.email || !formData.telefon))
                }
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:opacity-90 transition-all disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Weiter
                <ChevronRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:opacity-90 transition-all font-semibold"
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
