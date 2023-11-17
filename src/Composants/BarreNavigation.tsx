import React from 'react';
import { Link } from 'react-router-dom';

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
          <Link to="./Pages/faire-signalement">Faire un signalement</Link>
        </div>
        <div>
          <Link to="./Pages/mon-profil">Mon profil</Link>
        </div>
        <div>
          <Link to="./Pages/les-signalements">Les signalements</Link>
        </div>
        <div>
          <Link to="./Pages/connexion">Connexion</Link>
        </div>
      </div>
    </nav>
  );
};

export default BarreNavigation
