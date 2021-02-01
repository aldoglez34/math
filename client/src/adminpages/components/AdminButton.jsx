import React from "react";
import { Button } from "react-bootstrap";
import { node, string } from "prop-types";
import "./adminbutton.scss";

export const AdminButton = React.memo(({ content, link }) => {
  return (
    <Button className="px-4 adminbttncolor" size="sm" href={link}>
      {content}
    </Button>
  );
});

AdminButton.propTypes = {
  content: node,
  link: string,
};
