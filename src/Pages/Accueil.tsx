// Acceuil.tsx
import React from "react";
//import "./Styles/Acceuil.css"
import ".Styles/Acceuil.css"

const Acceuil: React.FC = () => {
  return (
    <div className="container">
      <div className="title">
        Faciliter vos sorties, partager vos expériences de déplacements.
      </div>
      <div className="image-container">
        <div>
          <img
            src="src/Images/famille.jpg" // Assurez-vous d'ajuster le chemin vers votre image
            alt="Famille"
          />
        </div>
        <div>
          <img
            src="src/Images/Download_img.svg" // Assurez-vous d'ajuster le chemin vers votre image
            alt="Télécharger"
            className="upload-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Acceuil;
