// DwarfSelection.js
import React, { useState } from "react";

const DwarfSelection = ({ onSelectAncestor }) => {
  const DwarfAncestors = ["Hill", "Mountain"];
  const [selectedAncestor, setSelectedAncestor] = useState(null);

  const handleAncestorSelection = (ancestor) => {
    setSelectedAncestor(ancestor);
    onSelectAncestor(ancestor);
  };

  return (
    <div className="ancestor-selection">
      <h2>Choose Your Subclass</h2>
      <div className="ancestor-buttons">
        {DwarfAncestors.map((ancestor, index) => (
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

export default DwarfSelection;