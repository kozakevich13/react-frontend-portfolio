import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact me",
      hi_i_am: "Hi, I'm Vitaliy",
      web_developer: "Web Developer.",
      my_works: "My works",
      about_me: `I'm a React web developer. I love creating responsive websites using ReactJS, JavaScript, HTML5, CSS3, Bootstrap, and Sass/Scss. 
                    I enjoy creating website designs in Figma and converting UI designs into real websites. I've done multiple small projects to learn basics and now doing more complex projects.`,
      resume: "Download My Resume",
      languages: "Languages and tools I use:",
      currently_learning: "Currently Learning:",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      send: "SEND",
    },
  },
  ua: {
    translation: {
      home: "Головна",
      about: "Про мене",
      projects: "Проекти",
      contact: "Зв'яжіться зі мною",
      hi_i_am: "Привіт, я Віталій",
      web_developer: "Веб Розробник",
      my_works: "Мої роботи",
      about_me: `Я веб-розробник React. Мені подобається створювати адаптивні веб-сайти за допомогою ReactJS, JavaScript, HTML5, CSS3, Bootstrap і Sass/Scss.
                   Мені подобається створювати дизайни веб-сайтів у Figma та перетворювати дизайни інтерфейсу користувача на справжні веб-сайти. Я робив кілька невеликих проектів, щоб навчитися основам, і зараз виконую більш складні проекти.`,
      resume: "Завантажити резюме",
      languages: "Мови та інструменти, які я використовую:",
      currently_learning: "Зараз вивчаю:",
      name: "Ім'я",
      email: "Пошта",
      subject: "Тема",
      message: "Повідомлення",
      send: "Надіслати",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
