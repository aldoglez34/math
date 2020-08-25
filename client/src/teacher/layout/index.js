import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import LeftNav from "./components/LeftNav";
import TopHelperNav from "./components/TopHelperNav";
import TitleRow from "./components/TitleRow";
import "./teacherlayout.scss";

const TeacherLayout = React.memo(
  ({ title, leftBarActive, backBttn, topBttn, children, filters }) => {
    return (
      <div className="d-lg-flex flex-row h-100">
        {/* vertical navbar */}
        <LeftNav leftBarActive={leftBarActive} />
        {/* content */}
        <Container id="containerMargin" fluid>
          {/* top nav */}
          <TopHelperNav backBttn={backBttn} topBttn={topBttn} />
          {/* title */}
          <TitleRow />
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

TeacherLayout.propTypes = {
  title: PropTypes.string.isRequired,
  leftBarActive: PropTypes.string.isRequired,
  backBttn: PropTypes.string,
  children: PropTypes.node.isRequired,
  filters: PropTypes.node,
  topBttn: PropTypes.node,
};

export default TeacherLayout;
