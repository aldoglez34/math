import React from "react";
import { Container, Button } from "react-bootstrap";
import "./studentnav.scss";
import { useSelector } from "react-redux";

const StudentNav = React.memo(() => {
  const student = useSelector((state) => state.student);

  const zenMode = useSelector((state) => state.zenMode);

  return (
    <div id="studentNav">
      <Container>
        <div className="d-flex">
          <div className="d-flex flex-column">
            <h2 className="mb-1 text-white">
              {student ? student.email.split("@", 1)[0] : null}
            </h2>
            <span className="text-light">
              <i className="fas fa-user mr-2" />
              {student ? student.name + " " + student.firstSurname : null}
            </span>
          </div>
          {/* for bigger displays */}
          {/* <div className="ml-auto d-none d-md-flex align-items-end">
            <Button
              variant="light"
              size="sm"
              className="shadow-sm"
              href="/dashboard"
              disabled={zenMode ? true : false}
            >
              <i className="fas fa-graduation-cap mr-2" />
              Cursos
            </Button>
            <Button
              variant="light"
              size="sm"
              className="ml-2 shadow-sm"
              href="/messages"
              disabled={zenMode ? true : false}
            >
              <i className="fas fa-inbox mr-2" />
              Mensajes
            </Button>
          </div> */}
          {/* smaller displays */}
          {/* <div className="ml-auto d-flex flex-column d-md-none align-items-end">
            <Button
              variant="light"
              size="sm"
              className="shadow-sm"
              href="/dashboard"
              disabled={zenMode ? true : false}
            >
              <i className="fas fa-graduation-cap" />
            </Button>
            <Button
              variant="light"
              size="sm"
              className="shadow-sm mt-1"
              href="/messages"
              disabled={zenMode ? true : false}
            >
              <i className="fas fa-inbox" />
            </Button>
          </div> */}
        </div>
      </Container>
    </div>
  );
});

export default StudentNav;
