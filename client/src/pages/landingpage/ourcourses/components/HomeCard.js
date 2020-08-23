import React from "react";
import { Card, Col } from "react-bootstrap";
import PropTypes from "prop-types";

const HomeCard = React.memo(({ courses, link }) => {
  return (
    <Card
      className="border rounded shadow-sm"
      style={{ backgroundColor: "#f4fbf8" }}
    >
      <Card.Body>
        <Card.Text className="px-0" as={Col}>
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
        <Card.Text className="mt-4">
          <a
            href={link}
            style={{
              color: "#49bf84",
              fontSize: "16px",
              fontWeight: 600,
            }}
          >
            Ver más
            <i className="fas fa-long-arrow-alt-right ml-1" />
          </a>
        </Card.Text>
      </Card.Body>
    </Card>
  );
});

HomeCard.propTypes = {
  courses: PropTypes.array.isRequired,
  link: PropTypes.string.isRequired,
};

export default HomeCard;
