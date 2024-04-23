import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Connexion.css';

interface ConnexionProps {
  onConnexionSubmit: (data: { mail: string; password: string }) => void;
}

const Connexion: React.FC<ConnexionProps> = ({ onConnexionSubmit }) => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/utilisateurs/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mail,
          password,
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to log in');
      }
      
      const responseData = await response.json();
      const token = responseData.token;
      localStorage.setItem('token', token); // Stockage du token dans localStorage
      onConnexionSubmit({ mail, password });
      navigate('/faire-signalement');
    } catch (error: any) {
      console.error('Error while logging in:', error.message);
      // Afficher un message d'erreur à l'utilisateur
      alert('Erreur lors de la connexion: ' + error.message);
    }
    
    setLoading(false);
  };

  return (
    <div className="Connexion">
      <form onSubmit={handleSubmit}>
        <label htmlFor="mail">Adresse e-mail :</label>
        <input type="email" id="mail" value={mail} onChange={(e) => setMail(e.target.value)} required /><br />
        
        <label htmlFor="password">Mot de passe :</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br />

        <button type="submit" disabled={loading}>Se connecter</button>
      </form>
    </div>
  );
};

export default Connexion;
