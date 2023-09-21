import React, { useState } from "react";
import DragonbornSelection from "../RaceSpecifics/DragonbornSelection";
import GnomeSelection from "../RaceSpecifics/GnomeSelection";
import DwarfSelection from "../RaceSpecifics/DwarfSelection";
import ElfSelection from "../RaceSpecifics/ElfSelection";

const ChooseRace = () => {
  const races = ["Dwarf", "Tiefling", "Elf", "Halfling", "Half-Orc", "Dragonborn", "Gnome", "Human", "Half-Human"];
  const classes = ["Wizard", "Rogue", "Cleric", "Barbarian", "Bard", "Monk", "Druid", "Sourcerer", "Warlock", "Paladin", "Ranger"];
  const [selectedRace, setSelectedRace] = useState(null);
  const [selectedAncestor, setSelectedAncestor] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);
  const [continueEnabled, setContinueEnabled] = useState(false)

  const handleRaceSelection = (race) => {
    setSelectedRace(race);
    setSelectedAncestor(null); // Reset the selected ancestor when a new race is chosen
  };

  const handleAncestorSelection = (ancestor) => {
    setSelectedAncestor(ancestor);
  };

  const handleClassSelection = (selectedClass) => {
    setSelectedClass(selectedClass);
    checkContinueButtonStatus();
  };

  
  const checkContinueButtonStatus = () => {
    // Enable the "Continue" button if both ancestry and class are selected
    if (selectedAncestor && selectedClass) {
      setContinueEnabled(true);
    } else {
      setContinueEnabled(false);
    }
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

      <h2>Choose Your Class</h2>
      <div className="class-buttons">
        {classes.map((className, index) => (
          <button
            key={index}
            className={`class-button ${selectedClass === className ? "selected" : ""}`}
            onClick={() => handleClassSelection(className)}
          >
            {className}
          </button>
        ))}
      </div>

      {continueEnabled && (
        <button className="continue-button">
          Continue
        </button>
      )}

    </div>
  );
};

export default ChooseRace;
