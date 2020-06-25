import React from "react";
import { Badge, Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import "./dashboardcoursecard.scss";
import { HashLink as Link } from "react-router-hash-link";

const DashboardCourseCard = React.memo(({ course }) => {
  return (
    <Card className="dashboardCourseCard">
      <Card.Body>
        <Card.Title className="d-flex flex-row">
          <h2 style={{ color: "#51585f" }}>{course.name}</h2>
        </Card.Title>
        <Card.Text>{course.shortDescription}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        {course.topics.map((ct) => (
          <ListGroupItem key={ct._id}>
            <Badge variant="light" className="mr-2">
              {ct.subject}
            </Badge>
            <Link to={"/course/" + course.code + "#" + ct.name}>{ct.name}</Link>
          </ListGroupItem>
        ))}
      </ListGroup>
      <Card.Body>
        <Button className="openBttn shadow-sm" href={"/course/" + course.code}>
          Entrar
        </Button>
      </Card.Body>
    </Card>
  );
});

DashboardCourseCard.propTypes = {
  course: PropTypes.object.isRequired,
};

export default DashboardCourseCard;
