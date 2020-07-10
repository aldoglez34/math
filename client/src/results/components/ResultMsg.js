import React from "react";
import PropTypes from "prop-types";
import { Image, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const ResultMsg = React.memo(({ calif }) => {
  const exam = useSelector((state) => state.exam);

  return calif >= 80 ? (
    <Col lg={{ span: 7, offset: 2 }}>
      <h2 className="text-success text-center">Resultado satisfactorio</h2>
      {calif / 10 === 10 ? (
        <h2 className="text-success text-center">¡Calificación perfecta!</h2>
      ) : null}

      <div className="text-center mt-4">
        {calif / 10 === 10 ? (
          <Image
            src="/images/crown.png"
            width="100"
            height="100"
            className="ml-2"
            title="Calificación perfecta"
          />
        ) : null}
        {exam.difficulty === "Final" && calif >= 8 ? (
          <Image
            src={exam.reward.link}
            width="100"
            height="100"
            className="mt-2 mx-2"
            title={exam.reward.name}
          />
        ) : null}
      </div>
    </Col>
  ) : (
    <Col lg={{ span: 7, offset: 2 }}>
      <h2 className="text-danger text-center">Resultado no satisfactorio</h2>
      <p className="text-danger text-center mt-2 lead">
        Debes obtener un mínimo de 8.0 para aprobar
      </p>
      <div className="mt-4 text-center">
        <Image src="/images/sadFace.png" width="100" height="100" />
      </div>
    </Col>
  );
});

ResultMsg.propTypes = {
  calif: PropTypes.number.isRequired,
};

export default ResultMsg;
