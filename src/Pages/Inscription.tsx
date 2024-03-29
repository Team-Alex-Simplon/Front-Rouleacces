import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PiedPage from '../Composants/PiedPage'; // Import du pied de page
//import "../Styles/Inscription.css";

interface InscriptionProps {
  onInscriptionSubmit: (data: { pseudo: string; password: string; mail: string }) => void;
}

const Inscription: React.FC<InscriptionProps> = ({ onInscriptionSubmit }) => {
  const [pseudo, setPseudo] = useState('');
  const [password, setPassword] = useState('');
  const [mail, setMail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3000/api/utilisateurs/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pseudo,
          password,
          mail,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to register');
      }
  
      const responseData = await response.json();
      const token = responseData.token;
      localStorage.setItem('token', token); // Stockage du token dans localStorage
      onInscriptionSubmit({ pseudo, password, mail });
      navigate('/connexion');
    } catch (error: any) {
      console.error('Error while registering:', error.message);
      // Afficher un message d'erreur à l'utilisateur
      alert('Erreur lors de l\'inscription: ' + error.message);
    }
    setLoading(false);
  };

  return (
    <div>
      
      <div className="Inscription">
        <form onSubmit={handleSubmit}>
          <label htmlFor="pseudo">Pseudo :</label>
          <input type="text" id="pseudo" value={pseudo} onChange={(e) => setPseudo(e.target.value)} required /><br />
          
          <label htmlFor="password">Mot de passe :</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br />
          
          <label htmlFor="mail">Adresse e-mail :</label>
          <input type="email" id="mail" value={mail} onChange={(e) => setMail(e.target.value)} required /><br />
          
          <button type="submit" disabled={loading}>S'inscrire</button>
        </form>
      </div>
      <PiedPage /> {/* Pied de page */}
    </div>
  );
};

export default Inscription;
