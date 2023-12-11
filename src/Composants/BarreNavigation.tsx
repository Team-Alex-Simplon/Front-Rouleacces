// BarreNavigation.tsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../Images/rouleaccessfondBlanc.png';
import './BarreNavigation.css';

const BarreNavigation: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
      <div className="logo">
        <Link to="/">
          <img src={logoImage} alt="Logo" />
        </Link>
      </div>
      <div className={`links ${menuOpen ? 'open' : ''}`}>
        <Link to="/faire-signalement">Faire un signalement</Link>
        <Link to="/mon-profil">Mon profil</Link>
        <Link to="/les-signalements">Les signalements</Link>
        <Link to="/connexion">Connexion</Link>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776;
      </div>
    </nav>
  );
};

export default BarreNavigation;
