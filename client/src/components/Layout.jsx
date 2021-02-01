import React from "react";
import { array, node, string } from "prop-types";
import { MyBreadcrumb, MyFooter, MyNavbar, ScrollButton, StudentNav } from "./";
import "./layout.scss";

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
  children: node.isRequired,
  backgroundColor: string,
};

// for protected routes
export const StudentLayout = React.memo(({ breadcrumb, children }) => {
  return (
    <>
      <MyNavbar />
      <div className="marginTop" />
      <StudentNav />
      <MyBreadcrumb breadcrumb={breadcrumb} />
      {children}
      <ScrollButton scrollStepInPx={150} delayInMs={16.66} />
    </>
  );
});

StudentLayout.propTypes = {
  breadcrumb: array,
  children: node.isRequired,
};
