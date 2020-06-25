import React from "react";
import PropTypes from "prop-types";
import DashboardCourseCard from "./components/DashboardCourseCard";
import { CardColumns } from "react-bootstrap";

const MyCourses = React.memo(({ courses }) => {
  return (
    <CardColumns className="mt-4">
      {courses.map((c) => (
        <DashboardCourseCard key={c.name} course={c} />
      ))}
    </CardColumns>
  );
});

MyCourses.propTypes = {
  courses: PropTypes.array.isRequired,
};

export default MyCourses;
