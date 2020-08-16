import React from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import "./dashboardcoursecard.scss";
import { useDispatch } from "react-redux";
import * as courseActions from "../../../redux/actions/course";

const DashboardCourseCard = React.memo(({ course }) => {
  const dispatch = useDispatch();

  const buttonClicked = async (courseId, courseName) => {
    dispatch(courseActions.setCourse({ _id: courseId, name: courseName }));
  };

  return (
    <Card className="dashboardCourseCard shadow-sm">
      <Card.Body>
        <Card.Title className="d-flex flex-row">
          <h2 className="mb-0" style={{ color: "#3b424b" }}>
            {course.name}
          </h2>
        </Card.Title>

        <Card.Text>{course.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        {course.topics.map((ct) => (
          <ListGroupItem
            key={ct._id}
            className="d-flex flex-row align-items-center"
          >
            <Button
              variant="link"
              className="p-0"
              onClick={() =>
                buttonClicked(course._id, course.name).then(
                  () => (window.location.href = "/course/#" + ct.name)
                )
              }
              title={"Ir a " + ct.name}
            >
              <strong>{ct.name}</strong>
            </Button>

            {ct.hasReward ? (
              <i
                className="fas fa-medal text-warning ml-2"
                title="Aprobado"
                style={{ cursor: "help" }}
              />
            ) : null}
          </ListGroupItem>
        ))}
      </ListGroup>
      <Card.Body>
        <Button
          variant="dark"
          className="shadow-sm"
          onClick={() =>
            buttonClicked(course._id, course.name).then(
              () => (window.location.href = "/course")
            )
          }
        >
          <strong>Abrir</strong>
          <i className="fas fa-sign-in-alt ml-2" />
        </Button>
      </Card.Body>
    </Card>
  );
});

DashboardCourseCard.propTypes = {
  course: PropTypes.object.isRequired,
};

export default DashboardCourseCard;
