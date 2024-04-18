import React, { useState, useEffect } from 'react';
import '../Styles/LesSignalements.css';


const LesSignalements: React.FC = () => {
  const [signalements, setSignalements] = useState<any[]>([]);
  const token = localStorage.getItem('token'); // Récupérer le token depuis le localStorage

  useEffect(() => {
    const fetchSignalements = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/signalements', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (response.ok) {
          const data = await response.json();
          setSignalements(data);
        } else {
          throw new Error('Erreur lors de la récupération des signalements');
        }
      } catch (error: any) {
        console.error('Erreur lors de la récupération des signalements :', error.message);
        // Afficher un message d'erreur à l'utilisateur
        alert('Erreur lors de la récupération des signalements: ' + error.message);
      }
    };

    // Vérifier si le token est disponible avant de lancer la requête
    if (token) {
      fetchSignalements();
    }
  }, [token]); // Ajoutez token à la liste des dépendances du hook useEffect pour qu'il se déclenche à chaque modification du token

  return (
    <div>
      <h2>Liste des signalements</h2>
      {signalements.map((signalement, index) => (
        <div key={index}>
          <h3>Signalement #{index + 1}</h3>
          <p>Latitude: {signalement.latitude}</p>
          <p>Longitude: {signalement.longitude}</p>
          <p>Description: {signalement.description}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default LesSignalements;