import React from "react";
import PropTypes from "prop-types";
import DashboardCourseCard from "./components/DashboardCourseCard";
import { CardColumns } from "react-bootstrap";
import MyRewards from "./components/MyRewards";

const MyCourses = React.memo(({ courses }) => {
  return (
    <>
      <MyRewards />
      <CardColumns className="mt-4">
        {courses.map((c) => (
          <DashboardCourseCard key={c._id} course={c} />
        ))}
      </CardColumns>
    </>
  );
});

MyCourses.propTypes = {
  courses: PropTypes.array.isRequired,
};

export default MyCourses;
