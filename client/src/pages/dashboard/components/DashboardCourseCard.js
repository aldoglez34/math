import React from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import "./dashboardcoursecard.scss";
import { useDispatch } from "react-redux";
import * as courseActions from "../../../redux/actions/course";
import MyRewards from "./MyRewards";

const DashboardCourseCard = React.memo(({ course }) => {
  const dispatch = useDispatch();

  const buttonClicked = async (courseId, courseName) => {
    dispatch(courseActions.setCourse({ _id: courseId, name: courseName }));
  };

  return (
    <Card className="dashboardCourseCard shadow-sm">
      <Card.Body>
        <Card.Title className="d-flex flex-row">
          <h3 className="mb-0" style={{ color: "#3b424b" }}>
            {course.name}
          </h3>
        </Card.Title>
        <hr />
        <Card.Text>
          <MyRewards rewards={course.rewards} />
        </Card.Text>
        <Card.Text>{course.shortDescription}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        {course.topics.map((ct) => (
          <ListGroupItem
            key={ct._id}
            className="d-flex flex-row align-items-center"
          >
            <strong className="text-dark">{ct.name}</strong>
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
