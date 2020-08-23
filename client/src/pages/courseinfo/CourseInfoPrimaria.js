import React from "react";
import { Layout } from "../../components/Layout";
import ScrollButton from "../../components/scrollbutton";
import { Row, Col, Container } from "react-bootstrap";
import CourseInfoCard from "./components/CourseInfoCard";
import "./courseinfostyle.scss";

const CourseInfoPrimaria = React.memo(() => {
  return (
    <Layout backgroundColor="white">
      <Container
        style={{
          paddingTop: "40px",
          marginBottom: "80px",
        }}
      >
        {/* title */}
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <div className="text-center">
              <h1 className="courseinfoheader">Primaria</h1>
            </div>
            <p className="lead text-left text-md-center mt-3">
              Compuesto por las bases de la Aritmética este curso es ideal para
              que los alumnos desde 3er grado hasta 6to desarrollen y practiquen
              sus habilidades lógico-matemáticas, así como para los estudiantes
              que necesiten fortalecer sus bases en Aritmética puedan disponer
              del curso en cualquier momento del día.
            </p>
          </Col>
        </Row>
        {/* courses */}
        <Row>
          <Col md={6}>
            <CourseInfoCard
              lessonCounter={8}
              title="3ro Primaria"
              price={500}
              description="En la compra de este curso obtienes material didáctico, videos exclusivos, asistencia personalizada y cientos de ejercicios sobre los siguientes temas:"
              lessons={[
                "Sumas",
                "Restas",
                "Divisiones",
                "Fracciones",
                "Operaciones con Fracciones",
                "Figuras Geométricas",
                "Números Decimales",
                "Unidades de Medición",
              ]}
            />
          </Col>
          <Col md={6}>
            <CourseInfoCard
              lessonCounter={12}
              title="4to Primaria"
              price={500}
              description="En la compra de este curso obtienes material didáctico, videos exclusivos, asistencia personalizada y cientos de ejercicios sobre los siguientes temas:"
              lessons={[
                "Sistema Decimal",
                "Sumas",
                "Restas",
                "Multiplicaciones",
                "Divisiones",
                "Fracciones",
                "Sumas y Restas con Fracciones",
                "Multiplicación y División de Fracciones",
                "Figuras Geométricas",
                "Números Decimales",
                "Multiplicación y División con Números Decimales",
                "Sistemas de Numeración",
              ]}
            />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <CourseInfoCard
              lessonCounter={13}
              title="5to Primaria"
              price={500}
              description="En la compra de este curso obtienes material didáctico, videos exclusivos, asistencia personalizada y cientos de ejercicios sobre los siguientes temas:"
              lessons={[
                "Sistema Decimal",
                "Suma y Resta",
                "Multiplicación y División",
                "Fracciones",
                "Suma de Fracciones",
                "Resta de Fracciones",
                "Multiplicación y División de Fracciones",
                "Números Decimales",
                "Multiplicación y División con Números Decimales",
                "Unidades de Medición",
                "Tiempo y Números Romanos",
                "Figuras Geométricas",
                "Cuerpos Geométricos",
              ]}
            />
          </Col>
          <Col md={6}>
            <CourseInfoCard
              lessonCounter={10}
              title="6to Primaria"
              price={500}
              description="En la compra de este curso obtienes material didáctico, videos exclusivos, asistencia personalizada y cientos de ejercicios sobre los siguientes temas:"
              lessons={[
                "Teoría de Números",
                "Operaciones Básicas",
                "Fracciones",
                "Sumas y Restas con Fracciones",
                "Multiplicación y División de Fracciones",
                "Operaciones con Números Decimales",
                "Resolución de Problemas",
                "Figuras Geométricas",
                "Cuerpos Geométricos",
                "Conversión de Unidades",
                "Porcentajes",
                "Proporciones y Razones",
                "Probabilidad y Estadística",
                "Ángulos",
              ]}
            />
          </Col>
        </Row>
      </Container>
      <ScrollButton scrollStepInPx={150} delayInMs={16.66} />
    </Layout>
  );
});

export default CourseInfoPrimaria;
