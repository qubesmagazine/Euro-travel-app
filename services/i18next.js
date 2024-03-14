import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locales/en.json";
import cs from "../locales/cs.json";
import de from "../locales/de.json";
import es from "../locales/es.json";
import fr from "../locales/fr.json";
import it from "../locales/it.json";
import pl from "../locales/pl.json";

export const languageResources = {
  en: { translation: en },
  cs: { translation: cs },
  de: { translation: de },
  es: { translation: es },
  fr: { translation: fr },
  it: { translation: it },
  pl: { translation: pl },
};

i18next.use(initReactI18next).init({
  compatibilityJSON: "v3",
  lng: "en",
  fallbackLng: "en",
  resources: languageResources,
});

export default i18next;
