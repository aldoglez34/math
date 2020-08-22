import React from "react";
import { Layout } from "../../components/Layout";
import ScrollButton from "../../components/scrollbutton";
import { Row, Col, Container } from "react-bootstrap";
import CourseInfoCard from "./components/CourseInfoCard";

const CourseInfoSecundaria = React.memo(() => {
  return (
    <Layout>
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
              <h1 className="courseinfoheader">Secundaria</h1>
            </div>
            <p className="lead text-left text-md-center mt-3">
              La secundaria es una de las etapas más importantes de la vida ya
              que es donde empieza la transición de niño a adulto; las
              matemáticas pueden parecer igual de confusas para un adolescente,
              sin embargo este curso ha sido diseñado de una forma tal que el
              alumno aprenda y refuerce los conocimientos básicos del Álgebra y
              esté preparado para enfrentar los cursos posteriores en
              preparatoria.
            </p>
          </Col>
        </Row>
        {/* courses */}
        <Row>
          <Col md={6}>
            <CourseInfoCard
              lessonCounter={10}
              title="1ro Secundaria"
              price={500}
              description="In pulvinar pulvinar urna, vel placerat enim pulvinar et. Fusce tincidunt, ipsum ut hendrerit interdum, neque nisl convallis justo, ac tincidunt erat mauris non risus."
              lessons={[
                "Operaciones con números",
                "Pre-álgebra",
                "Expresiones algebraicas",
                "Números negativos",
              ]}
            />
          </Col>
          <Col md={6}>
            <CourseInfoCard
              lessonCounter={10}
              title="2do Secundaria"
              price={500}
              description="Pellentesque vestibulum arcu neque, vel placerat enim consequat ut. In mattis augue ipsum, ut molestie justo semper at."
              lessons={["Ecuaciones lineales", "Sistemas de ecuaciones"]}
            />
          </Col>
        </Row>
      </Container>
      <ScrollButton scrollStepInPx={150} delayInMs={16.66} />
    </Layout>
  );
});

export default CourseInfoSecundaria;
