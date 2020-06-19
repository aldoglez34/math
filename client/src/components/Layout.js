import React from "react";
import MyNavbar from "./navbar";
import MyFooter from "./footer";
import PropTypes from "prop-types";
import "./layout.scss";
import MyBreadCrumb from "../components/breadcrumb";
import StudentNav from "./studentnav";
import ScrollButton from "./scrollbutton";

export const Layout = React.memo(({ children }) => {
  return (
    <>
      <MyNavbar />
      <div className="d-flex flex-column mainDiv h-100">
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
      <div className="d-flex flex-column h-100 mainDiv">
        <StudentNav breadcrumb={breadcrumb} />
        <MyBreadCrumb breadcrumb={breadcrumb} />
        {/* <div
          style={{
            backgroundImage: "url('/images/newcoursecardback.png')",
          }}
          className="h-100"
        >
          <Container
            className="px-3 px-lg-0 h-100"
            style={{
              paddingTop: "34px",
              paddingBottom: "34px",
            }}
          >
            {children}
          </Container>
        </div> */}
        <ScrollButton scrollStepInPx={150} delayInMs={16.66} />
        <MyFooter />
      </div>
    </>
  );
});

StudentLayout.propTypes = {
  breadcrumb: PropTypes.array,
  children: PropTypes.node.isRequired,
};
