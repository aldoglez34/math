import React from "react";
import { Layout } from "../../components/Layout";
import { Container, Row, Col } from "react-bootstrap";
import "./signup.scss";
import SignUpForm from "./components/SignUpForm";

const SignUp = React.memo(() => {
  return (
    <Layout>
      <Container id="su_container">
        <Row className="px-0 px-lg-3">
          <Col lg={6} id="su_leftCol" className="d-flex flex-column">
            <h1 className="mb-1 display-3 text-light su_title">Registro</h1>
            <h1 className="mb-3 text-light su_title">
              Aprende matemáticas con nosotros
            </h1>
            <p className="text-light mt-auto">
              ¿Ya tienes cuenta? Accede
              <a href="/login" className="text-warning ml-1">
                aquí
              </a>
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
