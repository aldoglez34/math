import React, { useState, useEffect } from "react";
import { Image, Button, Spinner } from "react-bootstrap";
import API from "../../utils/API";

const NoCourses = React.memo(() => {
  const [courses, setCourses] = useState();

  useEffect(() => {
    API.fetchSchoolDropdownItems()
      .then((res) => setCourses(res.data))
      .catch((err) => {
        console.log(err);
        alert("Ocurrió un error, actualiza la página");
      });
  }, []);

  return (
    <div className="text-center mt-4">
      <Image src="/images/emptybox.png" className="emptyBox" />
      <em className="d-block lead" style={{ color: "#b3b3b3" }}>
        No tienes cursos en tu cuenta...
      </em>
      <div className="d-flex mt-4 justify-content-center">
        {courses ? (
          courses.length ? (
            courses.map((c) => (
              <Button
                key={c}
                variant="primary"
                href={"/courses/" + c}
                className="shadow-sm mr-2"
              >
                {c}
              </Button>
            ))
          ) : null
        ) : (
          <div>
            <Spinner animation="border" role="status" />
          </div>
        )}
      </div>
    </div>
  );
});

export default NoCourses;
