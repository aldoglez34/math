import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import "./adminbutton.scss";

const AdminButton = React.memo(({ content, link }) => {
  return (
    <Button className="px-4 adminbttncolor" size="sm" href={link}>
      {content}
    </Button>
  );
});

AdminButton.propTypes = {
  content: PropTypes.node,
  link: PropTypes.string,
};

export default AdminButton;
