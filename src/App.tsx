import React from 'react'
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Accueil from './Pages/Accueil';
import FaireSignalement from './Pages/FaireSignalement';
import MonProfil from './Pages/MonProfil';
import LesSignalements from './Pages/LesSignalements';
import Connexion from './Pages/Connexion';
import BarreNavigation from './Composants/BarreNavigation';



const router = createBrowserRouter([

  {
    path: "/accueil",
    element: <Accueil />,
  },
  {
    path: "/faire-signalement",
    element: <FaireSignalement/>,
  },
  {
    path: "/mon-profil",
    element: <MonProfil/>,
  },
  {
    path: "/les-signalements" ,
    element: <LesSignalements/>,
  },
  {
    path: "/connexion",
    element: <Connexion/>,
  },

]);
function App() {
  return (
    <>    <div>   
      {/* <BarreNavigation />  */}
      <RouterProvider router={router} />
    </div>
</>

  );
}

export default App
