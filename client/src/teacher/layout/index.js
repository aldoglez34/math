import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import LeftNav from "./LeftNav";
import TopHelperNav from "./TopHelperNav";
import "./teacherlayout.scss";

const ManagerLayout = React.memo(
  ({ leftBarActive, backBttn, topBttn, title, children, filters }) => {
    return (
      <div className="d-lg-flex flex-row h-100">
        {/* vertical navbar */}
        <LeftNav leftBarActive={leftBarActive} />
        {/* content */}
        <Container id="containerMargin" fluid>
          {/* top nav */}
          <TopHelperNav backBttn={backBttn} topBttn={topBttn} />
          {/* title */}
          <Container
            fluid
            className="pb-2"
            style={{ backgroundColor: "#264341" }}
          >
            <Row>
              <Col md={8} className="d-flex align-items-center">
                <h1 className="text-white">{title}</h1>
              </Col>
            </Row>
            {/* filters and search bar */}
            {filters ? filters : null}
          </Container>
          {/* content */}
          <Container fluid>
            <Row>
              <Col className="pt-2 pb-4">
                <div className="my-3">{children}</div>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    );
  }
);

ManagerLayout.propTypes = {
  leftBarActive: PropTypes.string.isRequired,
  backBttn: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  filters: PropTypes.node,
  topBttn: PropTypes.node,
};

export default ManagerLayout;
