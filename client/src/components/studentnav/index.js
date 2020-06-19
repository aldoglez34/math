import React from "react";
import { Container } from "react-bootstrap";
import "./studentnav.scss";
import { useSelector } from "react-redux";

const StudentNav = React.memo(() => {
  const student = useSelector((state) => state.student);

  return (
    <Container fluid id="studentNav">
      <Container className="px-3 px-lg-0">
        <h2 className=" mb-0 text-white" style={{ fontWeight: 600 }}>
          {student ? student.email.split("@", 1)[0] : null}
        </h2>
      </Container>
    </Container>
  );
});

export default StudentNav;
