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
       'tk':"piece",
       
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
       "Add to cart": "Lisa ostukorvi",
       "Sort A-Z": "A-Z",
       "Sort Z-A": "Z-A",
       "Price Ascending":"Hind Kahanev",
       "Price Descending": "Hind suurenev",
       'Category Tent': "Telk",
       'Category Camping': "Matkamine",
       'Category Motors': "Autod",
       'Category Motorcycle':"Mootorrattad",
       'Cart is empty.':"Ostukorv on tühi",
       'Delete':"Kustuta",
       'Empty':"Eemalda tooted",
       'Add products':"Lisa Toode",
       'Total Value:':"Ostukorvi summa",
       'Total of:':"Toodete",
       'products in cart!':"kogus",
       'Edit':"Muuda",
       "piece":"tk",
       "Name":"Nimi",
       "Message":"Sõnum",
       "Phone":"Telefon",
       "Send":"Saada sõnum",
       "Add Product":"Lisa toode",
       "Product added!": "Toode Lisatud Ostukorvi!",
       'Item added to cart!':"Lisatud Ostukorvi",

       

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
       "Add to cart": "Lisää ostoskoriin",
       "Sort A-Z": "A-Z",
       "Sort Z-A": "Z-A",
       "Price Ascending":"Hinta laskee",
       "Price Descending": "Hinta nousee",
       'Category Tent': "Teltta",
       'Category Camping': "Patikointi",
       'Category Motors': "Autoja",
       'Category Motorcycle':"Moottoripyörät",
       'Cart is empty.':"Ostoskori on tyhjä",
       'Delete':"Poistaa",
       'Empty':"Tyhjä",
       'Add products':"Lisää tuotteita",
       'Total Value:':"Kokonaisarvo",
       'Total of:':"Yhteensä",
       'products in cart!':"kogustuotteet ostoskoriin",
       "Edit":"Muokata",
       'tk':"pala",
       "Name":"Nimi",
       "Message":"Viesti",
       "Phone":"Puhelin",
       "Send":"Lähettää",
       "Add Product":"Lisää tuote",
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
       "Add to cart": "In den Warenkorb legen",
       "Sort A-Z": "A-Z",
       "Sort Z-A": "Z-A",
       "Price Ascending":"Preis aufsteigend",
       "Price Descending": "Preis absteigend",
       'Category Tent': "Zelt",
       'Category Camping': "Camping",
       'Category Motors': "Autos",
       'Category Motorcycle':"Motorrad",
       'Cart is empty.':"Einkaufswagen ist leer",
       'Delete':"Löschen",
       'Empty':"Produkte entfernen",
       'Add products':"Produkte hinzufügen",
       'Total Value:':"Gesamtwert",
       'Total of:':"Insgesamt",
       'products in cart!':"produkte im Warenkorb",
       'Edit':"Bearbeiten",
       'tk':"Stück",
       "Name":"Name",
       "Message":"Nachricht",
       "Phone":"Telefon",
       "Send":"Schicken",
       "Add Product":"Produkt hinzufügen"
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