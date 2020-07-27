import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { useSelector } from "react-redux";

const FreestyleTimer = React.memo(({ minutes }) => {
  const student = useSelector((state) => state.student);
  const exam = useSelector((state) => state.exam);

  const [secondsLeft, setSecondsLeft] = useState(minutes + 1 * 60);
  const [minutesLeft, setMinutesLeft] = useState(minutes);

  useEffect(() => {
    if ((secondsLeft % 60) / 100 === 0) setMinutesLeft(minutesLeft - 1);

    if (minutesLeft === 0) {
      // register attempt
      //   API.registerAttempt({ studentId: student._id, examId: exam._id })
      //     .then((res) => console.log(res.data))
      //     .catch((err) => console.log("error", err));
      // alert the user
      alert("Tu tiempo ha finalizado.");
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

export default FreestyleTimer;
