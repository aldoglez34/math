import React from "react";
import { Container } from "react-bootstrap";
import Fade from "react-reveal/Fade";

const FacilitiesJumbotron = React.memo(() => {
  return (
    <Container className="facj_jumbo">
      <Fade>
        <h2 className="display-4 text-center mb-4">Instalaciones</h2>
        <p className="lead text-center facj_subtitle pb-4">
          En MeXmáticas nos preocupamos en el más mínimo detalle para que
          nuestros alumnos tengan un mejor desempeño.
        </p>
        <ul className="mt-3 facj_list">
          <li className="facj_item">5 salones amplios</li>
          <li className="facj_item">Sala de espera</li>
          <li className="facj_item">Dispensador de agua</li>
          <li className="facj_item">Aire acondicionado</li>
          <li className="facj_item">Ambiente de trabajo</li>
          <li className="facj_item">Conexión a internet</li>
          <li className="facj_item">Baños</li>
        </ul>
      </Fade>
    </Container>
  );
});

export default FacilitiesJumbotron;
