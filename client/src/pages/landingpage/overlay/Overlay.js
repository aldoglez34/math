import React, { useRef } from "react";
import styles from "./overlay.module.scss";

const Overlay = () => {
  const mySidepanel = useRef(null);

  const showOverlay = () => (mySidepanel.current.style.width = "850px");

  const hideOVerlay = () => (mySidepanel.current.style.width = "0");

  return (
    <>
      <button className={styles.openbtn} onClick={showOverlay}>
        ver waiver
      </button>

      <div ref={mySidepanel} className={styles.sidepanel}>
        <a className={styles.closebtn} onClick={hideOVerlay}>
          ×
        </a>
        <a href="#">About</a>
      </div>
    </>
  );
};

export default Overlay;
