import React from "react";
import { Button } from "react-bootstrap";
import { node } from "prop-types";
import cn from "classnames";

import styles from "./admindangerbutton.module.scss";

export const AdminDangerButton = React.memo(({ icon, ...props }) => {
  return (
    <Button size="sm" className={cn("ml-1", styles.button)} {...props}>
      {icon}
    </Button>
  );
});

AdminDangerButton.propTypes = {
  icon: node.isRequired,
};
