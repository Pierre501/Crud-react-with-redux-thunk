import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StudentsTableContainer from "./components/container/StudentsTableContainer";
import AddStudentsButtonContainer from "./components/container/AddStudentsButtonContainer";

function App() {
  return (
    <Container fluid>
      <Row style={{ marginTop: "60px" }}>
        <h3 className="text-center text-decoration-underline">
          Liste des étudiants
        </h3>
        <AddStudentsButtonContainer />
        <div style={{ marginTop: "20px" }}>
          <StudentsTableContainer />
        </div>
      </Row>
      <Row className="mt-5">
        <Col>
          <p className="text-center">Copyright by Manuel &copy; 2024</p>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
