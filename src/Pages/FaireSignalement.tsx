// FaireSignalement.tsx
import React, { useState } from 'react';

const FaireSignalement: React.FC = () => {
  const [description, setDescription] = useState('');

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const handleSubmit = () => {
    // Logique pour traiter le signalement (envoyer au backend, etc.)
    console.log('Description du signalement:', description);
  };

  return (
    <div>
      <h2>Faire un signalement</h2>
      <label>Description du signalement:</label>
      <textarea value={description} onChange={handleDescriptionChange} />
      <button onClick={handleSubmit}>Soumettre le signalement</button>
    </div>
  );
};

export default FaireSignalement;
