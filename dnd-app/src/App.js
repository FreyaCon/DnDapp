import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChooseRace from "./pages/ChooseRace";
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/choose-race" element={<ChooseRace/>} />
      </Routes>
    </Router>
  );
}

export default App;
