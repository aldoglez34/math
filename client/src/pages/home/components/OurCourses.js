import React from "react";
import { Button, Container, CardGroup, Card } from "react-bootstrap";
import Fade from "react-reveal/Fade";

const OurCourses = React.memo(() => {
  const CourseCard = ({ title, description, link }) => {
    return (
      <Card className="m-3 border-0 rounded shadow">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button size="sm" variant="primary">
            Leer más
          </Button>
        </Card.Body>
      </Card>
    );
  };

  return (
    <Container className="oc_jumbo">
      <Fade>
        <h2 className="display-4 text-center mb-4">Nuestros Cursos</h2>
        <p className="lead text-center oc_subtitle pb-3">
          Enfocados para diferentes niveles educativos, en cada uno el alumno
          podrá reforzar los temas que más se le compliquen las veces que él
          crea necesarias hasta que logre comprender el tema.
        </p>
        <CardGroup>
          {CourseCard({
            title: "Álgebra",
            description:
              "Aplica el lenguaje algebraico para solucionar problemas cotidianos.",
            link: "#",
          })}
          {CourseCard({
            title: "Aritmética",
            description:
              "Aprende a realizar las 4 operaciones básicas con número enteros, decimales y con fracciones.",
            link: "#",
          })}
          {CourseCard({
            title: "Cálculo",
            description:
              "Aprende a derivar e integrar funciones algebraicas, trigonométricas, exponenciales y logarítmicas.",
            link: "#",
          })}
        </CardGroup>
        <CardGroup>
          {CourseCard({
            title: "Ecuaciones",
            description:
              "Resuelve e identifica los diferentes tipos de ecuaciones.",
            link: "#",
          })}
          {CourseCard({
            title: "Geometría",
            description:
              "Identifica los elementos y ecuaciones de la recta, circunferencia, parábola, elipse e hipérbola.",
            link: "#",
          })}
          {CourseCard({
            title: "Trigonometría",
            description:
              "Resuelve problemas cotidianos aplicando las funciones trigonométricas.",
            link: "#",
          })}
        </CardGroup>
      </Fade>
    </Container>
  );
});

export default OurCourses;
