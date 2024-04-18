// BarreNavigation.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/BarreNavigation.css';
import logo from "/Images/rouleaccessfondBlanc.jpg";

const BarreNavigation: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/">Accueil</Link>
        <Link to="/faire-signalement">Faire un signalement</Link>
        <Link to="/mon-profil">Mon profil</Link>
        <Link to="/les-signalements">Les signalements</Link>
        <Link to="/inscription">inscription</Link>
        <Link to="/connexion">connexion</Link>
        <Link to="/connexion">Déconnexion</Link>
      </div>
    </nav>
  );
};

export default BarreNavigation;
