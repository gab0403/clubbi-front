import React from 'react';
import logoIn from '../images/logoIN.png';
import logoGH from '../images/logoGH.png';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="copy"> Gabriela Rodrigues © 2022</p>
      <section className="section-footer">
        <a className="link" target="_blank" href="https://www.linkedin.com/in/gabrielarodrigues-dev/" rel="noreferrer">
          <img className="logo" src={logoIn} alt="Logo Linkedin" />

        </a>
        <a className="link" target="_blank" href="https://github.com/gab0403" rel="noreferrer">
          <img className="logo" src={logoGH} alt="Logo Linkedin" />
        </a>
      </section>
    </footer>
  );
}

export default Footer;
