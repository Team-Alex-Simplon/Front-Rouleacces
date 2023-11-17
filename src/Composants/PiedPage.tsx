// PiedPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const PiedPage: React.FC = () => {
  return (
    <footer>
      <nav>
        <ul>
          <li><Link to="/rouleacces">Roule d'accès</Link></li>
          <li><Link to="/numeroImmatriculation">Numéro d’immatriculation</Link></li>
          <li><Link to="/quiSommesNous">Qui sommes nous</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/planDuSite">Plan du site</Link></li>
          <li><Link to="/page2024">2024</Link></li>
          <li><Link to="/mentionsLegales">Mentions légales</Link></li>
          <li><Link to="/politiqueDeConfidentialite">Politique de confidentialité</Link></li>
          <li><Link to="/utilisationDesCookies">Utilisation des cookies</Link></li>
        </ul>
      </nav>
    </footer>
  );
};

export default PiedPage;
