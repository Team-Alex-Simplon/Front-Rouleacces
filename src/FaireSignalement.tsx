import React, { useState } from 'react';

const FaireSignalement: React.FC = () => {
  const [titre, setTitre] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Ajoutez ici la logique pour traiter le signalement, par exemple, l'envoyer au serveur.

    // Réinitialisez les champs après la soumission du formulaire.
    setTitre('');
    setDescription('');
  };

  return (
    <div>
      <h1>Faire un Signalement</h1>
</div>
  );
};

export default FaireSignalement;
