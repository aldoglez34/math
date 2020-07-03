import React from "react";
import { ListGroup, Modal, Button, Image, Alert } from "react-bootstrap";
import PropTypes from "prop-types";

const ResultsModal = React.memo(
  ({ showResultsModal, courseId, score, correct, mistakes }) => {
    return (
      <>
        <Modal
          show={showResultsModal}
          onHide={() => (window.location.href = "/course/" + courseId)}
        >
          <Modal.Body size="lg" className="bg-light rounded">
            <div className="d-flex flex-row">
              <h3>Resultado</h3>
              <Button
                href={"/course/" + courseId}
                variant="link"
                className="text-dark ml-auto p-0"
                style={{ fontSize: "20px" }}
              >
                <i className="fas fa-times" />
              </Button>
            </div>
            <ListGroup className="mt-2 shadow-sm">
              <ListGroup.Item className="d-flex align-items-center">
                <h5 className="mb-0" style={{ color: "dimgray" }}>
                  Puntos
                </h5>
                <h3 className="text-success ml-auto mb-0">{score}</h3>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex align-items-center">
                <h5 className="mb-0" style={{ color: "dimgray" }}>
                  Aciertos
                </h5>
                <h3 className="text-success ml-auto mb-0">{correct}</h3>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex align-items-center">
                <h5 className="mb-0" style={{ color: "dimgray" }}>
                  Errores
                </h5>
                <h3 className="text-success ml-auto mb-0">{mistakes}</h3>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex align-items-center">
                <h5 className="mb-0" style={{ color: "dimgray" }}>
                  Tiempo
                </h5>
                <h3 className="text-success ml-auto mb-0">5:30</h3>
              </ListGroup.Item>
            </ListGroup>
            {/* correct */}
            <>
              <h5 className="text-success text-center mt-4 pt-2">
                ¡Buen trabajo, aprobaste este examen!
              </h5>
              <h5 className="text-success text-center mt-2">
                Recibiste esta medalla:
              </h5>
              <div className="mt-4 pt-2 text-center">
                <Image
                  src="https://image.flaticon.com/icons/svg/3068/3068332.svg"
                  width="100"
                  height="100"
                />
              </div>
              <div className="mt-3 pt-2">
                <Alert
                  variant="success"
                  className="d-flex align-items-center shadow-sm"
                >
                  <i
                    className="fas fa-exclamation-circle mr-2"
                    style={{ fontSize: "17px" }}
                  />
                  Un nuevo examen ha sido desbloqueado
                </Alert>
              </div>
              <Button
                variant="secondary"
                className="mt-3"
                href={"/course/" + courseId}
              >
                Cerrar
              </Button>
            </>
            {/* correct */}
            {/* <>
              <h5 className="text-danger text-center mt-4 pt-3">
                Resultado desfavorable
              </h5>
              <h5 className="text-danger text-center mt-2">
                Haz un repaso y vuelve a intentarlo
              </h5>
              <div className="mt-4 mb-4 text-center">
                <Image
                  src="https://image.flaticon.com/icons/svg/2274/2274473.svg"
                  width="100"
                  height="100"
                />
              </div>
              <Button
                variant="secondary"
                className="mt-4"
                href={"/course/" + courseId}
              >
                Cerrar
              </Button>
              <Button
                variant="primary"
                className="mt-4 ml-2"
                href={"/course/" + courseId}
              >
                Reintentar
              </Button>
            </> */}
          </Modal.Body>
        </Modal>
      </>
    );
  }
);

ResultsModal.propTypes = {
  courseId: PropTypes.string.isRequired,
  showResultsModal: PropTypes.bool.isRequired,
  score: PropTypes.number.isRequired,
  correct: PropTypes.number.isRequired,
  mistakes: PropTypes.number.isRequired,
};

export default ResultsModal;
