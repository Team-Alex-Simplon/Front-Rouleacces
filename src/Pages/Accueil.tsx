// Accueil.tsx

import React, { useRef, ChangeEvent } from "react";
import familleImage from "/Images/famille.jpg";
import Image from "/Images/img.png";
import Maps from "/Images/Maps.jpg";
import "../Styles/Accueil.css";
import BarreNavigation from "../Composants/BarreNavigation";
import PiedPage from "../Composants/PiedPage";
import "../Styles/PiedPage.css";

const Accueil: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleImageClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (selectedFile) {
      console.log("Fichier sélectionné :", selectedFile);
    }
  };

  return (
    <div>
     <BarreNavigation />
      <div style={{ marginTop: "100px" }} className="container"> 
      
        <div className="column">
          <div className="title">Facilitez vos sorties, partagez vos expériences de déplacements.</div>
          <div className="image-container">
            <img className="image" src={familleImage} alt="Famille" />
          </div>
        </div>
        <div className="column">
          <div className="image-container">
          
            <img className="image" src={Image} alt="Télécharger" onClick={handleImageClick} />
         
            <input
              type="file"
              ref={inputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </div>
          <div className="text">
            <p>Partager vos expériences</p>
          </div>
        </div>
      </div>
  
      <div className="lieux">Les lieux </div>
        
      <img className="Maps" src={Maps} alt="Maps" />
      <PiedPage/>
    </div>
  );
};

export default Accueil;
