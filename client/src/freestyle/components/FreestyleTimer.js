import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const FreestyleTimer = React.memo(({ score }) => {
  const student = useSelector((state) => state.student);
  const exam = useSelector((state) => state.exam);
  const course = useSelector((state) => state.course);

  const [secondsLeft, setSecondsLeft] = useState(exam.duration + 1 * 60);
  const [minutesLeft, setMinutesLeft] = useState(exam.duration);

  useEffect(() => {
    if ((secondsLeft % 60) / 100 === 0) setMinutesLeft(minutesLeft - 1);

    if (minutesLeft === 0) {
      // register attempt
      API.registerFreestyleAttempt({
        courseId: course._id,
        topicName: exam.topicName,
        studentId: student._id,
        username: student.username,
        score: score,
      })
        .then((res) => console.log(res.data))
        .catch((err) => console.log("error", err));
      // alert the user
      alert("¡Tu tiempo ha finalizado!");
      // go back
      window.location.href = "/course/exam/freestyle/results";
    }

    setTimeout(() => {
      setSecondsLeft(secondsLeft - 1);
    }, 1000);
  }, [secondsLeft]);

  return (
    <span title="Tiempo restante" style={{ cursor: "help" }}>
      <i className="fas fa-stopwatch text-dark mr-1" />
      {minutesLeft > 1 ? minutesLeft + " mins." : secondsLeft + " segs."}
    </span>
  );
});

FreestyleTimer.propTypes = {
  score: PropTypes.number.isRequired,
};

export default FreestyleTimer;
