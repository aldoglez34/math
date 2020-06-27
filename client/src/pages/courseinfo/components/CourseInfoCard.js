import React from "react";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import API from "../../../utils/API";

const CourseInfoCard = React.memo(
  ({ title, description, price, lessons, courseName }) => {
    const student = useSelector((state) => state.student);

    const buyCourse = () => {
      API.buyCourse({ studentId: student._id, course: courseName })
        .then((res) => {
          console.log(res.data);
          alert("¡Felicidades! Compraste este curso satisfactoriamente");
          window.location.href = "/dashboard";
          // the alert message is called in the reducer
        })
        .catch((err) => {
          console.log(err);
          alert("Ocurrió un error inesperado al comprar el curso.");
        });
    };

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
            <h1 className="ml-auto mb-0" style={{ color: "#dc2a2a" }}>
              {price}
            </h1>
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
            variant="danger"
            className="mt-3 shadow-sm"
            disabled={student ? false : true}
            onClick={buyCourse}
          >
            Comprar
          </Button>
          {student ? null : (
            <p className="text-muted mb-0 mt-2">
              Es necesario{" "}
              <a href="/login" className="text-warning">
                iniciar sesión
              </a>{" "}
              para comprar un cusro
            </p>
          )}
        </Card.Body>
      </Card>
    );
  }
);

CourseInfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  lessons: PropTypes.array.isRequired,
  courseName: PropTypes.string.isRequired,
};

export default CourseInfoCard;
