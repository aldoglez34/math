import React from "react";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import PropTypes from "prop-types";
import "./coursecard.scss";

const CourseCard = React.memo(
  ({ course, lessons, description, lastVisited, link }) => {
    return (
      <Card className="shadow-sm mr-lg-4 mb-4 border-0 ccardSize">
        <Card.Body className="ccardBody">
          <Card.Title>
            <h3 className="ccardTitle">{course}</h3>
          </Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button size="sm" variant="primary" href={link}>
            Entrar
          </Button>
        </Card.Body>
        <ListGroup className="list-group-flush">
          {lessons.map((l) => {
            return (
              <ListGroupItem href={`${link}/${l}`} action key={l}>
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
