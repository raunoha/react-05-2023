import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
       "admin": "To admin view",
       "contact": "Contact",
       "shops": "Our shops",
       "cart": "Cart",
       "maintain-categories": "Maintain-categories",
       "maintain-shops": "Maintain-shops",
       "add-product": "Add-product",
       "maintain-products": "Maintain-products ",
    }
  },
  ee: {
    translation: {
        "admin": "Admin vaatesse",
        "contact": "Kontakt",
        "shops": "Meie poed",
        "cart": "Ostukorv",
        "maintain-categories": "Halda kategooriaid",
       "maintain-shops": "Halda poode",
       "add-product": "Lisa toode",
       "maintain-products": "Halda tooteid",
       }
  },
  fin: {
    translation: {
       "admin": "Admin",
       "contact": "Yhteystiedot",
       "shops": "Kaupat",
       "cart": "Ostoskori",
       "maintain-categories": "Ylläpidä kategorioita",
       "maintain-shops": "Ylläpidä kauppoja",
       "add-product": "Lisää tuote",
       "maintain-products": "Ylläpidä tuotteita",
    }
  },
  ger: {
    translation: {
       "admin": "Administrator",
       "contact": "Kontakt",
       "shops": "Geschäfte",
       "cart": "Warenkorb",
       "maintain-categories": "Kategorien pflegen",
       "maintain-shops": "Geschäfte pflegen",
       "add-product": "Produkt hinzufügen",
       "maintain-products": "Produkte verwalten",
    }
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("language") || "ee", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;