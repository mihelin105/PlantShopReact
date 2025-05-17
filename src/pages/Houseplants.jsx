import React from "react";
import "/src/style.css";
import "/src/houseplants.css";

const indoorPlants = [
  "Asparagus Fern.png",
  "Bunny Ear Cacti.png",
  "CALATHEA MEDALION.png",
  "Dieffenbachia.png",
  "Dracaena.png",
  "Faux Tillandsia Air Plant.png",
  "Guzmania.png",
  "Monstera.png",
  "Peace Lily.png",
  "PricklyPear Cactus ‘Joseph’s coat.png",
  "Snake Plant (Sansevieria).png",
  "Stromanthe.png",
];

const outdoorPlants = [
  "Parlor Palm.jpg",
  "Dracena-reflexa.jpg",
  "Faux Cascalote.jpg",
];

function Houseplants() {
  return (
    <div className="main-container">
      <div className="type-text nunito">
        <h3>INDOOR PLANTS</h3>
      </div>
      <div className="plant-gallery-indoor">
        {indoorPlants.map((fileName, index) => (
          <div className="plant-card" key={index}>
            <img src={`/images-Houseplants/${fileName}`} alt={fileName} />
            <span>
              {fileName
                .replace(".png", "")
                .replace(".jpg", "")
                .replace(/[-_]/g, " ")}
            </span>
          </div>
        ))}
      </div>

      <div className="type-text nunito">
        <h3>OUTDOOR PLANTS</h3>
      </div>
      <div className="plant-gallery-outdoor">
        {outdoorPlants.map((fileName, index) => (
          <div className="plant-card" key={index}>
            <img src={`/images-Houseplants/${fileName}`} alt={fileName} />
            <span>
              {fileName
                .replace(".png", "")
                .replace(".jpg", "")
                .replace(/[-_]/g, " ")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Houseplants;
