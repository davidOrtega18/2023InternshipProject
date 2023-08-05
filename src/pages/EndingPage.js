import React from "react";
import {Row, Button, Col, Card, CardBody, CardImage, Btn} from "react-bootstrap";
import {Link}from "react-router-dom";
export const EndingPage = () => {

    const h1Style = {
      paddingTop: "40px",
      paddingBottom: "20px",
      paddingLeft: "20px",
      marginBottom: "30px",
      textAlign: "center",
      color: "#ffffff",
      width: "50%",
      height: "70px",
      fontFamily: "Montserrat Subrayada",
      borderRadius: "10px",
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

 const person = {
   1: {
     name: "John Doe",
     pictureUrl: "https://th.bing.com/th/id/OIG.pY.zqFyW6c9Fwp5tpc2A?pid=ImgGn",
     contactInfo: "Email: john@example.com\nPhone: (123) 456-7890",
   },
   2: {
     name: "Diana",
     pictureUrl: "https://th.bing.com/th/id/OIG.bg4250E5a2e1y0uniAJ4?pid=ImgGn",
     contactInfo: "Email: diana@example.com\nPhone: (456) 789-1230",
   },
   3: {
     name: "Jane Smith",
     pictureUrl: "https://th.bing.com/th/id/OIG.bViXKCfUCW1uVgVIrOt8?pid=ImgGn",
     contactInfo: "Email: jane@example.com\nPhone: (987) 654-3210",
   },
   4: {
     name: "Alice Johnson",
     pictureUrl: "https://th.bing.com/th/id/OIG.CkhV9rwzL6qYe1F56g7S?pid=ImgGn",
     contactInfo: "Email: alice@example.com\nPhone: (555) 123-4567",
   },
   5: {
     name: "Michael Brown",
     pictureUrl: "https://th.bing.com/th/id/OIG.Wp0HlnUegIxWDkKIj_.H?pid=ImgGn",
     contactInfo: "Email: michael@example.com\nPhone: (222) 333-4444",
   },
   6: {
     name: "Eme Davis",
     pictureUrl: "https://th.bing.com/th/id/OIG.MPZrtI8M11CkVVXsU.pv?pid=ImgGn",
     contactInfo: "Email: emily@example.com\nPhone: (999) 888-7777",
   },
 };

 const style = {
   background: "linear-gradient(200deg, #173753, #1B4353, #2892D7)",
   width: "100%",
   height: "fit-content",
   minHeight: "100vh"
,   
 };

 const cardStyle = {
   backgroundColor: "rgba(0, 0, 0, 0.4)",
   width: "15rem",
   color: "white",
   borderRadius: "30px",
 }

 const picStyle={
    borderRadius: "100px",
 }

return (
  <div style={style}>
    <h1 style={h1Style}>Enlisted Community Members</h1>
    <Row
      className="d-flex justify-content-around"
      style={{ paddingTop: "30px" }}
    >
      <Card style={cardStyle}>
        <Card.Img
          variant="top"
          src={person[1].pictureUrl}
          alt={`Profile of ${person[1].name}`}
          style={picStyle}
        />
        <Card.Body>
          <Card.Title>{person[1].name}</Card.Title>
          <Card.Text>{person[1].contactInfo}</Card.Text>
        </Card.Body>
      </Card>
      <Card style={cardStyle}>
        <Card.Img
          variant="top"
          src={person[2].pictureUrl}
          alt={`Profile of ${person[2].name}`}
          style={picStyle}
        />
        <Card.Body>
          <Card.Title>{person[2].name}</Card.Title>
          <Card.Text>{person[2].contactInfo}</Card.Text>
        </Card.Body>
      </Card>
      <Card style={cardStyle}>
        <Card.Img
          variant="top"
          src={person[3].pictureUrl}
          alt={`Profile of ${person[3].name}`}
          style={picStyle}
        />
        <Card.Body>
          <Card.Title>{person[3].name}</Card.Title>
          <Card.Text>{person[3].contactInfo}</Card.Text>
        </Card.Body>
      </Card>
    </Row>

    <Row
      className="d-flex justify-content-around"
      style={{ paddingTop: "30px" }}
    >
      <Card style={cardStyle}>
        <Card.Img
          variant="top"
          src={person[4].pictureUrl}
          alt={`Profile of ${person[4].name}`}
          style={picStyle}
        />
        <Card.Body>
          <Card.Title>{person[4].name}</Card.Title>
          <Card.Text>{person[4].contactInfo}</Card.Text>
        </Card.Body>
      </Card>
      <Card style={cardStyle}>
        <Card.Img
          variant="top"
          src={person[5].pictureUrl}
          alt={`Profile of ${person[5].name}`}
          style={picStyle}
        />
        <Card.Body>
          <Card.Title>{person[5].name}</Card.Title>
          <Card.Text>{person[5].contactInfo}</Card.Text>
        </Card.Body>
      </Card>
      <Card style={cardStyle}>
        <Card.Img
          variant="top"
          src={person[6].pictureUrl}
          alt={`Profile of ${person[6].name}`}
          style={picStyle}
        />
        <Card.Body>
          <Card.Title>{person[6].name}</Card.Title>
          <Card.Text>{person[6].contactInfo}</Card.Text>
        </Card.Body>
      </Card>
    </Row>
    <Row style={{ paddingTop: "30px" }}>
      <Col className="d-flex justify-content-center">
        <Link path to="/SorryPage">
          <Button style={continueContainerStyle}>Continue Simulation</Button>
        </Link>
      </Col>
      <Col className="d-flex justify-content-center">
        <Link path to="/">
          <Button style={continueContainerStyle}>Exit Simulation</Button>
        </Link>
      </Col>
    </Row>
  </div>
);


}

export default EndingPage;