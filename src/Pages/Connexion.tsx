import React, { useState } from 'react';

const Connexion: React.FC = () => {
  const [identifiant, setIdentifiant] = useState('');
  const [motDePasse, setMotDePasse] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Ajoutez ici la logique de gestion de la connexion, par exemple, l'envoyer au serveur.

    // Réinitialisez les champs après la soumission du formulaire.
    setIdentifiant('');
    setMotDePasse('');
  };

  return (
    <div className="container">
      <h1>Connexion</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="identifiant">Identifiant :</label>
          <input
            type="text"
            id="identifiant"
            value={identifiant}
            onChange={(e) => setIdentifiant(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="motDePasse">Mot de passe :</label>
          <input
            type="password"
            id="motDePasse"
            value={motDePasse}
            onChange={(e) => setMotDePasse(e.target.value)}
            required
          />
        </div>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default Connexion;