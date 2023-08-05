import React from "react";
import {Row, Button, Col, Card, CardBody, CardImage, Btn} from "react-bootstrap";
import {Link}from "react-router-dom";
export const EndingPage = () => {

    const h1Style = {
      textAlign: "center",
      color: "#ffffff",
      width: "50%",
      height: "70px",
      fontFamily: "Montserrat Subrayada",
      borderRadius: "10px",
      justifyContent: "center",
    };
const continueContainerStyle = {
  
  color: "white",
  fontSize: "15px",
  fontWeight: "bold",
  textAlign: "center",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  padding: "20px",
  margin: "0px",

};

 
 const style = {
   background: "linear-gradient(200deg, #173753, #1B4353, #2892D7)",
   width: "100%",
   height: "fit-content",
   minHeight: "100vh"
,   
 };


return (
  <div style={style}>
    <Row className="d-flex align-items-center" style={{ height: "100vh" }}>
      <Row className="d-flex justify-content-center">
        <h1 style={h1Style}>Sorry, this part is for the future 😃</h1>
      </Row>

      <Row
        style={{ paddingTop: "30px" }}
        className="d-flex justify-content-center"
      >
        <Link style={{ width: "fit-content" }} path to="/">
          <Button style={continueContainerStyle}>Exit Simulation</Button>
        </Link>
      </Row>
    </Row>
  </div>
);


}

export default EndingPage;