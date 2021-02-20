import React from "react";
import { Layout } from "../../components/Layout";
import { ScrollButton } from "../../components/scrollbutton/ScrollButton";
import { Container } from "react-bootstrap";
import API from "../../utils/API";
import { BackButton } from "../../components";
import { useSelector } from "react-redux";

export const PaymentPage = React.memo((props) => {
  const { courseId, school } = props.routeProps.match.params;

  const student = useSelector((state) => state.student);

  const buyCourseSimulation = () => {
    API.buyCourse({ courseId, studentId: student._id })
      .then(() => {
        alert("Has comprado el curso satisfactoriamente.");
        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
        alert("Ocurrió un error, vuelve a intentarlo.");
      });
  };

  return (
    <Layout backgroundColor="white">
      <Container
        style={{
          paddingTop: "40px",
          marginBottom: "80px",
        }}
      >
        <BackButton to={`/courses/${school}`} />
        <h1>Payment page</h1>
        <h3>{courseId}</h3>
      </Container>
      <ScrollButton scrollStepInPx={150} delayInMs={16.66} />
    </Layout>
  );
});
