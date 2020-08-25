import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import "./titlerow.scss";

const TitleRow = React.memo(({ title }) => {
  return (
    <Container fluid id="titlerowstyle">
      <Row>
        <Col md={8} className="d-flex align-items-center">
          {/* <h1 className="text-white">{title}</h1> */}
          <h1 className="text-white">título</h1>
        </Col>
      </Row>
      {/* filters and search bar */}
      {/* {filters ? filters : null} */}
    </Container>
  );
});

TitleRow.propTypes = {
//   title: PropTypes.string.isRequired,
};

export default TitleRow;
