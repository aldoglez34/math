import React from "react";
import { Button } from "react-bootstrap";

import styles from "./backtohomebutton.module.scss";

export const BackToHomeBttn = () => {
  return (
    <Button className={styles.backToHomeBttn} href="/">
      <i className="fas fa-long-arrow-alt-left mr-2" />
      <span>Regresar</span>
    </Button>
  );
};
