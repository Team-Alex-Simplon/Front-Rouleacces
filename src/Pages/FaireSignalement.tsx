import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PiedPage from '../Composants/PiedPage';

interface FaireSignalementProps {
  token: string;
}

const FaireSignalement: React.FC<FaireSignalementProps> = ({ token }) => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = {
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
        description,
      };

      const response = await fetch('http://localhost:3000/api/signalements/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        navigate('/');
      } else {
        throw new Error('Erreur lors de la soumission du signalement');
      }
    } catch (error: any) {
      console.error('Error while submitting signalement:', error.message);
      alert('Erreur lors de la soumission du signalement: ' + error.message);
    }

    setLoading(false);
  };

  return (
    <div>
      <div className="FaireSignalement">
        <h2>Faire un signalement</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="latitude">Latitude :</label>
          <input
            type="number"
            id="latitude"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            required
          />
          <br />
          <label htmlFor="longitude">Longitude :</label>
          <input
            type="number"
            id="longitude"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            required
          />
          <br />
          <label htmlFor="description">Description :</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <br />
          <button type="submit" disabled={loading}>
            Soumettre le signalement
          </button>
        </form>
      </div>
      <PiedPage />
    </div>
  );
};

export default FaireSignalement;
