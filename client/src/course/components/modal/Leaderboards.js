import React, { useState } from "react";
import { Modal, Button, Image, Table } from "react-bootstrap";
import PropTypes from "prop-types";
import moment from "moment";
import "moment/locale/es";

const Leaderboards = React.memo(({ top10 }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const formattedDate = (date) => moment(date).format("LL");

  return (
    <>
      <Button
        variant="link"
        onClick={handleShow}
        style={{ fontSize: "14px" }}
        className="p-0 text-danger"
      >
        <i className="fas fa-trophy mr-2" />
        Leaderboards
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <div className="text-center">
            <Image
              src="/images/trophy.png"
              lenght="75"
              width="75"
              className="mb-2 mt-3"
            />
            <h2>Leaderboards</h2>
          </div>
          {/* top 10 */}
          {top10.length ? (
            <Table size="sm" className="mt-3">
              <thead>
                <tr>
                  <th className="py-2 text-center bg-light border-top-0">#</th>
                  <th className="py-2 text-center bg-light border-top-0">
                    Puntos
                  </th>
                  <th className="py-2 text-center bg-light border-top-0">
                    Usuario
                  </th>
                  <th className="py-2 text-center bg-light border-top-0">
                    Fecha
                  </th>
                </tr>
              </thead>
              <tbody>
                {top10.map((t, idx) => (
                  <tr key={t._id}>
                    <td className="text-center">{idx + 1}</td>
                    <td className="text-center">{t.score}</td>
                    <td className="text-center">{t.username}</td>
                    <td className="text-right">{formattedDate(t.date)}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <div className="my-4 text-center">
              <em className="text-muted">No hay scores para mostrar.</em>
            </div>
          )}

          <div className="text-center mt-4 mb-2">
            <Button
              variant="danger"
              className="shadow-sm"
              onClick={handleClose}
            >
              Aceptar
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
});

Leaderboards.propTypes = {
  top10: PropTypes.array.isRequired,
};

export default Leaderboards;
