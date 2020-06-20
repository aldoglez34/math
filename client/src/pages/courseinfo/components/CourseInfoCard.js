import React from "react";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const CourseInfoCard = React.memo(({ title, description, price, lessons }) => {
  const student = useSelector((state) => state.student);

  return (
    <Card
      className="border rounded mr-0 mr-lg-4"
      style={{ marginTop: "30px", backgroundColor: "#f4fbf8" }}
    >
      <Card.Body>
        <div className="d-flex flex-row">
          <h1 className="pr-2 mb-0" style={{ color: "#51585f" }}>
            {title}
          </h1>
          <h1 className="ml-auto text-danger mb-0">{price}</h1>
        </div>
        <p className="lead mt-4">{description}</p>
        {lessons.map((l) => {
          return (
            <div key={l} style={{ fontSize: "15px" }}>
              <i
                className="fas fa-check-circle mr-2"
                style={{ color: "#48bf84" }}
              />
              <span className="lead" style={{ fontSize: "15px" }}>
                {l}
              </span>
            </div>
          );
        })}
        <Button
          size="lg"
          className="mt-3 buybttn"
          disabled={student ? false : true}
        >
          Comprar
        </Button>
        {student ? null : (
          <p className="text-muted mb-0 mt-2">
            <small>
              Es necesario{" "}
              <a href="/login" className="text-warning">
                iniciar sesión
              </a>{" "}
              para comprar un cusro
            </small>
          </p>
        )}
      </Card.Body>
    </Card>
  );
});

CourseInfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  lessons: PropTypes.array.isRequired,
};

export default CourseInfoCard;
