
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Accueil from './Pages/Accueil';
import MonProfil from './Pages/Monprofil';
import LesSignalements from './Pages/LesSignalements';
import Connexion from './Pages/Connexion';
import Inscription from './Pages/Inscription';
import FaireSignalement from './Pages/FaireSignalement';

const handleConnexionSubmit = (data: { mail: string; password: string }) => {
  console.log(data);
};

const handleInscriptionSubmit = (data: { pseudo: string; password: string; mail: string }) => {
  console.log(data);
};

const routes = [
  {
    path: "/",
    element: <Accueil />
  },
  {
    path: "/faire-signalement",
    element: <FaireSignalement onFaireSignalementSubmit={handlefSubmit} />
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
