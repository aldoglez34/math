import React from "react";
import Layout from "../../components/Layout";
import { Container, Row, Col } from "react-bootstrap";
import "./signup.scss";
import SignUpForm from "./components/SignUpForm";

const SignUp = React.memo(() => {
  return (
    <Layout>
      <Container id="su_container">
        <Row>
          <Col lg={6} id="su_leftCol">
            <h1 className="mb-4 text-light su_title">
              Aprende matemáticas con nosotros
            </h1>
            <p className="lead text-light mb-1">
              <i className="fas fa-greater-than su_greaterThanSymbol" />
              Clases personalizadas, respondemos cada una de tus dudas
            </p>
            <p className="lead text-light mb-1">
              <i className="fas fa-greater-than su_greaterThanSymbol" />
              Más de 4,000 ejercicios con explicaciones y videos tutoriales
            </p>
            <p className="lead text-light mb-1">
              <i className="fas fa-greater-than su_greaterThanSymbol" />
              Cursos de matemáticas para estudiantes de cualquier edad
            </p>
            <p className="lead text-light mb-1">
              <i className="fas fa-greater-than su_greaterThanSymbol" />
              Aprendiendo matemáticas con un método único en el mercado
            </p>
          </Col>
          <Col lg={6} id="su_rightCol">
            <SignUpForm />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
});

export default SignUp;
