import React, { useState } from 'react';

interface SignalementProps {
  onSignalementSubmit: (data: { 
    latitude: number; 
    longitude: number; 
    description: string; 
    datetime: string; 
    user: { id: number } 
  }) => void;
}

const Signalement: React.FC<SignalementProps> = ({ onSignalementSubmit }) => {
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);
  const [description, setDescription] = useState<string>('');
  const [datetime, setDatetime] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Token not found');
      }

      const response = await fetch('http://localhost:3000/api/signalements/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          latitude,
          longitude,
          description,
          datetime,
          user: { id: 1 }, // Remplacez 1 par l'ID de l'utilisateur authentifié
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create signalement');
      }

      const responseData = await response.json();
      onSignalementSubmit({
        latitude,
        longitude,
        description,
        datetime,
        user: { id: responseData.user_id }, // Assurez-vous que user_id est correctement récupéré depuis la réponse de l'API
      });
    } catch (error: any) {
      console.error('Error while creating signalement:', error.message);
      // Afficher un message d'erreur à l'utilisateur
      alert('Erreur lors de la création du signalement: ' + error.message);
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Créer un Signalement</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="latitude">Latitude :</label>
        <input type="number" id="latitude" value={latitude} onChange={(e) => setLatitude(parseFloat(e.target.value))} required /><br />

        <label htmlFor="longitude">Longitude :</label>
        <input type="number" id="longitude" value={longitude} onChange={(e) => setLongitude(parseFloat(e.target.value))} required /><br />

        <label htmlFor="description">Description :</label>
        <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required /><br />

        <label htmlFor="datetime">Date et heure :</label>
        <input type="datetime-local" id="datetime" value={datetime} onChange={(e) => setDatetime(e.target.value)} required /><br />

        <button type="submit" disabled={loading}>Créer le signalement</button>
      </form>
    </div>
  );
};

export default Signalement;
