import React from "react";
import image1 from "../images/highstudent.png";
import image2 from "../images/highgraduate.png";
import image3 from "../images/collegestudent.png";
import image4 from "../images/collegegraduate.png";
import { Container, Row, Col, Card , OverlayTrigger} from "react-bootstrap";
import { Link } from "react-router-dom";

// import { pages } from "../App";

// export class AddItemPage extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Add item</h1>
//       </div>
//     );
//   }
// }

export const CharacterPage = () => {
  const style = {
    background: "linear-gradient(200deg, #173753, #1B4353, #2892D7)",
    width: "100%",
    height: "100vh",
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
    width: "50%",
    height: "70px",
    fontFamily: "Montserrat Subrayada",
    borderRadius: "10px",
  };
// background: "linear-gradient(120deg, #2892D7, #173753)";

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
    borderRadius: "80px",
    alignItems: "center",
  };
// #2892D7
  const toolTip_style = {
    background: "rgba(64,64,64, 0.5)",
    color: "white",
    textAlign: "center",
    width: "200px",
    paddingTop: "20px",
    paddingBottom: "20px",
    paddingLeft: "20px",
    paddingRight: "20px",
    borderRadius: "20px",
  };
  // background: "linear-gradient(#2892D7, #173753)";

  const renderTooltip = (message) => <tooltip id="tooltip" style = {toolTip_style}>{message}</tooltip>;

  return (
    <body style={style}>
      <Container>
        <Row style={header1}>
          <div>
            <h1 style={h1Style}>Choose Your Character</h1>
          </div>
        </Row>
        <div>
          <Row
            fluid
            className="justify-content-md-center"
            style={containerStyle}
          >
            <Col xs={3}>
              <div id="tooltip">
                <div class="cards">
                  <Link to="/SorryPage">
                    <OverlayTrigger
                      placement="bottom"
                      delay={{ show: 100, hide: 300 }}
                      backgroundColor="blue"
                      overlay={renderTooltip(
                        "Your starting point will be within high school. You will navigate the simulation as a high school student."
                      )}
                    >
                      <Card style={cardStyle}>
                        <Card.Img variant="top" src={image1} />
                        <Card.Body>
                          <Card.Title>High School Student</Card.Title>
                        </Card.Body>
                      </Card>
                    </OverlayTrigger>
                  </Link>
                </div>
              </div>
            </Col>

            <Col xs={3}>
              <div class="cards">
                <Link to="/SimulationPage">
                  <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip(
                      "Your starting point will be post high school graduation. You will navigate the simulation as a high school graduate."
                    )}
                  >
                    <Card style={cardStyle}>
                      <Card.Img variant="top" src={image2} />
                      <Card.Body>
                        <Card.Title>High School Graduate</Card.Title>
                      </Card.Body>
                    </Card>
                  </OverlayTrigger>
                </Link>
              </div>
            </Col>

            <Col xs={3}>
              <div class="cards">
                <Link to="/SorryPage">
                  <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip(
                      "Your starting point will be within college. You will navigate the simulation as a college student."
                    )}
                  >
                    <Card style={cardStyle}>
                      <Card.Img variant="top" src={image3} />
                      <Card.Body>
                        <Card.Title>College Student</Card.Title>
                      </Card.Body>
                    </Card>
                  </OverlayTrigger>
                </Link>
              </div>
            </Col>

            <Col xs={3}>
              <div class="cards">
                <Link to="/SorryPage">
                  <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip(
                      "Your starting point will be post college graduation. You will navigate the simulation as a college graduate."
                    )}
                  >
                    <Card style={cardStyle}>
                      <Card.Img variant="top" src={image4} thumbnail />
                      <Card.Body>
                        <Card.Title>College Graduate</Card.Title>
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

export default CharacterPage;
