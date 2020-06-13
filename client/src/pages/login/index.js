import React from "react";
import Layout from "../../components/Layout";
import { Container, Row, Col } from "react-bootstrap";
import LoginForm from "./components/LoginForm";

const Login = React.memo(() => {
  return (
    <Layout>
      <Container
        className="bg-light"
        style={{ marginTop: "48px", marginBottom: "48px" }}
      >
        <div className="border rounded" style={{ padding: "90px" }}>
          <Row>
            <Col md={6}>
              <h2 className="display-3 mb-0">Hola,</h2>
              <h2 className="display-4">¡Qué bueno verte de vuelta!</h2>
              <p>
                ¿No tienes cuenta? Crea una{" "}
                <a href="/signup" className="text-warning">
                  aquí
                </a>
              </p>
            </Col>
            <Col md={6}>
              <LoginForm />
            </Col>
          </Row>
        </div>
      </Container>
    </Layout>
  );
});

export default Login;
