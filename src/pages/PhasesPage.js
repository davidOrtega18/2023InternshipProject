import React from "react";
import leftPic from "../images/duringservicephase.jpg";
import rightPic from "../images/prerephase.jpg";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
// import Tooltip from "react-bootstrap/Tooltip";
import "./chP.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const ChosePhase = () => {
  const style = {
    background: "linear-gradient(200deg, #173753, #1B4353, #2892D7)",
    width: "100%",
    height: "100vh",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

   const header1 = {
     padding: "40px",
     paddingLeft: "0px",
   };

   const h1Style = {
     paddingTop: "20px",
     paddingBottom: "20px",
     paddingLeft: "20px",
     textAlign: "center",
     color: "#ffffff",
     width: "60%",
     height: "70px",
     fontFamily: "Montserrat Subrayada",
     borderRadius: "10px",
   };

  const cardStyle = {
    width: "18rem",
    height: "45vh",
    background: "linear-gradient(120deg, #2892D7, #173753)",
    color: "#ffffff",
    borderRadius: "75px",
    textAlign: "center",
    position: "relative",
    top: 0,
    transition: "top ease 0.5s",
  };

  const containerStyle = {
    display: "flex",
    paddingTop: "100px",
    borderRadius: "10px",
    alignItems: "center",
  };

  const card = {
    borderRadius: "40px 40px 0 0",
  };

   const toolTip_style = {
     background: "rgba(64,64,64,0.5)",
     color: "white",
     textAlign: "center",
     width: "300px",
     paddingTop: "20px",
     paddingBottom: "20px",
     paddingLeft: "20px",
     paddingRight: "20px",
     borderRadius: "20px",
   };




  const renderTooltip = (message) => (
    <tooltip id="tooltip" style={toolTip_style}>
      {message}
    </tooltip>
  );

  return (
    <body style={style}>
      <Container>
        <Row style={header1}>
          <div>
            <h1 style={h1Style}>Choose a Phase</h1>
          </div>
        </Row>
        

        <div>
          <Row className="justify-content-md-center" style={containerStyle}>
            <Col
              xs={6}
              style={{
                display: "grid",
                justifyContent: "center",
              }}
            >
              <div class="cards">
                <Link to="/CharacterPage">
                  <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip(
                      "The user makes choices about their desired academic status and what steps they take in their pre-recruitment process. The user selects their desired academic status (high school student, high school graduate, college student, college graduate)"
                    )}
                  >
                    <Card style={cardStyle}>
                      <Card.Img variant="top" src={leftPic} style={card} />
                      <Card.Body>
                        <Card.Title>Pre-Recruitment</Card.Title>
                      </Card.Body>
                    </Card>
                  </OverlayTrigger>
                </Link>
              </div>
            </Col>

            <Col
              xs={6}
              style={{
                display: "grid",
                justifyContent: "center",
              }}
            >
              <div class="cards">
                <Link to="/SorryPage">
                  <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip(
                      "The user is enlisted in the military and is presented with random situations and 	scenarios where they must make decisions and these decisions can affect their 	outcomes in their career.."
                    )}
                  >
                    <Card style={cardStyle}>
                      <Card.Img variant="top" src={rightPic} style={card} />
                      <Card.Body>
                        <Card.Title>During Service</Card.Title>
                      </Card.Body>
                    </Card>
                  </OverlayTrigger>
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </body>
  );
};

export default ChosePhase;
