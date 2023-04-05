import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'
import logo1 from '../assets/logo.svg' 
import { useTranslation } from "react-i18next";

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

  return (
    <nav className="bg-light navbar navbar-expand-lg shadow-sm p-4">
      <div className="container-fluid d-sm-flex flex-column flex-lg-row justify-content-center justify-content-lg-between">
      {/* <h2>{t("facebook")}</h2>  */}
        <div className="navbar-brand mb-4 mb-md-0 mb-lg-0">
          <img src={logo1} alt="logo" width="30" height="auto" className="d-inline-block align-text-top" />
          <span className="ms-2 fw-bold">{logo}</span>
        </div>
        
        <div className="">
          <NavLink to='/react-frontend-portfolio/' className="link me-4 me-lg-5">{t("home")}</NavLink>
          <NavLink to='/react-frontend-portfolio/about' className="link me-4 me-lg-5">{t("about")}</NavLink>
          <NavLink to='/react-frontend-portfolio/projects' className="link">{t("projects")}</NavLink>
        </div>
        
        <div>
          <button className='me-lg-5 mt-lg-0 mt-5 btn fw-bold' onClick={toggleLanguage}>
            {language === 'en' ? (
              <img src="https://cdn.countryflags.com/thumbs/united-kingdom/flag-400.png" alt="English" width="30" height="20" />
            ) : (
              <img src="https://cdn.countryflags.com/thumbs/ukraine/flag-400.png" alt="Ukraine" width="30" height="20" />
            )}
          </button>
          <NavLink to='/react-frontend-portfolio/contact' className="link">
            <button className='mt-5 m-lg-0 btn btn-primary custom-btn fw-bold'>{t("contact")}</button>
          </NavLink>
        </div>

      </div>
  </nav>
  )
}

export default Navbar