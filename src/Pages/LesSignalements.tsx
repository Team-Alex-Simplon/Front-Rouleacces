import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode'; // Importez la méthode jwtDecode

import '../Styles/LesSignalements.css';

const LesSignalements: React.FC = () => {
  const [signalements, setSignalements] = useState<any[]>([]);
  const [commentairesParSignalement, setCommentairesParSignalement] = useState<Record<string, any[]>>({});
  const [photosParSignalement, setPhotosParSignalement] = useState<Record<string, any[]>>({});
  const [nouveauCommentaire, setNouveauCommentaire] = useState<Record<string, string>>({}); // Définir le type de nouveauCommentaire comme un objet dont les clés sont des chaînes et les valeurs sont des chaînes
  const [userId, setUserId] = useState<string>(""); // State pour stocker l'identifiant de l'utilisateur
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

          // Récupérer les commentaires pour chaque signalement
          const commentairesPromises = data.map(async (signalement: any) => {
            try {
              const commentairesResponse = await fetch(`http://localhost:3000/api/commentaires/${signalement.id}`, {
                headers: {
                  'Authorization': `Bearer ${token}`
                }
              });
              if (commentairesResponse.ok) {
                return commentairesResponse.json();
              } else {
                throw new Error('Erreur lors de la récupération des commentaires');
              }
            } catch (error: any) { // Spécifiez le type de la variable error comme any
              console.error('Erreur lors de la récupération des commentaires pour le signalement', signalement.id, ':', error.message);
              throw error;
            }
          });

          // Récupérer les photos pour chaque signalement
          console.log('Début de la récupération des photos pour chaque signalement...');
          const photosPromises = data.map(async (signalement: any) => {
            try {
              const photosResponse = await fetch(`http://localhost:3000/api/photosignalements/${signalement.id}`, {
                headers: {
                  'Authorization': `Bearer ${token}`
                }
              });
              if (photosResponse.ok) {
                console.log(`Photos pour le signalement ${signalement.id} récupérées avec succès.`);
                return photosResponse.json();
              } else {
                throw new Error('Erreur lors de la récupération des photos');
              }
            } catch (error: any) {
              console.error('Erreur lors de la récupération des photos pour le signalement', signalement.id, ':', error.message);
              throw error;
            }
          });

          try {
            const commentaires = await Promise.all(commentairesPromises);
            const commentairesMap: Record<string, any[]> = {};
            data.forEach((signalement: any, index: number) => {
              commentairesMap[signalement.id] = commentaires[index];
            });
            setCommentairesParSignalement(commentairesMap);

            const photos = await Promise.all(photosPromises);
            const photosMap: Record<string, any[]> = {};
            data.forEach((signalement: any, index: number) => {
              photosMap[signalement.id] = photos[index];
            });
            setPhotosParSignalement(photosMap);
            console.log('Données supplémentaires récupérées avec succès.');
          } catch (error: any) {
            console.error('Erreur lors de la récupération des données supplémentaires :', error.message);
            alert('Erreur lors de la récupération des données supplémentaires: ' + error.message);
          }
        } else {
          throw new Error('Erreur lors de la récupération des signalements');
        }
      } catch (error: any) {
        console.error('Erreur lors de la récupération des signalements :', error.message);
        alert('Erreur lors de la récupération des signalements: ' + error.message);
      }
    };

    // Décoder le token JWT pour récupérer l'identifiant de l'utilisateur
    if (token) {
      const decodedToken: any = jwtDecode(token);
      const userIdFromToken: string = decodedToken.id;
      setUserId(userIdFromToken);
      fetchSignalements();
    }
  }, [token]); // Ajoutez token à la liste des dépendances du hook useEffect

  // Fonction pour soumettre un commentaire
  const soumettreCommentaire = async (signalementId: string, userId: string) => {
    try {
      const response = await fetch(`http://localhost:3000/api/commentaires/${signalementId}/${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ contenu: nouveauCommentaire[signalementId] }) // Utilisez le commentaire correspondant au signalement
      });
      if (response.ok) {
        const nouveauCommentaire = await response.json();
        // Mettre à jour les commentaires pour le signalement spécifique
        setCommentairesParSignalement(prevState => ({
          ...prevState,
          [signalementId]: [...(prevState[signalementId] || []), nouveauCommentaire]
        }));
        // Réinitialiser le champ de saisie du commentaire
        setNouveauCommentaire(prevState => ({
          ...prevState,
          [signalementId]: ""
        }));
      } else {
        throw new Error('Erreur lors de l\'ajout du commentaire');
      }
    } catch (error: any) {
      console.error('Erreur lors de l\'ajout du commentaire :', error.message);
      // Afficher un message d'erreur à l'utilisateur
      alert('Erreur lors de l\'ajout du commentaire: ' + error.message);
    }
  };

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
          {/* Afficher les photos associées */}
          <div>
  <h4>Photos :</h4>
  {Array.isArray(photosParSignalement[signalement.id]) && photosParSignalement[signalement.id].map((photo: any, index: number) => (
    <div key={index}>
      <p>{photo.chemin}</p>
    </div>
  ))}
</div>

          {/* Afficher les commentaires existants */}
          <div>
            <h4>Commentaires :</h4>
            {commentairesParSignalement[signalement.id]?.map((commentaire: any, index: number) => (
              <p key={index}>{commentaire.contenu}</p>
            ))}
          </div>
          {/* Formulaire pour ajouter un commentaire */}
          <form onSubmit={(e) => {
            e.preventDefault();
            soumettreCommentaire(signalement.id, userId); // Utilisation de l'identifiant de l'utilisateur récupéré du token
          }}>
            <input 
              type="text" 
              value={nouveauCommentaire[signalement.id] || ""} 
              onChange={(e) => setNouveauCommentaire(prevState => ({
                ...prevState,
                [signalement.id]: e.target.value
              }))} 
              placeholder="Ajouter un commentaire..." 
            />
            <button type="submit">Commenter</button>
          </form>
        </div>
      ))}
    </div>
  );
  
};

export default LesSignalements;
