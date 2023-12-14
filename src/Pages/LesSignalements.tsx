import React, { useEffect, useState } from 'react';

interface Signalement {
  id: number;
  titre: string;
  description: string;
  date: Date;
}

const LesSignalements: React.FC = () => {
  const [signalements, setSignalements] = useState<Signalement[]>([]);

  // Exemple : Chargez les signalements depuis votre backend (à remplacer par votre propre logique).
  useEffect(() => {
    // Exemple simplifié - à remplacer par la logique d'appel à votre API.
    const fetchSignalements = async () => {
      try {
        // Remplacez cette ligne par l'appel à votre API pour récupérer les signalements.
        const response = await fetch('https://example.com/api/signalements');
        const data = await response.json();

        setSignalements(data);
      } catch (error) {
        console.error('Erreur lors du chargement des signalements', error);
      }
    };

    fetchSignalements();
  }, []);

  return (
    <div className="container">
      <h1>Liste des Signalements</h1>
      <ul>
        {signalements.map((signalement) => (
          <li key={signalement.id}>
            <h2>{signalement.titre}</h2>
            <p>{signalement.description}</p>
            <p>Date du signalement : {signalement.date.toISOString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LesSignalements;