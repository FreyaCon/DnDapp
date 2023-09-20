// DragonbornSelection.js
import React, { useState } from "react";

const DragonbornSelection = ({ onSelectAncestor }) => {
  const dragonbornAncestors = ["Acid", "Poison", "Cold", "Water","Lightning", "Fire", "Land", "Fire2", "Cold2", ];
  const [selectedAncestor, setSelectedAncestor] = useState(null);

  const handleAncestorSelection = (ancestor) => {
    setSelectedAncestor(ancestor);
    onSelectAncestor(ancestor);
  };

  return (
    <div className="ancestor-selection">
      <h2>Choose Your Subclass</h2>
      <div className="ancestor-buttons">
        {dragonbornAncestors.map((ancestor, index) => (
          <button
            key={index}
            className={`ancestor-button ${
              selectedAncestor === ancestor ? "selected" : ""
            }`}
            onClick={() => handleAncestorSelection(ancestor)}
          >
            {ancestor}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DragonbornSelection;