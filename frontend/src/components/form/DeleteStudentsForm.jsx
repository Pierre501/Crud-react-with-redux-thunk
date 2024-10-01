import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { deleteStudents } from "../../utils/crudMethod";

function DeleteStudentsForm(props) {
  const { subTitle, onClose, student, dispatch } = props;
  return (
    <>
      <Row>
        <Col>
          <h4 className="text-center mb-3">Suppression info d'un étudiant</h4>
          <p className="my-4 fs-6">{subTitle}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            variant="primary"
            type="button"
            className="w-100"
            onClick={() => {
              dispatch(deleteStudents(student.id));
              onClose();
            }}
          >
            {" "}
            Oui
          </Button>
        </Col>
        <Col>
          <Button
            variant="secondary"
            type="button"
            className="w-100"
            onClick={onClose}
          >
            {" "}
            Non
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default DeleteStudentsForm;
