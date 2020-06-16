import React from "react";
import { Container, Button } from "react-bootstrap";
import "./studentnav.scss";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const StudentNav = React.memo(({ title, hasExitBttn = false }) => {
  const student = useSelector((state) => state.student);

  return (
    <Container fluid className="py-2" id="studentNav">
      <Container className="px-0 mt-3">
        <h2 className="text-warning mb-0" style={{ fontWeight: 600 }}>
          {student ? student.email.split("@", 1)[0] : null}
        </h2>
      </Container>
      <Container className="d-flex flex-row pt-2 pb-4 px-0">
        <h5 className="mb-0 text-light" id="studentNavTitle">
          <i className="fas fa-chalkboard-teacher mr-1" />
          {title}
        </h5>
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
