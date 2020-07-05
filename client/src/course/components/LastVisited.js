import React from "react";
import moment from "moment";
import "moment/locale/es";

const LastVisited = React.memo(({ date }) => {
  const formattedDate = date
    ? moment(date).format("LLLL")
    : "No has presentado este examen";

  return (
    <strong
      className="mb-2 d-block text-info"
      style={{ fontSize: "14px" }}
      title="Último intento"
    >
      <em>{formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)}</em>
    </strong>
  );
});

export default LastVisited;
