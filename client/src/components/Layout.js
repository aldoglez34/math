import React from "react";
import MyNavbar from "./navbar";
import MyFooter from "./footer";
// import PropTypes from "prop-types";

const Layout = React.memo(({ children }) => {
  return (
    <React.Fragment>
      <MyNavbar />
      <div className="d-flex flex-column h-100">
        {children}
        <MyFooter />
      </div>
    </React.Fragment>
  );
});

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
//   hideBag: PropTypes.bool,
//   hideUser: PropTypes.bool,
// };

export default Layout;
