import React from "react";
import { Container } from "react-bootstrap";
import "./studentnav.scss";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import MyBreadcrumb from "../breadcrumb";

const StudentNav = React.memo(({ breadcrumb }) => {
  const student = useSelector((state) => state.student);

  return (
    <Container fluid id="studentNav">
      <Container className="px-3 px-lg-0">
        <h2 className=" mb-0 text-white" style={{ fontWeight: 600 }}>
          {student ? student.email.split("@", 1)[0] : null}
        </h2>
      </Container>
      <Container className="d-flex flex-row mt-2 px-3 px-lg-0">
        <MyBreadcrumb breadcrumb={breadcrumb} />
      </Container>
    </Container>
  );
});

StudentNav.propTypes = {
  breadcrumb: PropTypes.array,
};

export default StudentNav;
