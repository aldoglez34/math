import React from "react";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import PropTypes from "prop-types";
import { HashLink as Link } from "react-router-hash-link";
import "./coursecard.scss";

const CourseCard = React.memo(
  ({ course, lessons = [], description, lastVisited, link }) => {
    return (
      <Card className="courseCard mr-lg-4 mb-4">
        <Card.Body className="ccardBody">
          <Card.Title>
            <h3 className="ccardTitle">{course}</h3>
          </Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button size="sm" variant="primary" href={link}>
            Leer más
          </Button>
        </Card.Body>
        {lessons.length ? (
          <ListGroup className="list-group-flush">
            {lessons.map((l) => {
              return (
                <Link to={`${link}#${l}`} key={l}>
                  <ListGroupItem action className="bg-transparent">
                    {l}
                  </ListGroupItem>
                </Link>
              );
            })}
          </ListGroup>
        ) : null}
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
  lessons: PropTypes.array,
  lastVisited: PropTypes.string.isRequired,
};

export default CourseCard;
