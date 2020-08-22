import React from "react";
import { Layout } from "../../components/Layout";
import ScrollButton from "../../components/scrollbutton";
import { Row, Col, Container } from "react-bootstrap";
import CourseInfoCard from "./components/CourseInfoCard";

const CourseInfoPrepa = React.memo(() => {
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
              <h1 className="courseinfoheader">Preparatoria</h1>
            </div>
            <p className="lead text-left text-md-center mt-3">
              Independientemente de la carrera por la cual se llegue a decidir,
              la Trigonometría, Álgebra y Estadística son de los retos que el
              estudiante en Preparatoria puede llegar a enfrentar, el curso ha
              sido pensado para acompañar, practicar y aprender estos temas que
              lo ayudarán a prepararse de tal forma que en su vida universitaria
              el alumno pueda llevar una vida equilibrada entre asignaciones.
            </p>
          </Col>
        </Row>
        {/* courses */}
        <Row>
          <Col md={6}>
            <CourseInfoCard
              lessonCounter={10}
              title="1ro Preparatoria"
              price={500}
              description="Donec orci diam, mattis ultrices ipsum quis, mattis laoreet ante."
              lessons={[
                "Álgebra",
                "Ecuaciones lineales",
                "Ecucaciones cuadráticas",
                "Series aritméticas",
              ]}
            />
          </Col>
          <Col md={6}>
            <CourseInfoCard
              lessonCounter={10}
              title="2do Preparatoria"
              price={500}
              description="Nulla posuere velit eu lorem sollicitudin dictum. Ut non nulla euismod, ullamcorper tortor eu, molestie nisi. Phasellus fermentum facilisis tellus."
              lessons={[
                "Trigonometría",
                "Funciones trigonométricas",
                "Ley de senos",
                "Ley de cosenos",
              ]}
            />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <CourseInfoCard
              lessonCounter={10}
              title="3ro Preparatoria"
              price={500}
              description="Etiam tempor, lorem vel tempor aliquam, sapien est pulvinar enim, a viverra velit ligula eget arcu. Sed imperdiet erat ligula, sed facilisis lorem rutrum vitae."
              lessons={[
                "Geometría analítica",
                "Parábola",
                "Elipse",
                "Hipérbola",
              ]}
            />
          </Col>
          <Col md={6}>
            <CourseInfoCard
              lessonCounter={10}
              title="4to Preparatoria"
              price={500}
              description="In pulvinar pulvinar urna, vel placerat enim pulvinar et. Fusce tincidunt, ipsum ut hendrerit interdum, neque nisl convallis justo, ac tincidunt erat mauris non risus."
              lessons={[
                "Pre-cálculo",
                "Ecuaciones polinomiales",
                "Ecuaciones exponenciales",
                "Ecuaciones logarítmicas",
              ]}
            />
          </Col>
        </Row>
      </Container>
      <ScrollButton scrollStepInPx={150} delayInMs={16.66} />
    </Layout>
  );
});

export default CourseInfoPrepa;
