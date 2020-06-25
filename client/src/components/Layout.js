import React from "react";
import MyNavbar from "./navbar/MyNavbar";
import MyFooter from "./footer";
import PropTypes from "prop-types";
import "./layout.scss";
import MyBreadCrumb from "../components/breadcrumb/MyBreadcrumb";
import StudentNav from "./studentnav/StudentNav";
import ScrollButton from "./scrollbutton";
import { Container } from "react-bootstrap";

export const Layout = React.memo(({ children }) => {
  return (
    <>
      <MyNavbar />
      <div className="d-flex flex-column marginTop h-100">
        {children}
        <MyFooter />
      </div>
    </>
  );
});

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export const StudentLayout = React.memo(({ breadcrumb, children }) => {
  return (
    <>
      <MyNavbar />
      <div className="marginTop" />
      <StudentNav />
      <MyBreadCrumb breadcrumb={breadcrumb} />
      <Container style={{ paddingTop: "0px", paddingBottom: "20px" }}>
        {children}
      </Container>
      <ScrollButton scrollStepInPx={150} delayInMs={16.66} />
    </>
  );
});

StudentLayout.propTypes = {
  breadcrumb: PropTypes.array,
  children: PropTypes.node.isRequired,
};
