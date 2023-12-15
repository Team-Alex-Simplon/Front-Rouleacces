import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Accueil from './Pages/Accueil';
import FaireSignalement from './Pages/FaireSignalement';
import MonProfil from './Pages/Monprofil';
import LesSignalements from './Pages/LesSignalements';
import Connexion from './Pages/Connexion';


const routes = [
  {
    path: "/",
    element: <Accueil />,
  },
  {
    path: "/faire-signalement",
    element: <FaireSignalement />,
  },
  {
    path: "/mon-profil",
    element: <MonProfil />,
  },
  {
    path: "/les-signalements",
    element: <LesSignalements />,
  },
  {
    path: "/connexion",
    element: <Connexion />,
  },
];

function App() {
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