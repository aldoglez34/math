import React, { useState } from "react";
import { Spinner } from "react-bootstrap";

const Freestyle = React.memo(() => {
  const [freestyle, setFreestyle] = useState();

  useEffect(() => {
    API.fetchFreestyle()
      .then((res) => {
        setFreestyle(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Ocurrió un error al cargar las preguntas de tu examen");
      });
  }, []);

  return (
    <StudentLayout>
      {freestyle ? (
        <>
          {/* title */}
          <h1 className="display-4">Freestyle</h1>
          {/* questions */}
          {/* <QuestionsContainer questions={exam.questions} /> */}
        </>
      ) : (
        <div className="text-center mt-4 pt-4">
          <Spinner animation="border" variant="primary" />
        </div>
      )}
    </StudentLayout>
  );
});

export default Freestyle;
