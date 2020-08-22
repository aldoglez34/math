import React from "react";
import { Badge, Row, Col, Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const CourseInfoCard = React.memo(
  ({ title, description, price, lessons, lessonCounter }) => {
    return (
      <Card
        className="border rounded mr-0 mr-lg-4 shadow-sm"
        style={{ marginTop: "30px", backgroundColor: "#f4fbf8" }}
      >
        <Card.Body>
          <div className="d-flex flex-row">
            {/* title */}
            <h2 className="pr-2 mb-0" style={{ color: "#0f5257" }}>
              {title}
            </h2>
            {/* lessons counter */}
            <Badge className="ml-auto d-flex align-items-center oc_cardBadge">
              {lessonCounter + " lecciones"}
            </Badge>
          </div>
          {/* description */}
          <p className="lead mt-4">{description}</p>
          {/* lessons list */}
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
          <br />
          <div className="text-center mt-4">
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
              <h1
                className="mb-0 text-center"
                style={{ color: "#495057", fontWeight: 800 }}
              >
                {"$" + price + " MXN"}
              </h1>
            </Col>
          </Row>
          {/* button */}
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Button
                block
                className="shadow-sm mt-3 py-3 buyButton"
                onClick={() => alert("Has comprado el curso xx")}
                size="lg"
              >
                Comprar
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
);

CourseInfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  lessons: PropTypes.array.isRequired,
  lessonCounter: PropTypes.number.isRequired,
};

export default CourseInfoCard;
