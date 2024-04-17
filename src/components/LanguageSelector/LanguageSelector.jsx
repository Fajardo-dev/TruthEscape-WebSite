import React from "react";
import { useTranslation } from "react-i18next";

function LanguageSelector() {
  const { i18n } = useTranslation();
  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };
  return (
    <select className="default-btn" onChange={changeLanguage}>
      <option value="en">English</option>
      <option value="es">Español</option>
    </select>
  );
}

export default LanguageSelector;
