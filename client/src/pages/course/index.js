import React from "react";
import Layout from "../../components/Layout";
import { Container } from "react-bootstrap";
import StudentNav from "../../components/studentnav";

const Course = React.memo((props) => {
  const getCourse = () => {
    const course = props.routeProps.match.params.course;

    switch (course) {
      case "trigonometry":
        return "Trigonometría";
      case "calculus":
        return "Cálculo";
      default:
        return "";
    }
  };

  return (
    <Layout>
      <StudentNav title={"Mis Cursos // " + getCourse()} hasExitBttn={true} />
      <Container className="py-4 px-2 mb-3 px-lg-0"></Container>
    </Layout>
  );
});

export default Course;
