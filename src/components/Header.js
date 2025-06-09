import React from 'react';
import ndzaloImage from './ndzalo.jpg';

const Header = () => (
  <header className="header-container">
    <img src={ndzaloImage} alt="Ndzalo Joe Mathebula" className="header-image" />
    <div className="header-text">
      <h1>Ndzalo Joe Mathebula</h1>
      <p>Software Developer</p>
    </div>
  </header>
);

export default Header;
