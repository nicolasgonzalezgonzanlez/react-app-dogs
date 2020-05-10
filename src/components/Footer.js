import React from 'react';
import './footer.css';
const Footer = () => {
  return (
    <footer className="footer flex-container">
      <div className="content has-text-centered flex-item">
        <p>
          Proyecto creado con <strong>Bulma</strong> Por  
          <a href="https://nicolasgonzalezprogramador.firebaseapp.com" target="_blank" > Nicolas Gonzalez</a>
        </p>
      </div>
    </footer>
  )
};

export default Footer;
