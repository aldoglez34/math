import React from "react";
import { Container, CardGroup, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import HomeCard from "../../../components/homecard/HomeCard";

const OurCourses = React.memo(() => {
  return (
    <Container className="oc_jumbo">
      <Fade>
        <h2 className="display-4 text-center mb-4" style={{ fontWeight: 600 }}>
          Nuestros cursos
        </h2>
        <Row>
          <Col className="lead text-left text-lg-center">
            Los cursos de esta plataforma están dirigidos a todos los y a las
            estudiantes; así como, a la población en general que desee estudiar,
            reforzar, practicar y desarrollar las habilidades matemáticas.
          </Col>
          <Col className="lead text-left text-lg-center">
            El estudiante tendrá la opción de elegir su propio ritmo de trabajo;
            también podrá seleccionar los temas que más se le compliquen,
            practicará las veces que sean necesarias hasta que logre comprender
            y adquirir el conocimiento.
          </Col>
        </Row>
        <Row>
          <Col className="lead text-left text-lg-center">
            En cada curso encontrarás miles de ejercicios y videos tutoriales
            para que reafirmes el conocimiento y una vez que concluyas cada
            curso obtendrás una medalla como reconocimiento a tu dedicación y
            esfuerzo.
          </Col>
          <Col className="lead text-left text-lg-center">
            Para que el alumno desarrolle el cálculo mental, creamos el "Modo
            Rápido" el cual consiste en realizar la mayor cantidad de ejercicios
            en un tiempo determinado y a la vez tener el puntaje más alto entre
            todos los estudiantes.
          </Col>
        </Row>
        {/* <p className="lead text-left text-lg-center oc_subtitle">
          Los cursos de esta plataforma están dirigidos a todos los y a las
          estudiantes; así como, a la población en general que desee estudiar,
          reforzar, practicar y desarrollar las habilidades matemáticas.
        </p>
        <p className="lead text-left text-lg-center oc_subtitle">
          El estudiante tendrá la opción de elegir su propio ritmo de trabajo;
          también podrá seleccionar los temas que más se le compliquen,
          practicará las veces que sean necesarias hasta que logre comprender y
          adquirir el conocimiento.
        </p>
        <p className="lead text-left text-lg-center oc_subtitle">
          En cada curso encontrarás miles de ejercicios y videos tutoriales para
          que reafirmes el conocimiento y una vez que concluyas cada curso
          obtendrás una medalla como reconocimiento a tu dedicación y esfuerzo.
        </p>
        <p className="lead text-left text-lg-center oc_subtitle pb-3">
          Para que el alumno desarrolle el cálculo mental, creamos el "Modo
          Rápido" el cual consiste en realizar la mayor cantidad de ejercicios
          en un tiempo determinado y a la vez tener el puntaje más alto entre
          todos los estudiantes.
        </p> */}
        {/* cards */}
        <CardGroup>
          <HomeCard
            title="Primaria"
            coursesCounter={4}
            description="Nulla eros mauris, mollis et vestibulum ut, egestas vel ex. Sed sodales vehicula nisi ac semper. Nulla at malesuada nibh."
            courses={[
              {
                title: "3ro de Primaria",
                list: [
                  "Operaciones con números",
                  "Ubicación en la recta numérica",
                  "Fracciones",
                ],
              },
              {
                title: "4to de Primaria",
                list: [
                  "Operaciones con números",
                  "Ubicación en la recta numérica",
                  "Fracciones",
                ],
              },
              {
                title: "5to de Primaria",
                list: [
                  "Fracciones",
                  "Porcentajes",
                  "Relaciones",
                  "Áreas y perímetros",
                ],
              },
              {
                title: "6to de Primaria",
                list: [
                  "Fracciones",
                  "Porcentajes",
                  "Relaciones",
                  "Áreas y perímetros",
                ],
              },
            ]}
            link="/courses/primaria"
          />
          <HomeCard
            title="Secundaria"
            coursesCounter={2}
            description="Ut rutrum vulputate arcu, non vehicula lacus ornare sed. Duis efficitur sollicitudin tristique. Ut in ultrices dui, vel porta tortor. Nam aliquet luctus diam, id porta ligula interdum a."
            courses={[
              {
                title: "1ro de Secundaria",
                list: [
                  "Operaciones con números",
                  "Pre-álgebra",
                  "Expresiones algebraicas",
                  "Números negativos",
                ],
              },
              {
                title: "2do de Secundaria",
                list: ["Ecuaciones lineales", "Sistemas de ecuaciones"],
              },
            ]}
            link="/courses/secundaria"
          />
          <HomeCard
            title="Preparatoria"
            coursesCounter={4}
            description="Etiam risus ipsum, gravida sit amet eros a, placerat dapibus massa. Duis tincidunt venenatis risus in tincidunt. Nullam a turpis turpis. Mauris pulvinar rutrum ultricies."
            courses={[
              {
                title: "1ro de Preparatoria",
                list: [
                  "Álgebra",
                  "Ecuaciones lineales",
                  "Ecucaciones cuadráticas",
                  "Series aritméticas",
                ],
              },
              {
                title: "2do de preparatoria",
                list: [
                  "Trigonometría",
                  "Funciones trigonométricas",
                  "Ley de senos",
                  "Ley de cosenos",
                ],
              },
              {
                title: "3ro de preparatoria",
                list: [
                  "Geometría analítica",
                  "Parábola",
                  "Elipse",
                  "Hipérbola",
                ],
              },
              {
                title: "4to de preparatoria",
                list: [
                  "Pre-cálculo",
                  "Ecuaciones polinomiales",
                  "Ecuaciones exponenciales",
                  "Ecuaciones logarítmicas",
                ],
              },
            ]}
            link="/courses/preparatoria"
          />
        </CardGroup>
      </Fade>
    </Container>
  );
});

export default OurCourses;
