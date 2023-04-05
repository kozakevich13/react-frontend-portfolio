import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'
import logo1 from '../assets/logo.svg' 
import { useTranslation } from "react-i18next";
import { motion } from 'framer-motion';


const Navbar = () => {
  const logo = "<vitaliydev/>"
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    if (language === 'en') {
      setLanguage('ua');
    } else {
      setLanguage('en');
    }
  };

  useEffect(() => {
    i18n.changeLanguage(language);
  },[language]);

  const LogoAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: custom => ({
      x: 0,
      opacity: 1,
      transition: {delay: custom * 0.2},
    }) 
  }

  const NavBarAnimation = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: custom => ({
      y: 0,
      opacity: 1,
      transition: {delay: custom * 0.2},
    }) 
  }

  const BtnAnimation = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: custom => ({
      x: 0,
      opacity: 1,
      transition: {delay: custom * 0.2},
    }) 
  }

  return (
    <motion.nav 
      className="bg-light navbar navbar-expand-lg shadow-sm p-4"
      initial="hidden"
      whileInView="visible"  
    >
      <div className="container-fluid d-sm-flex flex-column flex-lg-row justify-content-center justify-content-lg-between">
        <motion.div custom={1} variants={LogoAnimation} className="navbar-brand mb-4 mb-md-0 mb-lg-0">
          <img src={logo1} alt="logo" width="30" height="auto" className="d-inline-block align-text-top" />
          <span className="ms-2 fw-bold">{logo}</span>
        </motion.div>
        
        <motion.div custom={1} variants={NavBarAnimation} className="">
          <NavLink to='/react-frontend-portfolio/' className="link me-3 me-lg-5 w-link">{t("home")}</NavLink>
          <NavLink to='/react-frontend-portfolio/about' className="link me-3 me-lg-5 w-link">{t("about")}</NavLink>
          <NavLink to='/react-frontend-portfolio/projects' className="link w-link">{t("projects")}</NavLink>
        </motion.div>
        
        <motion.div custom={1} variants={BtnAnimation}>
          <button  className='me-lg-5 mt-lg-0 mt-5 btn fw-bold' onClick={toggleLanguage}>
            {language === 'en' ? (
              <img src="https://cdn.countryflags.com/thumbs/united-kingdom/flag-400.png" alt="English" width="30" height="20" />
            ) : (
              <img src="https://cdn.countryflags.com/thumbs/ukraine/flag-400.png" alt="Ukraine" width="30" height="20" />
            )}
          </button>
          <NavLink to='/react-frontend-portfolio/contact' className="link">
            <button className='mt-5 m-lg-0 btn btn-primary custom-btn fw-bold w-btn'>{t("contact")}</button>
          </NavLink>
        </motion.div>

      </div>
  </motion.nav>
  )
}

export default Navbar