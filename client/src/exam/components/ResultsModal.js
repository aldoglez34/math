import React from "react";
import { ListGroup, Modal, Button, Image, Alert } from "react-bootstrap";
import PropTypes from "prop-types";

const ResultsModal = React.memo(({ showResultsModal, courseId, score }) => {
  return (
    <>
      <Modal
        show={showResultsModal}
        centered
        onHide={() => (window.location.href = "/course/" + courseId)}
      >
        <Modal.Body size="lg" className="bg-light rounded">
          <div className="d-flex flex-row">
            <h1>Aprobado</h1>
            <Button
              href={"/course/" + courseId}
              variant="link"
              className="text-dark ml-auto"
              style={{ fontSize: "25px" }}
            >
              <i className="fas fa-times" />
            </Button>
          </div>
          <Alert variant="success" className="mt-3">
            Un nuevo examen ha sido desbloqueado
          </Alert>
          <ListGroup className="mt-4">
            <ListGroup.Item className="d-flex">
              <h3 className="mb-0">Puntos</h3>
              <h2 className="text-danger ml-auto mb-0">{score}</h2>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex">
              <h3 className="mb-0">Aciertos</h3>
              <h2 className="text-danger ml-auto mb-0">{score}</h2>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex">
              <h3 className="mb-0">Errores</h3>
              <h2 className="text-danger ml-auto mb-0">{score}</h2>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex">
              <h3 className="mb-0">Tiempo</h3>
              <h2 className="text-danger ml-auto mb-0">{score}</h2>
            </ListGroup.Item>
          </ListGroup>
          <div className="mt-4 text-center">
            <Image
              src="https://image.flaticon.com/icons/svg/3069/3069070.svg"
              width="150"
              height="150"
            />
          </div>
          <Button
            variant="primary"
            size="lg"
            className="mt-4"
            href={"/course/" + courseId}
          >
            Aceptar
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
});

ResultsModal.propTypes = {
  courseId: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  showResultsModal: PropTypes.bool.isRequired,
};

export default ResultsModal;
