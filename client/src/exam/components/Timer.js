import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import API from "../../utils/API";
import { useSelector } from "react-redux";

const Timer = React.memo(({ duration }) => {
  const student = useSelector((state) => state.student);
  const exam = useSelector((state) => state.exam);

  const [secondsLeft, setSecondsLeft] = useState(duration + 1 * 60);
  const [minutesLeft, setMinutesLeft] = useState(duration);

  useEffect(() => {
    if ((secondsLeft % 60) / 100 === 0) setMinutesLeft(minutesLeft - 1);

    if (minutesLeft === 0) {
      // register attempt
      API.registerAttempt({ studentId: student._id, examId: exam._id })
        .then((res) => console.log(res.data))
        .catch((err) => console.log("error", err));
      // alert the user
      alert("Lo sentimos, tu tiempo finalizó");
      // go back
      window.location.href = "/course";
    }

    setTimeout(() => {
      setSecondsLeft(secondsLeft - 1);
    }, 1000);
  }, [secondsLeft]);

  return (
    <span className="text-dark" title="Tiempo restante">
      <i className="fas fa-stopwatch mr-1" />
      {minutesLeft > 1 ? minutesLeft + " mins." : secondsLeft + " segs."}
    </span>
  );
});

Timer.propTypes = {
  duration: PropTypes.number.isRequired,
};

export default Timer;
