import React from 'react';
import logo from '../images/logo.png';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <img data-testid="img-header" className="header-img" src={logo} alt="Logo do Estudio Ghibli" />
    </header>
  );
}

export default Header;
