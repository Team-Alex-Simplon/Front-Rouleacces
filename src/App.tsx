import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BarreNavigation from './Composants/BarreNavigation';
import PiedPage from './Composants/PiedPage';
import Accueil from './Pages/accueil';





//import FaireSignalement from './Pages/FaireSignalement';
//import MonProfil from './Pages/MonProfil';
//import LesSignalements from './Pages/LesSignalements';
//import Connexion from './Pages/Connexion';
//import BarreNavigation from './BarreNavigation';
//import RouleAcces from './Pages/rouleacces';
//import NumeroImmatriculation from './Pages/numeroImmatriculation'; 
//import QuiSommesNous from './Pages/quiSommesNous';
//import Contact from './Pages/contact'; 
//import PlanDuSite from './Pages/planDuSite'; 
//import piedPage from './Composants/piedPage';
//import MentionsLegales from './Pages/mentionsLegales'; 
//import PolitiqueDeConfidentialite from './Pages/politiqueDeConfidentialite';
//import UtilisationDesCookies from './Pages/utilisationDesCookies';
//import RouleAcces from './Pages/rouleacces';
//import NumeroImmatriculation from './Pages/numeroImmatriculation';
//import QuiSommesNous from './Pages/quiSommesNous';
//import Contact from './Pages/contact';
//import PlanDuSite from './Pages/planDuSite';

function App() {
  return (
    <Router>
    {/* Barre de navigation affichée sur toutes les pages */}
    <BarreNavigation />

    {/* Contenu spécifique à chaque page */}
    <Routes>
      <Route path="/" element={<Accueil />} />
      {/* Ajoutez d'autres routes au besoin */}
    </Routes>

    {/* Pied de page affiché sur toutes les pages */}
    <PiedPage/>
  </Router>
  );
}

export default App;
