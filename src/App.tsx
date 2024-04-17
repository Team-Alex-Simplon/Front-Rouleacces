<<<<<<< HEAD
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Accueil from './Pages/Accueil'; // Assurez-vous d'importer le composant Accueil
import MonProfil from './Pages/MonProfil';
=======
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Accueil from './Pages/Accueil';
import MonProfil from './Pages/Monprofil';
>>>>>>> 824bed11d30de94029e4b160fbf09287b73db75e
import Connexion from './Pages/Connexion';
import Inscription from './Pages/Inscription';
import FaireSignalement from './Pages/FaireSignalement';
import LesSignalements from './Pages/LesSignalements'; // Importez le composant LesSignalements
<<<<<<< HEAD
=======
import BarreNavigation from './Composants/BarreNavigation';

interface AppProps {
  token: string;
}
>>>>>>> 824bed11d30de94029e4b160fbf09287b73db75e


interface AppProps {
  token: string;
}

const App: React.FC<AppProps> = ({ token }) => {
<<<<<<< HEAD
  const handleConnexionSubmit = (data: { mail: string; password: string }) => {
    console.log(data);
  };

  const handleInscriptionSubmit = (data: { pseudo: string; password: string; mail: string }) => {
    console.log(data);
  };

  return (
    <Router>
 
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/faire-signalement" element={<FaireSignalement token={token} />} />
        <Route path="/mon-profil" element={<MonProfil />} />
        <Route path="/les-signalements" element={<LesSignalements />} />
        <Route path="/connexion" element={<Connexion onConnexionSubmit={handleConnexionSubmit} />} />
        <Route path="/inscription" element={<Inscription onInscriptionSubmit={handleInscriptionSubmit} />} />
      </Routes>
    </Router>
=======
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
>>>>>>> 824bed11d30de94029e4b160fbf09287b73db75e
  );
};

export default App;
