import React from "react";

import { Container, Row, Col, Image } from "react-bootstrap";
import images from "../images/newnewland.png";
import mss from "../images/IMG-0257.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useMyContext } from "./MyContext"; 


function Sbu() {
  return (
    <div
      style={{
        position: "absolute",
        fontFamily: "Montserrat Subrayada",
        top: "57%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
      }}
    >
      <>
        <Button as="input" type="submit" value="Submit" />
      </>
    </div>
  );
}



function UN() {
  const { name, setName } = useMyContext(); // Access the name and setName from the context

  const handleNameChange = (event) => {
    setName(event.target.value); // Update the name in the context when the input changes
  };

  return (
    <div
      style={{
        position: "absolute",
        fontFamily: "Montserrat Subrayada",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "white",
        fontSize: "15px",
        textAlign: "center",
        fontWeight: "bold",

      }}
    >
      <>
        <Form.Label htmlFor="userName">Name</Form.Label>
        <Form.Control type="Name" id="userName" aria-describedby="det" value={name} // Bind the value to the name from the context
          onChange={handleNameChange} // Call the handleNameChange when the input changes
          />
        <Form.Text id="det" muted></Form.Text>
      </>
    </div>
  );
}


export const LandingPage = () => {
  const landingBackground = {
    backgroundImage: `url(${images}`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
  };


  return (
    <div>
      <Container fluid style={landingBackground}>
        <Row>
          <Col>
            <div
              style={{
                position: "absolute",
                fontFamily: "Montserrat Subrayada",
                top: "20%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                fontSize: "60px",
                fontWeight: "bold",
                textAlign: "center",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                padding: "10px 20px",
              }}
            >
              Military Service Simulation
            </div>
          </Col>
        </Row>

        <Row fluid style={{ mss, width: "5vw", padding: "15px 5px" }}>
          <Col xs={6} md={4}>
            <Image src={mss} rounded style={{ width: "5vw" }} />
          </Col>
        </Row>

        <Row>

          <Col>
              <UN />
          </Col>
          <Col>
            
              <Link path to="/BranchSelectionPage">
                <Sbu />
              </Link>
         
          </Col>

          <div style={{ color: "white", padding: "600px 60px 90px 80px" }}>
            <h1>About</h1>
            <p>
              {" "}
              Simulate a path throughout the military career to broaden your
              perspectives about <br></br>
              the military and the careers they offer across different phases
              including the recruitment <br></br>
              process, employment, and after employment. Your decisions will
              affect the outcome. <br></br>
              Improving their clarity about their possible path in the US
              Military.
            </p>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
