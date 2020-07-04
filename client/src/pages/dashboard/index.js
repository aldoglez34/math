import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { StudentLayout } from "../../components/Layout";
import { useSelector } from "react-redux";
import "./dashboard.scss";
import NoCourses from "./NoCourses";
import MyCourses from "./MyCourses";
import API from "../../utils/API";
import { useDispatch } from "react-redux";
import * as breadcrumbActions from "../../redux/actions/breadcrumb";

const Dashboard = React.memo(() => {
  const dispatch = useDispatch();

  const student = useSelector((state) => state.student);

  const [myCourses, setMyCourses] = useState();

  useEffect(() => {
    if (student) {
      API.fetchMyCourses(student._id)
        .then((res) => {
          setMyCourses(res.data);
          dispatch(breadcrumbActions.clearBreadcrumb());
        })
        .catch((err) => {
          console.log(err);
          alert("Ocurrió un error inesperado");
        });
    }
  }, [student, dispatch]);

  return (
    <StudentLayout>
      <h2 className="display-4 mb-0 mt-4">Mis cursos</h2>
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
