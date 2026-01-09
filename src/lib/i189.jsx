import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "nav.home": "Home",
      "nav.categories": "Categories",
      "nav.symptomChecker": "Symptom Checker",
      "nav.about": "About",
      "nav.emergency": "Emergency",
      "hero.title": "Quick First Aid Guidance at Your Fingertips",
      "hero.subtitle": "Access reliable first aid information when you need it most",
      "hero.explore": "Explore Categories",
      "search.placeholder": "Search for first aid guides...",
    }
  },
  hi: {
    translation: {
      "nav.home": "होम",
      "nav.categories": "श्रेणियाँ",
      "nav.symptomChecker": "लक्षण जाँचकर्ता",
      "nav.about": "हमारे बारे में",
      "nav.emergency": "आपातकाल",
      "hero.title": "आपके हाथों में त्वरित प्राथमिक चिकित्सा मार्गदर्शन",
      "hero.subtitle": "जब आपको सबसे ज्यादा जरूरत हो तब विश्वसनीय प्राथमिक चिकित्सा जानकारी प्राप्त करें",
      "hero.explore": "श्रेणियाँ एक्सप्लोर करें",
      "search.placeholder": "प्राथमिक चिकित्सा गाइड खोजें...",
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;