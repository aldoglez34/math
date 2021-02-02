import React from "react";
import { Button } from "react-bootstrap";
import { node, string } from "prop-types";
import cn from "classnames";

import styles from "./adminbutton.module.scss";

export const AdminButton = React.memo(({ content, link }) => {
  return (
    <Button className={cn("px-4", styles.button)} size="sm" href={link}>
      {content}
    </Button>
  );
});

AdminButton.propTypes = {
  content: node,
  link: string,
};
