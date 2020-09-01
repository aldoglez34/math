import React, { useState } from "react";
import { Modal, Button, Table } from "react-bootstrap";
import PropTypes from "prop-types";
import moment from "moment";
import "moment/locale/es";

const History = React.memo(({ attempts }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        size="sm"
        variant="link"
        className="p-0 ml-2"
        onClick={handleShow}
      >
        <strong>Ver historial</strong>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body className="bg-light">
          <div className="d-flex">
            <h3 className="mb-0 text-dark">Historial de exámenes</h3>
            <Button
              variant="link"
              className="text-dark ml-auto"
              onClick={handleClose}
            >
              <i className="fas fa-times" />
            </Button>
          </div>
          <br />
          {attempts.length ? (
            <Table striped bordered size="sm">
              <thead>
                <tr>
                  <th className="py-3 bg-light text-center">Fecha</th>
                  <th className="py-3 bg-light text-center">Examen</th>
                  <th className="py-3 bg-light text-center">Calificación</th>
                </tr>
              </thead>
              <tbody>
                {attempts.map((a) => {
                  return (
                    <tr key={a._id}>
                      <td>{moment(a.date).format("L")}</td>
                      <td>{a.exam}</td>
                      <td className="text-center">{a.grade}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          ) : (
            <div className="py-4 text-center">
              <em>Este alumno no ha presentado ningún examen</em>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
});

History.propTypes = {
  attempts: PropTypes.array.isRequired,
};

export default History;
