import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "home": "Home",
      "about": "About",
      "projects": "Projects",
      "contact": "Contact me",
      "hi_i_am": "Hi, I'm Vitaliy",
      "web_developer": "Web Developer.",
      "new_permison": "new permission",
      "my_works": "My works",
      "disconnect": "Disconnect",
      "remove": "Remove",
      "add_permission": "Add Permission",
      "add_account": "Add account",
      "connect_fb_account": "Connect to your Facebook account",
      "whatsapp_bus_id": "Enter your ID of a WhatsApp Business Account",
    }
  },
  ua: {
    translation: {
      "home": "Головна",
      "about": "Про мене",
      "projects": "Проекти",
      "contact": "Зв'яжіться зі мною",
      "hi_i_am": "Привіт, я Віталій",
      "web_developer": "Веб Розробник",
      "my_works": "Мої роботи",
      "connected_accounts": "Connected accounts",
      "disconnect": "Disconnect",
      "remove": "Remove",
      "add_permission": "Add Permission",
      "add_account": "Add account",
      "connect_fb_account": "Connect to your Facebook account",
      "whatsapp_bus_id": "Enter your ID of a WhatsApp Business Account",
    }
  },
  
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;