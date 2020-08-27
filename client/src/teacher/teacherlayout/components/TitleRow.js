import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import "./titlerow.scss";

const TitleRow = React.memo(({ title }) => {
  return (
    <div className="d-flex flex-row align-items-center" id="titlerowstyle">
      <h1 className="text-white mb-0">{title}</h1>
      {/* <Row>
        <Col md={8} className="d-flex align-items-center">
          <h1 className="text-white">{title}</h1>
        </Col>
      </Row> */}
      {/* filters and search bar */}
      {/* {filters ? filters : null} */}
    </div>
  );
});

TitleRow.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TitleRow;
