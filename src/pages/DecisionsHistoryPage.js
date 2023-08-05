import React from "react";
import { useMyContext } from "./MyContext";
import {scenarioMap }from "./Constant"
import { Link } from "react-router-dom";
import {Button} from "react-bootstrap";


const style = {
  background: "linear-gradient(200deg, #173753, #1B4353, #2892D7)",
  width: "100%",
  height: "100vh",
};

const h1Style = {
  paddingTop: "20px",
  paddingBottom: "20px",
  paddingLeft: "20px",
  textAlign: "center",
  color: "#ffffff",
  width: "50%",
  height: "70px",
  fontFamily: "Montserrat Subrayada",
  borderRadius: "10px",
};

export const DecisionsHistoryPage = () => {
 
  const { counter } = useMyContext();
  return (
    <body style={scenarioMap[counter].treeStyle}>
      <div>
        <h1 style={h1Style}>Decision Tree Map</h1>
        <Link to="/SimulationPage" style={{ textDecoration: "none" }}>
          {/* You can display a button or any UI element for navigation */}
          <Button style= {{
            margin: "0 13%",
    color: "white",
    fontSize: "15px",
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    padding: "10px",
  
          }}>Go Back to Simulation</Button>
        </Link>
      </div>
    </body>
  );
};

export default DecisionsHistoryPage;
