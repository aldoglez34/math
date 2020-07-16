import React, { useState } from "react";
import { Modal, Button, Image, Table } from "react-bootstrap";

const Leaderboards = React.memo(() => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="link"
        onClick={handleShow}
        style={{ fontSize: "14px" }}
        className="p-0"
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
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>45</td>
                <td>aldoglez34</td>
              </tr>
              <tr>
                <td>2</td>
                <td>30</td>
                <td>guest</td>
              </tr>
              <tr>
                <td>3</td>
                <td>25</td>
                <td>asds</td>
              </tr>
              <tr>
                <td>4</td>
                <td>20</td>
                <td>sdsds</td>
              </tr>
              <tr>
                <td>5</td>
                <td>10</td>
                <td>jjkl</td>
              </tr>
              <tr>
                <td>6</td>
                <td>9</td>
                <td>uiu</td>
              </tr>
              <tr>
                <td>7</td>
                <td>8</td>
                <td>pp</td>
              </tr>
              <tr>
                <td>8</td>
                <td>5</td>
                <td>snmdmc</td>
              </tr>
              <tr>
                <td>9</td>
                <td>5</td>
                <td>jjkl</td>
              </tr>
              <tr>
                <td>10</td>
                <td>2</td>
                <td>mmmml</td>
              </tr>
            </tbody>
          </Table>
          <div className="text-center mt-2 mb-2">
            <Button variant="primary" onClick={handleClose}>
              Salir
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
});

export default Leaderboards;
