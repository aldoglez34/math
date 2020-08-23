import React from "react";
import { Container, Row, Col, Tab, ListGroup } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import HomeCard from "./components/HomeCard";
import SectionTitle from "../SectionTitle";
import "./ourcourses.scss";

const OurCourses = React.memo(() => {
  return (
    <Container className="oc_jumbo">
      <Fade>
        {/* title */}
        <SectionTitle
          title="Nuestros cursos"
          text="Cursos de matemáticas para los siguientes niveles educativos."
        />
        {/* courses */}
        <Tab.Container defaultActiveKey="#primaria">
          <Row>
            <Col md={5}>
              <ListGroup className="mb-3 mb-md-0">
                <ListGroup.Item
                  action
                  href="#primaria"
                  className="courseMenuItem shadow-sm rounded border border-lignt"
                >
                  <h4 className="mb-0" style={{ fontWeight: 900 }}>
                    <i
                      className="fas fa-graduation-cap mr-3"
                      style={{ color: "#49bf84" }}
                    />
                    Primaria
                  </h4>
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  href="#secundaria"
                  className="courseMenuItem shadow-sm rounded border border-lignt"
                >
                  <h4 className="mb-0" style={{ fontWeight: 900 }}>
                    <i
                      className="fas fa-graduation-cap mr-3"
                      style={{ color: "#49bf84" }}
                    />
                    Secundaria
                  </h4>
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  href="#preparatoria"
                  className="courseMenuItem shadow-sm rounded border border-lignt"
                >
                  <h4 className="mb-0" style={{ fontWeight: 900 }}>
                    <i
                      className="fas fa-graduation-cap mr-3"
                      style={{ color: "#49bf84" }}
                    />
                    Preparatoria
                  </h4>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={7}>
              <Tab.Content>
                <Tab.Pane eventKey="#primaria">
                  <HomeCard
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
                </Tab.Pane>
                <Tab.Pane eventKey="#secundaria">
                  <HomeCard
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
                </Tab.Pane>
                <Tab.Pane eventKey="#preparatoria">
                  <HomeCard
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
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Fade>
    </Container>
  );
});

export default OurCourses;
