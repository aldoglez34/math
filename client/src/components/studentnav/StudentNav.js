import React from "react";
import { Container } from "react-bootstrap";
import "./studentnav.scss";
import { useSelector } from "react-redux";

const StudentNav = React.memo(() => {
  const student = useSelector((state) => state.student);

  return (
    <div id="studentNav">
      <Container>
        <h2 className="mb-1 text-white">
          {student ? student.email.split("@", 1)[0] : null}
        </h2>
        <span className="text-light">
          <i className="fas fa-user mr-2" />
          {student ? student.name + " " + student.firstSurname : null}
        </span>
      </Container>
    </div>
  );
});

export default StudentNav;
