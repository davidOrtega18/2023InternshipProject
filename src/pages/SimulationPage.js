import React, { useState } from "react";
import {
  Button,
  Row,
  Col,
  Card,
  Navbar,
  NavDropdown,
  Nav,
  Container,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, Link } from "react-router-dom";
import { useMyContext } from "./MyContext";
// import DecisionTree from "./DecisionTree";
import { scenarioMap } from "./Constant";

export const SimulationPage = () => {
  const {name, counter, setCounter } = useMyContext();

  const [style, setStyle] = useState(scenarioMap[0].style);
  // const [text, setText] = useState(scenarioMap[0].text);
  const [showContinue, setShowContinue] = useState(scenarioMap[0].showContinue);
  const [showOption1, setShowOption1] = useState(scenarioMap[0].option1);
  const [showOption2, setShowOption2] = useState(scenarioMap[0].option2);
  const [textBox, setTextBox] = useState(scenarioMap[0].textBox);
  const [showTextBox, setShowTextBox] = useState(scenarioMap[0].showTextBox);

  const scenarioStrings = [
    `Hello ${name}, you've recently graduated high school and wanted to start your military recruitment journey.`,
    `But you don’t really know where to start... so you reach out to a recruiter for insights.`,
    `A recruiter talks to you “Welcome to the Navy Recruiting Station, ${name}! Would you like to learn more about the opportunities in the Navy?`,
    `The navy offers a wide array of jobs, with many additional training and education opportunities fully paid for by the U.S. Navy. `,
    `However, some positions offer sign-in bonus, some don’t.`,
    `What more would you like to know about the Navy?`,
    `Absolutely! You can choose anything from a cook to satellite technician. However, some jobs will have more openings than another, so it is best to lock in the job you want as soon as you can! `,
    `For sure! The navy maintains records of the current number of individuals under contract for specific positions, so I can only assist others with such contracts when there is an available opening.`,
    `Well, let me tell you about the amazing benefits you'll get in the U.S. Navy. With the G.I. Bill, we'll help you pay for college, and you won't have to worry about interest on a VA loan for buying your own home later on.`,
    `Not only that, but you'll also have the opportunity to travel all around the world and get paid while you do it! It's an incredible experience and a chance to build a successful future. `,
    `During your time in the Navy, you have the fantastic opportunity to enroll in community college classes through the G.I. Bill and access additional tuition assistance programs. This means you can work towards earning your degree while still serving and preparing for a bright future beyond your military career. We're here to support your educational goals and help you make the most of your time in the Navy. ${name} `,
    `The process is straightforward and streamlined! You'll start by heading to MEPS for your medical evaluation, followed by taking the ASVAB test.`,
    `Once that's completed, you're good to go! It's a simple and sweet journey to join the U.S. Navy—hooyah! I'll be right here to guide you every step of the way and make the process smooth and exciting. Let's get you on the path to an incredible Navy career!`,
    "[You have entered Military Entrance Processing Station; medical and physical evaluation went extremely well.]",
    `Your ASVAB score qualified you for the following jobs:`,
    `There isn’t any opening right now for Corpsman. Would you like to consider a different job rate for now? You can transfer later down the line, so it wouldn’t really matter right now. ${name}`,
    "Now you know more about the prerecruitment process in the US Military and what to watch out! You are now prepared to talk to a recruiter! Here you can see your decisions.",
  ];



  const cardStyle = {
    backgroundColor: "rgba(23, 55, 83, 0.7)", 
    color: "white", 
    position: "absolute",
    bottom: "0", 
    width: "100%",
    height: "fit-content",
    padding: "20px", 
    left: 0, 
    right: 0, 
  };

  const textCardStyle = {
    backgroundColor: "rgba(23, 55, 83, 0.7)",
    color: "white",
    position: "absolute",
    right: "10px", 
    top: "20px", 
    width: "30%",
    height: "fit-content",
    padding: "20px",
  };
  const buttonContainerStyle = {
    position: "absolute",
    color: "white",
    fontSize: "15px",
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    padding: "20px",
  };

  const continueContainerStyle = {
    position: "absolute",
    top: "55%",
    left: "89%",
    color: "white",
    fontSize: "15px",
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    padding: "20px",
  };

  const pTagStyle = {
    textAlign: "center",
    marginBottom: "60px",
    fontSize: "20px",
    fontFamily: "Roboto, sans-serif",
  };

  const HamburgerIcon = <FontAwesomeIcon icon={faBars} />;

  const link = {
    textDecoration: "none !important",
  };

  const handleContinue = (event) => {
    // Handle the user's choice when clicking "Ask Him More"
    // setUserChoice("continue");
    // updateDecisionMade(event)
    handleCounter();
  };
  // const updateDecisionMade = (event) => {
  // console.log(event.target.innerText)
  // let existingDecisions = decisionMade;
  // existingDecisions.push(event.target.innerText);
  // setDecisionMade(existingDecisions);
  // }
 const navigate = useNavigate();
  const handleCounter = () => {
    // Handle the user's choice when clicking "Ask Him More"
    const newCounter = counter + 1;
    // Access the
    

    // call a function to update style variable and the questions. this function accepts counter as parameter

    if (newCounter < Object.keys(scenarioMap).length) {
      const currentScenario = scenarioMap[newCounter];
      setStyle(currentScenario.style);
      // setText(currentScenario.text);
      setTextBox(currentScenario.textBox);
      setShowContinue(currentScenario.showContinue);
      setShowTextBox(currentScenario.showTextBox);
      setShowOption1(currentScenario.option1);
      setShowOption2(currentScenario.option2);
      setTextBox(currentScenario.textBox);
      setShowTextBox(currentScenario.showTextBox);
      setCounter(newCounter);
    } else {
      navigate("/EndingPage")
    }
  };

  return (
    <div style={style}>
      <div>
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav>
                <NavDropdown title={HamburgerIcon}>
                  <Link path to="/" style={{ link }}>
                    <NavDropdown.Item href="#action/3.1">
                      🏠 Landing Page
                    </NavDropdown.Item>
                  </Link>
                  <Link path to="/DecisionsHistoryPage" style={{ link }}>
                    <NavDropdown.Item href="#action/3.2">
                      📖 Decision History
                    </NavDropdown.Item>
                  </Link>
                  <Link path to="/BranchSelectionPage" style={{ link }}>
                    <NavDropdown.Item href="#action/3.3">
                      ↺ Reset the game
                    </NavDropdown.Item>
                  </Link>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <div>
        {showTextBox ? (
          <Card style={textCardStyle}>
            <p style={{ fontSize: "12px" }}> {textBox}</p>
          </Card>
        ) : (
          <p>{null}</p>
        )}
      </div>

      <Card style={cardStyle}>
        <Card.Body>
          {showContinue ? (
            <Row
              fluid
              style={{ margin: "20px 0", backgroundPosition: "center" }}
            >
              <Col className="d-flex justify-content-center">
                <p style={pTagStyle}>
                  {/* Counter: {counter} */}
                  {scenarioStrings[counter]}
                </p>

                <Button
                  variant="outline-primary"
                  style={continueContainerStyle}
                  onClick={handleContinue}
                >
                  Continue
                </Button>
              </Col>
            </Row>
          ) : (
            <Row style={{ margin: "25px 0" }}>
              <p style={pTagStyle}>
                {/* Counter: {counter} */}
                {scenarioStrings[counter]}
              </p>
              <Col style={{ margin: "35px 0" }}>
                <Col classNamae="d-flex justify-content-center">
                  <Col className="d-flex justify-content-center">
                    {" "}
                    <Button
                      variant="outline-primary"
                      style={buttonContainerStyle}
                      onClick={handleContinue}
                    >
                      {showOption1}
                    </Button>
                  </Col>
                </Col>
              </Col>
              <Col style={{ margin: "35px 0" }}>
                <Col className="d-flex justify-content-center">
                  <Button
                    variant="outline-primary"
                    style={buttonContainerStyle}
                    onClick={handleContinue}
                  >
                    {showOption2}
                  </Button>
                </Col>
              </Col>
            </Row>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SimulationPage;
