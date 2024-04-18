import React, { useState } from 'react';
import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';
import Accueil from './Pages/Accueil';
import MonProfil from './Pages/MonProfil';
import Connexion from './Pages/Connexion';
import Inscription from './Pages/Inscription';
import FaireSignalement from './Pages/FaireSignalement';
import LesSignalements from './Pages/LesSignalements';
import BarreNavigation from './Composants/BarreNavigation';
import PiedPage from './Composants/PiedPage';


interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleConnexionSubmit = () => {
    // Gérer la connexion réussie ici
    setIsAuthenticated(true);
  };

  const handleInscriptionSubmit = () => {
    // Gérer l'inscription réussie ici
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <BarreNavigation />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/faire-signalement" element={isAuthenticated ? <FaireSignalement /> : <Navigate to="/connexion" />} />
        <Route path="/mon-profil" element={<MonProfil />} />
        <Route path="/les-signalements" element={<LesSignalements />} />
        <Route path="/connexion" element={<Connexion onConnexionSubmit={handleConnexionSubmit} />} />
        <Route path="/inscription" element={<Inscription onInscriptionSubmit={handleInscriptionSubmit} />} />
        {/* Rediriger vers la page d'accueil si l'utilisateur est authentifié */}
        {isAuthenticated && (
          <>
            <Route path="/connexion" element={<Navigate to="/" replace />} />
            <Route path="/inscription" element={<Navigate to="/" replace />} />
          </>
        )}
      </Routes>
      <PiedPage /> {/* Ajoutez votre composant PiedPage ici */}
    </Router>
  );
};

export default App;
