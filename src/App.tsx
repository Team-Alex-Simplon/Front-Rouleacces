import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BarreNavigation from './Composants/BarreNavigation';
import piedPage from './Composants/piedPage';

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
      <Routes>
     
      <Route path="/" element={<Accueil />} />
        <Route path="/rouleacces" element={<RouleAcces />} />
        <Route path="/numeroImmatriculation" element={<NumeroImmatriculation />} />
        <Route path="/quiSommesNous" element={<QuiSommesNous />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/planDuSite" element={<PlanDuSite />} />
      
        <Route path="/mentionsLegales" element={<MentionsLegales />} />
        <Route path="/politiqueDeConfidentialite" element={<PolitiqueDeConfidentialite />} />
        <Route path="/utilisationDesCookies" element={<UtilisationDesCookies />} />
      </Routes>


    </Router>
  );
}

export default App;
