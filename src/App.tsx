// src/App.tsx

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Accueil from './Pages/Accueil';

import FaireSignalement from './FaireSignalement';
import MonProfil from './MonProfil';
import LesSignalements from './LesSignalements';
import Connexion from './Connexion';
import BarreNavigation from './BarreNavigation';
import Acceuil from './Pages/Accueil';

const router = createBrowserRouter([
  {
    path: "/accueil",
    element: <Acceuil />,
  },
  {
    path: "/faire-signalement",
    element: <div>FaireSignalement</div>,
  },
  {
    path: "/mon-profil",
    element: <div>MonProfil</div>,
  },
  {
    path: "/les-signalements",
    element: <div>LesSignalements</div>,
  },
  {
    path: "/connexion",
    element: <div>Connexion</div>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
