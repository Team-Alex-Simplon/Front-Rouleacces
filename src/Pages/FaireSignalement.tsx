import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/FaireSignalement.css';

interface FaireSignalementProps {}

const FaireSignalement: React.FC<FaireSignalementProps> = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [description, setDescription] = useState('');
  const [chemin, setChemin] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleLatitudeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLatitude(e.target.value);
  };
  const handleLongitudeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLongitude(e.target.value);
  };
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };
  const handlePhotoUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChemin(e.target.value);
  };
 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  try {
    // Créer d'abord le signalement
    const signalementResponse = await fetch('http://localhost:3000/api/signalements/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        latitude,
        longitude,
        description
      })
    });
    if (!signalementResponse.ok) {
      throw new Error('Erreur lors de la soumission du signalement');
    }
    // Récupérer l'ID du signalement créé
    const signalementData = await signalementResponse.json();
    const createdSignalementId = signalementData.id;
    console.log('ID du signalement récupéré:', createdSignalementId); // Afficher l'ID du signalement récupéré
    // Ensuite, créer la photo de signalement en utilisant l'ID du signalement créé
    const photoResponse = await fetch(`http://localhost:3000/api/photosignalements/${createdSignalementId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chemin
      })
    });
    if (!photoResponse.ok) {
      throw new Error('Erreur lors de la création de la photo de signalement');
    }
    navigate('/');
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
            onChange={handleLatitudeChange}
            required
          />
          <br />
          <label htmlFor="longitude">Longitude :</label>
          <input
            type="number"
            id="longitude"
            value={longitude}
            onChange={handleLongitudeChange}
            required
          />
          <br />
          <label htmlFor="description">Description :</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            required
          />
          <br />
          <label htmlFor="photoUrl">URL de la photo :</label>
          <input
            type="text"
            id="photoUrl"
            value={chemin}
            onChange={handlePhotoUrlChange}
            required
          />
          <br />
          <button type="submit" disabled={loading}>
            Soumettre le signalement
          </button>
        </form>
      </div>
    </div>
  );
};

export default FaireSignalement;
