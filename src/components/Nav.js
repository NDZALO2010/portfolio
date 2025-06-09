import React from 'react';

const Nav = () => {
  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <ul>
        <li><a href="#about" onClick={(e) => handleClick(e, 'about')}>About</a></li>
        <li><a href="#skills" onClick={(e) => handleClick(e, 'skills')}>Skills</a></li>
        <li><a href="#projects" onClick={(e) => handleClick(e, 'projects')}>Projects</a></li>
        <li><a href="#education" onClick={(e) => handleClick(e, 'education')}>Education</a></li>
        <li><a href="#contact" onClick={(e) => handleClick(e, 'contact')}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
