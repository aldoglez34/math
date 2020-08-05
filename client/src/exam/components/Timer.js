import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { useSelector } from "react-redux";

const Timer = React.memo(() => {
  const student = useSelector((state) => state.student);
  const exam = useSelector((state) => state.exam);

  const [secondsLeft, setSecondsLeft] = useState(exam.duration * 60 + 59);
  const [minutesLeft, setMinutesLeft] = useState(exam.duration);

  useEffect(() => {
    console.log(secondsLeft);
    console.log(minutesLeft);

    if ((secondsLeft % 60) / 100 === 0) setMinutesLeft(minutesLeft - 1);

    if (secondsLeft === 0) {
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
    <div
      className="text-secondary p-1"
      style={{ cursor: "help" }}
      title="Tiempo restante"
    >
      <i className="fas fa-stopwatch mr-1" />
      <strong>
        {minutesLeft > 1 ? minutesLeft + " mins." : secondsLeft + " segs."}
      </strong>
    </div>
  );
});

export default Timer;
