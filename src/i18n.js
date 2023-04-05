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
      "my_works": "My works",
      "about_me": `I'm a react web developer with 2+ years of experience in web development. I love creating responsive websites using ReactJS, JavaScript, HTML5, CSS3, Bootstrap, and Sass/Scss. 
                    I enjoy creating website designs in Figma and converting UI designs into real websites. I've done multiple small projects to learn basics and now doing more complex projects.`,
      "resume": "Download My Resume",
      "languages": "Languages and tools I use:",
      "currently_learning": "Currently Learning:",
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
      "about_me": `Я веб-розробник React із 2+ роками досвіду веб-розробки. Мені подобається створювати адаптивні веб-сайти за допомогою ReactJS, JavaScript, HTML5, CSS3, Bootstrap і Sass/Scss.
                   Мені подобається створювати дизайни веб-сайтів у Figma та перетворювати дизайни інтерфейсу користувача на справжні веб-сайти. Я робив кілька невеликих проектів, щоб навчитися основам, і зараз виконую більш складні проекти.`,
      "resume": "Завантажити резюме",
      "languages": "Мови та інструменти, які я використовую:",
      "currently_learning": "Зараз вивчаю:",
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