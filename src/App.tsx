import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Accueil from './Pages/Accueil'; // Assurez-vous d'importer le composant Accueil
import MonProfil from './Pages/MonProfil';
import Connexion from './Pages/Connexion';
import Inscription from './Pages/Inscription';
import FaireSignalement from './Pages/FaireSignalement';
import LesSignalements from './Pages/LesSignalements'; // Importez le composant LesSignalements


interface AppProps {
  token: string;
}

const App: React.FC<AppProps> = ({ token }) => {
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
  );
};

export default App;
