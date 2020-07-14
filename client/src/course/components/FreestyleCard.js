import React from "react";
import { Table, Card, Button, Accordion } from "react-bootstrap";
import PropTypes from "prop-types";
import LastVisited from "./LastVisited";

const FreestyleCard = React.memo(({ freestyle }) => {
  return (
    <Card>
      <Card.Header style={{ backgroundColor: "#f4fbf8" }}>
        <Accordion.Toggle as={Button} variant="link" eventKey="freestyle">
          <i className="fas fa-chevron-down mr-1" />
          <strong>Modo rápido</strong>
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="freestyle">
        <Card.Body>
          <h2 className="mb-3">Modo rápido</h2>
          {/* description */}
          <p style={{ fontSize: "14px" }} className="mb-2 mt-2">
            Integer eleifend nibh non sem tincidunt, at ultricies purus
            vestibulum. Vivamus sed lobortis ligula, ut lacinia elit.
          </p>
          {/* last visited */}
          <LastVisited date={Date.now()} />
          <br />
          {/* duration */}
          <span style={{ fontSize: "14px", cursor: "help" }} title="Duración">
            <i className="fas fa-stopwatch mr-2" />
            {10 + " mins."}
          </span>
          <br />
          {/* highest score */}
          <span
            style={{ fontSize: "14px", cursor: "help" }}
            title="Máxima puntuación"
          >
            <i className="fas fa-hand-point-up mr-2" />
            {45 + " pts."}
          </span>
          <h2 className="my-3">Top 5</h2>
          {/* top 10 */}
          <Table size="sm" className="rounded" style={{ fontSize: "14px" }}>
            <thead>
              <tr>
                <th>#</th>
                <th>Puntos</th>
                <th>Usuario</th>
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
            </tbody>
          </Table>
          <br />
          {/* button */}
          <Button
            variant="primary"
            className="shadow-sm"
            // disabled={freestyle.isFreestyleAvailable ? false : true}
          >
            <i className="fas fa-bolt mx-3" />
          </Button>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
});

FreestyleCard.propTypes = {
  freestyle: PropTypes.object.isRequired,
};

export default FreestyleCard;
