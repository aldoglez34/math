import React, { useState, useEffect } from "react";
import API from "../../../utils/API";
import { useSelector } from "react-redux";
import { number } from "prop-types";

export const FreestyleTimer = React.memo(({ score }) => {
  const student = useSelector((state) => state.student);
  const exam = useSelector((state) => state.exam);
  const course = useSelector((state) => state.course);

  const [secondsLeft, setSecondsLeft] = useState(exam.duration * 60 + 59);
  const [minutesLeft, setMinutesLeft] = useState(exam.duration);

  useEffect(() => {
    if ((secondsLeft % 60) / 100 === 0) setMinutesLeft(minutesLeft - 1);

    if (secondsLeft === 0) {
      // register attempt
      API.registerFreestyleAttempt({
        courseId: course._id,
        topicName: exam.topicName,
        studentId: student._id,
        username: student.username,
        score: score,
      })
        .then((res) => {
          console.log(res.data);
          // alert the user
          alert(
            "El tiempo ha finalizado.\nTu puntuación final fue de: " + score
          );
          // go back
          window.location.href = "/course/#" + exam.topicName;
        })
        .catch((err) => console.log("error", err));
    }

    setTimeout(() => {
      setSecondsLeft(secondsLeft - 1);
    }, 1000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secondsLeft]);

  return (
    <div className="text-secondary lead" title="Tiempo restante">
      <i className="fas fa-stopwatch mr-1" />
      <strong>
        {minutesLeft > 0 ? minutesLeft + " min." : secondsLeft + " seg."}
      </strong>
    </div>
  );
});

FreestyleTimer.propTypes = {
  score: number.isRequired,
};
