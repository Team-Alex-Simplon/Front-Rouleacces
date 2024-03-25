import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Accueil from './Pages/Accueil';
import MonProfil from './Pages/Monprofil';

import Connexion from './Pages/Connexion';
import Inscription from './Pages/Inscription';
import FaireSignalement from './Pages/FaireSignalement';

const handleConnexionSubmit = (data: { mail: string; password: string }) => {
  console.log(data);
};

const handleInscriptionSubmit = (data: { pseudo: string; password: string; mail: string }) => {
  console.log(data);
};

const handleFaireSignalementSubmit = (data: { latitude: string; longitude: string; description: string; handicaps: string[] }) => {
  console.log(data);
};

const routes = [
  {
    path: "/",
    element: <Accueil />
  },
  {
    path: "/faire-signalement",
    element: <FaireSignalement onFaireSignalementSubmit={handleFaireSignalementSubmit} token="" />
    // Ajoutez token="" comme prop pour FaireSignalement
  },
  {
    path: "/mon-profil",
    element: <MonProfil />
  },
  {
    path: "/les-signalements",

  },
  {
    path: "/connexion",
    element: <Connexion onConnexionSubmit={handleConnexionSubmit} />
  },
  {
    path: "/inscription",
    element: <Inscription onInscriptionSubmit={handleInscriptionSubmit} />
  }
];

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {routes.map(route => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
