import React from "react";
import { Container, Button } from "react-bootstrap";
import "./studentnav.scss";
import PropTypes from "prop-types";

const StudentNav = React.memo(({ title, hasExitBttn = false }) => {
  return (
    <Container fluid className="py-2" id="studentNav">
      <Container className="px-0 mt-3">
        <h3 className="text-warning mb-0" style={{ fontWeight: 600 }}>
          aldoglez34
        </h3>
      </Container>
      <Container className="d-flex flex-row py-3 px-0">
        <h4 className="mb-0 text-light" id="studentNavTitle">
          <i className="fas fa-chalkboard-teacher mr-2" />
          {title}
        </h4>
        {hasExitBttn ? (
          <Button
            className="ml-auto"
            href="/dashboard"
            size="sm"
            variant="danger"
          >
            <i className="fas fa-door-open" id="exitDoor" />
            Salir
          </Button>
        ) : null}
      </Container>
    </Container>
  );
});

StudentNav.propTypes = {
  title: PropTypes.string.isRequired,
  hasExitBttn: PropTypes.bool,
};

export default StudentNav;
