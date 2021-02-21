import React, { useEffect } from "react";
import { Layout } from "../../components/Layout";
import { ScrollButton } from "../../components/scrollbutton/ScrollButton";
import { Container } from "react-bootstrap";
import API from "../../utils/API";
import { BackButton } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { clearPurchase } from "../../redux/actions/purchase";

export const PaymentPage = React.memo((props) => {
  const dispatch = useDispatch();
  
  const { courseId, school } = props.routeProps.match.params;

  const student = useSelector((state) => state.student);
  const purchase = useSelector((state) => state.purchase);

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

  useEffect(() => {
    if (purchase) dispatch(clearPurchase());
  }, []);

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
