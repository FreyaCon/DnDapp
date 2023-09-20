import React, { useState } from "react";
import DragonbornSelection from "../RaceSpecifics/DragonbornSelection";
import GnomeSelection from "../RaceSpecifics/GnomeSelection";
import DwarfSelection from "../RaceSpecifics/DwarfSelection";
import ElfSelection from "../RaceSpecifics/ElfSelection";

const ChooseRace = () => {
  const races = ["Dwarf", "Tiefling", "Elf", "Halfling", "Half-Orc", "Dragonborn", "Gnome", "Human", "Half-Human"];

  const [selectedRace, setSelectedRace] = useState(null);
  const [selectedAncestor, setSelectedAncestor] = useState(null);

  const handleRaceSelection = (race) => {
    setSelectedRace(race);
    setSelectedAncestor(null); // Reset the selected ancestor when a new race is chosen
  };

  const handleAncestorSelection = (ancestor) => {
    setSelectedAncestor(ancestor);
  };

  return (
    <div className="container">
      <h1>Choose Your Race</h1>
      <div className="race-buttons">
        {races.map((race, index) => (
          <button
            key={index}
            className={`race-button ${selectedRace === race ? "selected" : ""}`}
            onClick={() => handleRaceSelection(race)}
          >
            {race}
          </button>
        ))}
      </div>

      {selectedRace === "Dragonborn" && (
        <DragonbornSelection onSelectAncestor={handleAncestorSelection} />
      )}
      {selectedRace === "Gnome" && (
        <GnomeSelection onSelectAncestor={handleAncestorSelection} />
      )}
      {selectedRace === "Dwarf" && (
        <DwarfSelection onSelectAncestor={handleAncestorSelection} />
      )}
      {selectedRace === "Elf" && (
        <ElfSelection onSelectAncestor={handleAncestorSelection} />
      )}

    </div>
  );
};

export default ChooseRace;
