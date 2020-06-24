import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { StudentLayout } from "../../components/Layout";
import { useSelector } from "react-redux";
import "./dashboard.scss";
import NoCourses from "./NoCourses";
import MyCourses from "./MyCourses";
import API from "../../utils/API";

const Dashboard = React.memo(() => {
  const student = useSelector((state) => state.student);

  const breadcrumb = [{ text: "Mis cursos" }];

  const [myCourses, setMyCourses] = useState();

  useEffect(() => {
    if (student) {
      const coursesArr = student.courses;
      const coursesStr = coursesArr.reduce((acc, cv, idx) => {
        if (idx === coursesArr.length - 1) {
          acc += cv;
        } else {
          acc += cv + ",";
        }
        return acc;
      }, "");
      API.getMyCourses(coursesStr)
        .then((res) => {
          console.log(res.data);
          // setMyCourses(res.data);
        })
        .catch((err) => {
          console.log(err);
          alert("Ocurrió un error inesperado");
        });
    }
  }, []);

  return (
    <StudentLayout breadcrumb={breadcrumb}>
      <h2 className="display-4">Mis cursos</h2>
      {/* {student ? (
        student.courses.length ? (
          <>
            <MyCourses />
            <span>mycourses</span>
          </>
        ) : (
          <NoCourses />
        )
      ) : (
        <Spinner className="text-center" animation="border" variant="primary" />
      )} */}
    </StudentLayout>
  );
});

export default Dashboard;
