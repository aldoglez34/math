import React from "react";
import { Image, Button } from "react-bootstrap";

const NoCourses = React.memo(() => {
  return (
    <div className="text-center mt-4">
      <Image src="/images/emptybox.png" id="emptyBox" />
      <em className="d-block lead" style={{ color: "#b3b3b3" }}>
        No tienes cursos en tu cuenta :(
      </em>
      <h4 className="d-block" style={{ marginTop: "60px" }}>
        Cursos aquí
      </h4>
      <div className="d-flex mt-2 justify-content-center">
        <Button
          variant="primary"
          href="/courses/primaria"
          className="shadow-sm mr-2"
        >
          Primaria
        </Button>
        <Button
          variant="primary"
          href="/courses/secundaria"
          className="shadow-sm mr-2"
        >
          Secundaria
        </Button>
        <Button
          variant="primary"
          className="shadow-sm"
          href="/courses/preparatoria"
        >
          Preparatoria
        </Button>
      </div>
    </div>
  );
});

export default NoCourses;
