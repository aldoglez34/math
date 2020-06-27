import React, { useState, useEffect } from "react";
import { Image, Spinner } from "react-bootstrap";
import { StudentLayout } from "../../components/Layout";
import { useSelector } from "react-redux";
import "./dashboard.scss";
import NoCourses from "./NoCourses";
import MyCourses from "./MyCourses";
import API from "../../utils/API";

const Dashboard = React.memo(() => {
  const student = useSelector((state) => state.student);

  const [myCourses, setMyCourses] = useState();

  useEffect(() => {
    if (student) {
      API.fetchMyCourses(student._id)
        .then((res) => setMyCourses(res.data))
        .catch((err) => {
          console.log(err);
          alert("Ocurrió un error inesperado");
        });
    }
  }, [student]);

  return (
    <StudentLayout>
      <div className="d-flex flex-row align-items-end mt-4">
        <Image
          src="/images/books.png"
          width="50"
          height="50"
          style={{ paddingBottom: "4px" }}
        />
        <h2 className="display-4 ml-2 mb-0">Mis cursos</h2>
      </div>
      {myCourses ? (
        myCourses.length ? (
          <MyCourses courses={myCourses} />
        ) : (
          <NoCourses />
        )
      ) : (
        <div className="text-center mt-4 pt-4">
          <Spinner animation="border" variant="primary" />
        </div>
      )}
    </StudentLayout>
  );
});

export default Dashboard;
