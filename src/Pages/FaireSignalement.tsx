import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface FaireSignalementProps {
  onFaireSignalementSubmit: (data: { latitude: string; longitude: string; description: string; handicaps: string[] }) => void;
  token: string; // Le token d'authentification à inclure dans les requêtes
}

const FaireSignalement: React.FC<FaireSignalementProps> = ({ onFaireSignalementSubmit }) => {
  const [latitude, setLatitude] = useState<string>('0');
  const [longitude, setLongitude] = useState<string>('0');
  const [description, setDescription] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  // Fonction pour soumettre le signalement
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Ici, vous pouvez effectuer une requête pour obtenir les handicaps associés
      // Vous pouvez remplacer la partie ci-dessous par la logique appropriée
      const handicaps: string[] = ['handicap1', 'handicap2', 'handicap3'];

      // Appeler la fonction onFaireSignalementSubmit pour soumettre les données du signalement
      onFaireSignalementSubmit({ latitude, longitude, description, handicaps });

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

        <button type="submit" disabled={loading}>Soumettre le signalement</button>
      </form>
    </div>
  );
};

export default FaireSignalement;
