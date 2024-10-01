import React from "react";
import Button from "react-bootstrap/Button";
import { PencilSquare, Trash3 } from "react-bootstrap-icons";
import { handleCurrentStudents } from "../../../utils/crudMethod";

function BodyTable(props) {
  const { data, onClickModalDelete, onClickModalUpdate, dispatch } = props;
  return (
    <tbody>
      {data.map((value) => (
        <tr key={value.id}>
          <td>{value.registrationNumber}</td>
          <td>
            {value.firstName} {value.lastName}
          </td>
          <td>
            Le {value.dateOfBirth} à {value.placeOfBirth}
          </td>
          <td>{value.promotion}</td>
          <td>
            <Button
              variant="primary"
              className="mx-2"
              onClick={() =>
                dispatch(handleCurrentStudents(value, onClickModalUpdate))
              }
            >
              <PencilSquare /> Modifier
            </Button>
            <Button
              variant="danger"
              className="mx-2"
              onClick={() =>
                dispatch(handleCurrentStudents(value, onClickModalDelete))
              }
            >
              <Trash3 /> Supprimer
            </Button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default BodyTable;
