import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Floppy, XLg } from "react-bootstrap-icons";

function UpdateStudentsForm(props) {
  const { student, onClose, onSubmit } = props;
  return (
    <Form onSubmit={onSubmit}>
      <Row>
        <h4 className="text-center mb-3 text-decoration-underline">
          Formulaire de modification un étudiant
        </h4>
        <Col>
          <Form.Group className="mb-3" controlId="registrationNumber">
            <Form.Label>Matricule</Form.Label>
            <Form.Control
              type="text"
              name="registrationNumber"
              placeholder="Entrer votre matricule"
              defaultValue={student?.registrationNumber}
              required
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="promotion">
            <Form.Label>Promotion</Form.Label>
            <Form.Select
              defaultValue={student?.promotion}
              name="promotion"
              required
            >
              <option value="Promotion 1">Promotion 1</option>
              <option value="Promotion 2">Promotion 2</option>
              <option value="Promotion 3">Promotion 3</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="firstName">
            <Form.Label>Nom</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              placeholder="Entrer votre nom"
              defaultValue={student?.firstName}
              required
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="lastName">
            <Form.Label>Prénom</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              defaultValue={student?.lastName}
              placeholder="Entrer votre prénom"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="dateOfBirth">
            <Form.Label>Date de naissance</Form.Label>
            <Form.Control
              type="date"
              name="dateOfBirth"
              defaultValue={student?.dateOfBirth}
              required
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="placeOfBirth">
            <Form.Label>Lieu de naissance</Form.Label>
            <Form.Control
              type="text"
              name="placeOfBirth"
              placeholder="Entrer votre lieu de naissance"
              defaultValue={student?.placeOfBirth}
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="primary" type="submit" className="w-100">
            <Floppy /> Enregistrer
          </Button>
        </Col>
        <Col>
          <Button
            variant="secondary"
            type="button"
            className="w-100"
            onClick={onClose}
          >
            <XLg /> Annuler
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default UpdateStudentsForm;
