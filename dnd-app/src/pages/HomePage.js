// HomePage.js
import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

const HomePage = () => {
  return (
    <div className="container">
      <h1>Welcome to the D&D Character Creation App</h1>
      <p>Create your epic character and embark on adventures!</p>
      <Link to="/choose-race" className="start-button">
        Start
      </Link>
    </div>
  );
};

export default HomePage;