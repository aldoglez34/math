import React from "react";
import { Jumbotron, Button, Container } from "react-bootstrap";
import Fade from "react-reveal/Fade";

const MyJumbotron = React.memo(() => {
  const textStyle = {
    marginBottom: "5px",
  };

  const fontAwesome = {
    fontSize: "15px",
    marginRight: "10px",
    color: "#baf73c",
  };

  return (
    <Jumbotron fluid className="bg-light">
      <Container>
        <Fade>
          <h1>Matemáticas Simplificadas</h1>
          <p className="mt-3 lead" style={textStyle}>
            <i className="fas fa-greater-than" style={fontAwesome} />
            Cursos de matemáticas para estudiantes de cualquier edad
          </p>
          <p className="lead" style={textStyle}>
            <i className="fas fa-greater-than" style={fontAwesome} />
            Más de 4,000 ejercicios con explicaciones y videos tutoriales
          </p>
          <p className="lead" style={textStyle}>
            <i className="fas fa-greater-than" style={fontAwesome} />
            Clases personalizadas, respondemos cada una de tus dudas
          </p>
          <p className="lead" style={textStyle}>
            <i className="fas fa-greater-than" style={fontAwesome} />
            Aprendiendo matemáticas con un método único en el mercado
          </p>
          <p className="mt-4">
            <Button variant="primary" size="lg" className="shadow">
              REGÍSTRATE
            </Button>
          </p>
        </Fade>
      </Container>
    </Jumbotron>
  );
});

export default MyJumbotron;
