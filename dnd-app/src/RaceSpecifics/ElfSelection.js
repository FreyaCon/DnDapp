// ElfSelection.js
import React, { useState } from "react";

const ElfSelection = ({ onSelectAncestor }) => {
  const ElfAncestors = ["Wood", "High"];
  const [selectedAncestor, setSelectedAncestor] = useState(null);

  const handleAncestorSelection = (ancestor) => {
    setSelectedAncestor(ancestor);
    onSelectAncestor(ancestor);
  };

  return (
    <div className="ancestor-selection">
      <h2>Choose Your Subclass</h2>
      <div className="ancestor-buttons">
        {ElfAncestors.map((ancestor, index) => (
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

export default ElfSelection;