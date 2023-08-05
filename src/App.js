import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import BranchSelectionPage from "./pages/BranchSelectionPage";
import PhasesPage from "./pages/PhasesPage";
import CharacterPage from "./pages/CharacterPage";
import SimulationPage from "./pages/SimulationPage";
import DecisionsHistoryPage from "./pages/DecisionsHistoryPage";
import MyContextProvider from "./pages/MyContext";
import EndingPage from "./pages/EndingPage";
import SorryPage from "./pages/SorryPage"
// import "bootstrap/dist/css/bootstrap.min.css";

export const pages = {
  LandingPage: "LandingPage",
  BranchSelectionPage: "BranchSelectionPage",
  PhasesPage: "PhasesPage",
  CharacterPage: "CharacterPage",
  SimulationPage: "SimulationPage",
  DecisionsHistoryPage: "DecisionsHistoryPage",
  EndingPage: "EndingPage",
  SorryPage: "SorryPage",
};

function App() {
  return (
    <div>
      <MyContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/BranchSelectionPage" element={<BranchSelectionPage />} />
          <Route path="/PhasePage" element={<PhasesPage />} />
          <Route path="/CharacterPage" element={<CharacterPage />} />
          <Route path="/SimulationPage" element={<SimulationPage />} />
          <Route path="/DecisionsHistoryPage" element={<DecisionsHistoryPage />} />
          <Route path="/EndingPage" element ={<EndingPage/>}/>
          <Route path="/SorryPage" element ={<SorryPage/>}/>
        </Routes>
      </Router>
      </MyContextProvider>
    </div>
  );
}

export default App;
