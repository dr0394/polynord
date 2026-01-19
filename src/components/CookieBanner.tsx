import { useState, useEffect } from 'react';
import { Cookie, Settings } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    setIsVisible(false);
  };

  const rejectAll = () => {
    localStorage.setItem('cookieConsent', 'necessary');
    setIsVisible(false);
  };

  const saveSettings = () => {
    localStorage.setItem('cookieConsent', 'custom');
    setIsVisible(false);
    setShowSettings(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-[90] max-w-md">
      <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-6">
        {!showSettings ? (
          <>
            <div className="flex items-start gap-3 mb-4">
              <Cookie className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Cookie-Einstellungen</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Wir verwenden Cookies, um Ihnen die beste Erfahrung auf unserer Website zu bieten.
                  Einige sind notwendig, andere helfen uns, die Website zu verbessern.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <button
                onClick={acceptAll}
                className="w-full px-4 py-2.5 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium"
              >
                Alle akzeptieren
              </button>
              <button
                onClick={rejectAll}
                className="w-full px-4 py-2.5 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Alles ablehnen
              </button>
              <button
                onClick={() => setShowSettings(true)}
                className="w-full px-4 py-2.5 text-gray-600 hover:text-gray-900 transition-colors flex items-center justify-center gap-2"
              >
                <Settings className="w-4 h-4" />
                Einstellungen
              </button>
            </div>
          </>
        ) : (
          <>
            <h3 className="font-bold text-gray-900 mb-4">Cookie-Einstellungen anpassen</h3>
            <div className="space-y-4 mb-4">
              <label className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="mt-1 w-4 h-4"
                />
                <div>
                  <div className="font-medium text-gray-900">Notwendig</div>
                  <div className="text-sm text-gray-600">Erforderlich für Basisfunktionen</div>
                </div>
              </label>
              <label className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <input
                  type="checkbox"
                  className="mt-1 w-4 h-4"
                />
                <div>
                  <div className="font-medium text-gray-900">Analyse</div>
                  <div className="text-sm text-gray-600">Hilft uns die Website zu verbessern</div>
                </div>
              </label>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setShowSettings(false)}
                className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Zurück
              </button>
              <button
                onClick={saveSettings}
                className="flex-1 px-4 py-2.5 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
              >
                Speichern
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
