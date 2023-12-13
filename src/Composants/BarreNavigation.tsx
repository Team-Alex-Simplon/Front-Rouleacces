import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/BarreNavigation.css';
//import logo from "/Images/rouleaccessfondBlanc.jpg";
import logo from "/Images/rouleaccessfondBlanc.jpg";

const BarreNavigation: React.FC = () => {
  return (
    <nav>
      <div className="logo">
        {/* Ajoutez le composant Link pour faire du logo un lien vers la page d'accueil */}
        <Link to="/">
          <img src={logo} alt="Logo" className="no-hover-effect" />
        </Link>
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
