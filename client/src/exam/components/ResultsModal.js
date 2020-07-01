import React from "react";
import { Modal, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const ResultsModal = React.memo(({ showResultsModal, courseId, score }) => {
  return (
    <>
      <Modal
        show={showResultsModal}
        centered
        onHide={() => (window.location.href = "/course/" + courseId)}
      >
        <Modal.Body className="bg-light rounded">
          <h1>Resultados</h1>
          <hr />
          <div className="my-4">
            <h2 className="mb-3">
              <i className="fas fa-trophy mr-2" />
              <span>{score}</span>
            </h2>
          </div>
          <Button variant="primary" href={"/course/" + courseId}>
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
