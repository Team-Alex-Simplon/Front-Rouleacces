// BarreNavigation.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css'; // Import the CSS file

const BarreNavigation: React.FC = () => {
  return (
    <nav>
      <div className="logo">
        <img src="/path/to/logo.png" alt="Logo" />
      </div>
      <div>
        <div>
          <Link to="/">Accueil</Link>
        </div>
        <div>
          <Link to="/faire-signalement">Faire un signalement</Link>
        </div>
        <div>
          <Link to="/mon-profil">Mon profil</Link>
        </div>
        <div>
          <Link to="/les-signalements">Les signalements</Link>
        </div>
        <div>
          <Link to="/connexion">Connexion</Link>
        </div>
      </div>
    </nav>
  );
};

export default BarreNavigation;
