import React, { useState, useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import { StudentLayout } from "../../components/Layout";
import { useSelector } from "react-redux";
import "./dashboard.scss";
import NoCourses from "./NoCourses";
import MyCourses from "./MyCourses";
import API from "../../utils/API";
import { useDispatch } from "react-redux";
import * as breadcrumbActions from "../../redux/actions/breadcrumb";
import * as courseActions from "../../redux/actions/course";
import * as examActions from "../../redux/actions/exam";

const Dashboard = React.memo(() => {
  const dispatch = useDispatch();

  const student = useSelector((state) => state.student);
  const course = useSelector((state) => state.course);
  const exam = useSelector((state) => state.exam);
  const breadcrumb = useSelector((state) => state.breadcrumb);

  const [myCourses, setMyCourses] = useState();

  useEffect(() => {
    // clear redux
    if (course) dispatch(courseActions.clearCourse());
    if (exam) dispatch(examActions.clearExam());
    if (breadcrumb) dispatch(breadcrumbActions.clearBreadcrumb());

    // fetch student's courses
    if (student) {
      API.fetchDashboard(student._id)
        .then((res) => {
          setMyCourses(res.data.courses);
        })
        .catch((err) => {
          console.log(err);
          alert("Ocurrió un error inesperado");
        });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [student, dispatch]);

  return (
    <StudentLayout>
      <Container className="pb-4">
        <h2 className="studentTitle">Bienvenido a tus cursos</h2>
        {myCourses ? (
          myCourses.length ? (
            <MyCourses courses={myCourses} />
          ) : (
            <NoCourses />
          )
        ) : (
          <div className="text-center mt-4 pt-4">
            <Spinner animation="border" variant="success" />
          </div>
        )}
      </Container>
    </StudentLayout>
  );
});

export default Dashboard;
