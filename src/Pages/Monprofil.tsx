import React, { useState } from 'react';

const MonProfil: React.FC = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Ajoutez ici la logique pour mettre à jour le profil, par exemple, l'envoyer au serveur.

    // Réinitialisez les champs après la soumission du formulaire.
    setNom('');
    setPrenom('');
    setEmail('');
  };

  return (
    <div>
      <h1>Mon Profil</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nom">Nom :</label>
          <input
            type="text"
            id="nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="prenom">Prénom :</label>
          <input
            type="text"
            id="prenom"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
};

export default MonProfil;