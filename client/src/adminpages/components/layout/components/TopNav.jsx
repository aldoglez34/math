import React from "react";
import { Button } from "react-bootstrap";
import { node, string } from "prop-types";
import { useSelector } from "react-redux";

export const TopNav = React.memo(({ buttons, backBttn }) => {
  const title = useSelector((state) => state.admin.title);

  return (
    <div style={{ backgroundColor: "#0f5257" }}>
      <div style={{ padding: "0px 39px" }}>
        <div className="d-flex align-items-center" style={{ height: "63px" }}>
          {/* back button */}
          {backBttn ? (
            <Button
              variant="transparent"
              className="p-0 text-light"
              href={backBttn}
            >
              <i className="fas fa-chevron-left mr-1" />
              Atrás
            </Button>
          ) : null}
        </div>
        <div
          className="d-flex align-items-center"
          style={{
            paddingBottom: "20px",
          }}
        >
          {/* title */}
          <div>
            <h2 className="mb-0 text-light">{title}</h2>
          </div>
        </div>
        {buttons ? (
          <div
            className="d-flex flex-row align-items-center"
            style={{
              paddingBottom: "15px",
            }}
          >
            {buttons}
          </div>
        ) : null}
      </div>
    </div>
  );
});

TopNav.propTypes = {
  buttons: node,
  backBttn: string,
};
