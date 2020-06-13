import React from "react";
import Layout from "../../components/Layout";
import { Container, Row, Col } from "react-bootstrap";
import "./signup.scss";
import SignUpForm from "./components/SignUpForm";

const SignUp = React.memo(() => {
  return (
    <Layout>
      <Container
        className="bg-light"
        style={{ marginTop: "48px", marginBottom: "48px" }}
      >
        <div className="border rounded" style={{ padding: "90px" }}>
          <Row>
            <Col md={6}>
              <h2 className="mb-4">
                Cursos de matemáticas para estudiantes de cualquier edad
              </h2>
              <p className="su_text">
                <i className="fas fa-greater-than su_greaterThan" />
                Más de 4,000 ejercicios con explicaciones y videos tutoriales
              </p>
              <p className="su_text">
                <i className="fas fa-greater-than su_greaterThan" />
                Clases personalizadas, respondemos cada una de tus dudas
              </p>
              <p className="su_text">
                <i className="fas fa-greater-than su_greaterThan" />
                Aprendiendo matemáticas con un método único en el mercado
              </p>
            </Col>
            <Col md={6}>
              <SignUpForm />
            </Col>
          </Row>
        </div>
      </Container>
    </Layout>
  );
});

export default SignUp;
