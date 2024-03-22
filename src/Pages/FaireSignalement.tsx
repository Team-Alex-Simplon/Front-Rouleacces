import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";

interface FaireSignalementProps {
  onFaireSignalementSubmit: (data: { latitude: string; longitude: string; description: string; userId: number }) => void;
  token: string; // Le token d'authentification à inclure dans les requêtes
}

const FaireSignalement: React.FC<FaireSignalementProps> = ({ onFaireSignalementSubmit, token }) => {
  const [latitude, setLatitude] = useState<string>('0');
  const [longitude, setLongitude] = useState<string>('0');
  const [description, setDescription] = useState<string>('');
  const [datetime, setDatetime] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Extraire l'ID de l'utilisateur du token JWT lors du chargement du composant
    const userId = getUserIdFromToken(token);
    if (userId) {
      // Mettre à jour les données avec l'ID de l'utilisateur
      // Vous pouvez également stocker l'ID de l'utilisateur dans un état si nécessaire
    }
  }, [token]);

  const getUserIdFromToken = (token: string): number | null => {
    try {
      const decodedToken: any = jwt_decode(token);
      return decodedToken.userId; // Remplacez 'userId' par le champ contenant l'ID de l'utilisateur dans votre token JWT
    } catch (error) {
      console.error("Error decoding JWT token:", error);
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userId = getUserIdFromToken(token);
      if (!userId) {
        throw new Error('User ID not found in token');
      }

      const signalementResponse = await fetch('http://localhost:3000/api/signalements/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Utilisez le token d'authentification
        },
        body: JSON.stringify({
          latitude,
          longitude,
          description,
          datetime,
          user: { id: userId }
        }),
      });

      if (!signalementResponse.ok) {
        throw new Error('Failed to submit signalement');
      }

      const signalementData = await signalementResponse.json();
      console.log('New signalement created:', signalementData);

      // Redirection de l'utilisateur après la soumission réussie du signalement
      navigate('/other-page');
    } catch (error: any) {
      console.error('Error while submitting signalement:', error.message);
      // Affichez un message d'erreur à l'utilisateur si nécessaire
      alert('Erreur lors de la soumission du signalement: ' + error.message);
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Faire un signalement</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="latitude">Latitude :</label>
        <input type="number" id="latitude" value={latitude} onChange={(e) => setLatitude(e.target.value)} required /><br />

        <label htmlFor="longitude">Longitude :</label>
        <input type="number" id="longitude" value={longitude} onChange={(e) => setLongitude(e.target.value)} required /><br />

        <label htmlFor="description">Description :</label>
        <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required /><br />

        <label htmlFor="datetime">Date et heure :</label>
        <input type="datetime-local" id="datetime" value={datetime} onChange={(e) => setDatetime(e.target.value)} required /><br />

        <button type="submit" disabled={loading}>Soumettre le signalement</button>
      </form>
    </div>
  );
};

export default FaireSignalement;
