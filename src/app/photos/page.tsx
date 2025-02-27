import React from "react";
import "./photos.css";
import Orb from "../../components/sections/Orb";

const Photos = () => {
  return (
    <div className="photos">
      <nav className="photos__nav">
        <h1>nav</h1>
      </nav>

      {/* Ensure valid props are passed */}
      <Orb 
        totalImage={30} 
        totalItems={100} 
        baseWidth={1} 
        baseHeight={0.6} 
        sphereRadius={5} 
        backgroundColor="#3b3b3b" 
      />

      <footer className="photos__footer">
        <p>footer</p>
      </footer>
    </div>
  );
};

export default Photos;
