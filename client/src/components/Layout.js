import React from "react";
import MyNavbar from "./navbar";
import MyFooter from "./footer";
import PropTypes from "prop-types";
import "./layout.scss";
import { Container } from "react-bootstrap";

export const Layout = React.memo(({ children }) => {
  return (
    <React.Fragment>
      <MyNavbar />
      <div className="d-flex flex-column h-100" id="mainDiv">
        {children}
        <MyFooter />
      </div>
    </React.Fragment>
  );
});

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export const StudentLayout = React.memo(({ children }) => {
  return (
    <div
      style={{
        backgroundImage: "url('/images/newcoursecardback.png')",
      }}
    >
      <Container
        className="px-3 px-lg-0"
        style={{
          paddingTop: "34px",
          paddingBottom: "34px",
        }}
      >
        {children}
      </Container>
    </div>
  );
});

StudentLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
