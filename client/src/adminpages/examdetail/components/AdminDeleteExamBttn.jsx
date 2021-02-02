import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { string } from "prop-types";
import TeacherAPI from "../../../utils/TeacherAPI";

export const AdminDeleteExamBttn = React.memo(
  ({ courseId, examId, questionId }) => {
    const handleClick = () => {
      TeacherAPI.t_deleteQuestion({ courseId, examId, questionId })
        .then((res) => {
          console.log(res.data);
          // alert("Pregunta borrada con éxito");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
          alert("Ocurrió un error");
        });
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <Button
          size="sm"
          className="deleteButton"
          onClick={handleShow}
          title="Borrar"
        >
          <i className="fas fa-trash" />
        </Button>

        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>
              <i className="fas fa-exclamation-triangle mr-2" />
              Advertencia
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="py-4 text-center">
            <span className="lead">
              ¿Estás seguro que deseas borrar la pregunta seleccionada?
            </span>
            <div className="d-flex flex-row justify-content-center mt-4">
              <Button variant="danger" onClick={handleClick}>
                Borrar
              </Button>
              <Button variant="link" className="ml-2" onClick={handleClose}>
                Cancelar
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
);

AdminDeleteExamBttn.propTypes = {
  courseId: string.isRequired,
  examId: string.isRequired,
  questionId: string.isRequired,
};
