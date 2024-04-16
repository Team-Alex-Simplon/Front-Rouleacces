import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Accueil from './Pages/Accueil';
import MonProfil from './Pages/Monprofil';
import Connexion from './Pages/Connexion';
import Inscription from './Pages/Inscription';
import FaireSignalement from './Pages/FaireSignalement';
import LesSignalements from './Pages/LesSignalements'; // Importez le composant LesSignalements
import BarreNavigation from './Composants/BarreNavigation';

interface AppProps {
  token: string;
}

const handleConnexionSubmit = (data: { mail: string; password: string }) => {
  console.log(data);
};

const handleInscriptionSubmit = (data: { pseudo: string; password: string; mail: string }) => {
  console.log(data);
};

const App: React.FC<AppProps> = ({ token }) => {
  return (
    <Router>
    <BarreNavigation />
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/faire-signalement" element={<FaireSignalement token={token} />} />
      <Route path="/mon-profil" element={<MonProfil />} />
      <Route path="/les-signalements" element={<LesSignalements />} />
      <Route path="/connexion" element={<Connexion onConnexionSubmit={handleConnexionSubmit} />} />
      <Route path="/inscription" element={<Inscription onInscriptionSubmit={handleInscriptionSubmit} />} />
    </Routes>
  </Router>
  );
}

export default App;
