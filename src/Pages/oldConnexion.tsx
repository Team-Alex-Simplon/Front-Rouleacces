import React, { useState } from 'react';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    mail: '',
    pseudo: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to submit the form data
    console.log(formData);
  };



  async function handleConnexion(e: any): Promise<void> {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:3000/api/authentifications/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pseudo: formData.pseudo,
          password: formData.password,
          mail: formData.mail,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to register');
      }
  
      const responseData = await response.json();
  
      // Stocker le token dans le localStorage pour une utilisation ultérieure
      localStorage.setItem('token', responseData.token);
      localStorage.setItem('pseudo', responseData.pseudo);
  
      console.log(responseData); // Afficher la réponse du serveur
    } catch (error) {
      console.error('Error:', error); // Gérer les erreurs de requête
    }
  }
  
  

  
  return (
    <div>
      <h2>Creer un compte</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="mail">Email:</label>
          <input
            type="email"
            id="mail"
            name="mail"
            value={formData.mail}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="pseudo">Username:</label>
          <input
            type="text"
            id="pseudo"
            name="pseudo"
            value={formData.pseudo}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit"onClick ={handleConnexion}>Envoyer</button>
      </form>
      <div>
        <p>Déjà un compte? <a href="#">Sign in</a></p>
        <p>Mot de passe oublié <a href="#">Recover it</a></p>
        <p>Supprimer son compte <a href="#">Delete account</a></p>
      </div>
    </div>
  );
};

export default SignupForm;
