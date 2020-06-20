import React from "react";
import { Card, Col, Badge } from "react-bootstrap";
import PropTypes from "prop-types";

const HomeCard = React.memo(
  ({ title, lessons, description, courses, link }) => {
    return (
      <Card className="m-lg-3 border rounded shadow-sm oc_coursecard">
        <Card.Body>
          <Card.Title as={Col} className="px-0">
            <div className="d-flex">
              <h3 className="mb-0">{title}</h3>
              <Badge
                variant="success"
                className="ml-auto d-flex align-items-center oc_cardBadge"
              >
                {lessons + " lecciones"}
              </Badge>
            </div>
          </Card.Title>
          <Card.Text style={{ color: "#50575e", fontSize: "16px" }}>
            {description}
          </Card.Text>
          <Card.Text as={Col} className="pt-2 px-0">
            {courses.map((l) => {
              return (
                <div key={l.title}>
                  <div className="lead">
                    <i
                      className="fas fa-check-circle mr-2"
                      style={{ color: "#48bf84" }}
                    />
                    <span style={{ fontWeight: 700 }}>{l.title}</span>
                  </div>
                  <ul>
                    {l.list.map((ll) => {
                      return <li key={ll}>{ll}</li>;
                    })}
                  </ul>
                </div>
              );
            })}
          </Card.Text>
          <Card.Text className="mt-3">
            <a
              href={link}
              style={{
                color: "#49bf84",
                fontSize: "16px",
                fontWeight: 600,
              }}
            >
              Ver más
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
);

HomeCard.propTypes = {
  title: PropTypes.string.isRequired,
  lessons: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  courses: PropTypes.array.isRequired,
  link: PropTypes.string.isRequired,
};

export default HomeCard;
