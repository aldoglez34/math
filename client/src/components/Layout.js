import React from "react";
import MyNavbar from "./navbar/MyNavbar";
import MyFooter from "./footer";
import PropTypes from "prop-types";
import "./layout.scss";
import MyBreadCrumb from "../components/breadcrumb/MyBreadcrumb";
import StudentNav from "./studentnav/StudentNav";
import ScrollButton from "./scrollbutton";

// for public routes
export const Layout = React.memo(({ children, backgroundColor = "white" }) => {
  return (
    <>
      <MyNavbar />
      <div
        className="d-flex flex-column marginTop h-100"
        style={{ backgroundColor }}
      >
        {children}
        <MyFooter />
      </div>
    </>
  );
});

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string,
};

// for protected routes
export const StudentLayout = React.memo(({ breadcrumb, children }) => {
  return (
    <>
      <MyNavbar />
      <div className="marginTop" />
      <StudentNav />
      <MyBreadCrumb breadcrumb={breadcrumb} />
      {children}
      <ScrollButton scrollStepInPx={150} delayInMs={16.66} />
    </>
  );
});

StudentLayout.propTypes = {
  breadcrumb: PropTypes.array,
  children: PropTypes.node.isRequired,
};
