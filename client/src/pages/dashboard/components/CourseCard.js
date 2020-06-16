import React from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import "./coursecard.scss";

const CourseCard = React.memo(
  ({ course, lessons, description, lastVisited, link }) => {
    return (
      <Card
        style={{ width: "20rem" }}
        className="shadow-sm mr-lg-4 mb-4 mb-lg-0 border-0"
      >
        <Card.Body id="ccardBody" className="rounded">
          <Card.Title>
            <h3 id="ccardTitle">{course}</h3>
          </Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button size="sm" variant="primary" href={link}>
            Iniciar
          </Button>
        </Card.Body>
        <ListGroup className="list-group-flush">
          {lessons.map((l) => {
            return (
              <ListGroupItem key={l}>
                {/* <a href="/dashboard">{l}</a> */}
                {l}
              </ListGroupItem>
            );
          })}
        </ListGroup>
        <Card.Footer>
          <small className="text-muted">{lastVisited}</small>
        </Card.Footer>
      </Card>
    );
  }
);

CourseCard.propTypes = {
  course: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  lessons: PropTypes.array.isRequired,
  lastVisited: PropTypes.string.isRequired,
};

export default CourseCard;
