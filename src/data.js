import windows98 from "./assets/projectImages/windows-98.png";
import devTeam from "./assets/projectImages/dev-team.png";
import birthdayCard from "./assets/projectImages/birthday-card.png";
import pixel from "./assets/projectImages/pixel.png"

const ProjectsData = [
   
  {
    id: "windows-98",
    img: windows98,
    name: "Windows 98",
    stack: ["< RESTful API />", "< react-grid-layout />", "< React.js />"],
    live: "https://kozakevich13.github.io/windows-xp/",
    source: "https://github.com/kozakevich13/windows-xp",
    description_en:  
        "This project was created to push myself in HTML and CSS3 and to learn more in depth React and react-grid-layout.",
    description_ua:  
        "Цей проект був створений, щоб поглибити себе в HTML і CSS3 і дізнатися більше про React і react-grid-layout.",
  },
  {
    id: "dev-team",
    img: devTeam,
    name: "Dev Team",
    stack: ["< Bootstrap />", "< emailjs-com />", "< React.js />"],
    live: "https://kozakevich13.github.io/dev-team-landing/",
    source: "https://github.com/kozakevich13/dev-team-landing",
    description_en:  
        "This page was created using such technologies as: React, Bootstrap, emailjs-com.",
    description_ua:  
        "Ця сторінка створена за допомогою таких техноголій як: React, Bootstrap, emailjs-com.",
  },
  {
    id: "birthday-card",
    img: birthdayCard,
    name: "Birthday card",
    stack: ["< CSS & HTML />", "< retoolapi.dev />", "< React.js />"],
    live: "https://kozakevich13.github.io/birthday-card/",
    source: "https://github.com/kozakevich13/birthday-card",
    description_en:  
        "This page uses retoolapi.dev to generate random birthday greetings.",
    description_ua:  
        "Ця сторінка використовує retoolapi.dev для генерації рандомних привітань з днем народження.",
  },
  {
    id: "pixel",
    img: pixel,
    name: "Pixel",
    stack: ["< Spline />", "< React.js />"],
    live: "https://kozakevich13.github.io/pixel.github.io/",
    source: "https://github.com/kozakevich13/pixel.github.io",
    description_en:  
        "This page was created with the help of such technologies as: Spline and React.js",
    description_ua:  
        "Ця сторінка створена за допомогою таких техноголій як: Spline і React.js",
  },

  
   
];

const InprogressProjectsData = [
   
 

];

export default {ProjectsData, InprogressProjectsData}