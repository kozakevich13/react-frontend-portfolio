import React from 'react'
import { FaBootstrap } from 'react-icons/fa'
import { useTranslation } from "react-i18next";


import resume from '../assets/CV_Vitaliy_Kozakevich.pdf'

const About = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className='container-fluid bg-light pt-5 d-flex flex-column align-items-center min-vh-100'>
      <p className="text-center lead m-4">
       {t("about_me")}
      </p>
      <a href={resume} download className="btn btn-primary mt-5 custom-btn fw-bold">{t("resume")}</a>
      <h3 className='pt-5 pb-2 custom-color'>{t("languages")}</h3>

      <p className='lead'>
        <img className='me-2' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/>
        <img className='m-2' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/>
        <img className='m-2' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="30" height="35"/>
        <img className='m-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react" width="35" height="35"/>
        <img className='m-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="vscode" width="35" height="35"/>
        <img className='m-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="git" width="35" height="35"/>
        <img className='m-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="sass" width="35" height="35"/>
        <FaBootstrap className='m-2' style={{width:"35", height:"35", color: '#7a14f5'}}/>
        <img className='ms-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="figma" width="30" height="35"/>
      </p>
      <h3 className="pt-3 pb-2 custom-color">{t("currently_learning")}</h3>
      <p className='lead fw-bold' style={{color: '#53c1f2'}}><img className='m-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react" width="35" height="35"/>React Native</p>
    </div>
  )
}

export default About