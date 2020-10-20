import React from "react";
import { Badge, Row, Col, Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import "./courseinfocard.scss";
import API from "../../../utils/API";
import { useSelector } from "react-redux";

const CourseInfoCard = React.memo(
  ({ courseId, title, price, topics, lessonCounter }) => {
    const student = useSelector((state) => state.student);

    const buyCourseSimulation = () => {
      API.buyCourse({ courseId, studentId: student._id })
        .then((res) => {
          console.log(res.data);
          alert("Has comprado el curso satisfactoriamente");
          window.location.href = "/";
        })
        .catch((err) => {
          console.log(err);
          alert("Ocurrió un error, vuelve a intentarlo.");
        });
    };

    return (
      <div className="mb-4">
        <Card
          className="courseInfoCard border rounded mr-0 mr-lg-4 shadow-sm h-100"
          style={{ marginTop: "30px", backgroundColor: "#f4fbf8" }}
        >
          <Card.Body className="d-flex flex-column">
            <div className="d-flex flex-row">
              {/* title */}
              <h2 className="pr-2 mb-0" style={{ color: "#0f5257" }}>
                {title}
              </h2>
              {/* topics counter */}
              <Badge className="ml-auto d-flex align-items-center courseCounterBadge">
                {lessonCounter + " lecciones"}
              </Badge>
            </div>
            {/* description */}
            <p className="mt-4">
              En la compra de este curso obtienes material didáctico, videos
              exclusivos, asistencia personalizada y cientos de ejercicios sobre
              los siguientes temas:
            </p>
            {/* topics list */}
            {topics.map((l) => {
              return (
                <div key={l}>
                  <i
                    className="fas fa-check-circle mr-2"
                    style={{ color: "#48bf84" }}
                  />
                  <span>{l}</span>
                </div>
              );
            })}
            <div className="text-center mt-auto">
              <strong
                className="mt-1 lead"
                style={{
                  color: "#212529",
                  backgroundColor: "#c6d9d7",
                }}
              >
                Único pago de:
              </strong>
            </div>
            {/* price */}
            <Row>
              <Col>
                <h1 className="mb-0 text-center coursePrice">
                  {"$" + price + " MXN"}
                </h1>
              </Col>
            </Row>
            {/* button */}
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <Button
                  block
                  className="shadow-sm mt-2 mb-3 py-3 buyButton"
                  onClick={
                    student
                      ? () => buyCourseSimulation()
                      : () =>
                          alert(
                            "Para comprar un curso es necesario estar registrado"
                          )
                  }
                  size="lg"
                >
                  Comprar
                  <i className="fas fa-cart-plus ml-2" />
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    );
  }
);

CourseInfoCard.propTypes = {
  courseId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  topics: PropTypes.array.isRequired,
  lessonCounter: PropTypes.number.isRequired,
};

export default CourseInfoCard;
