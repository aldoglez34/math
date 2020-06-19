import React from "react";
import { Badge, Button, Container, CardGroup, Card } from "react-bootstrap";
import Fade from "react-reveal/Fade";

const OurCourses = React.memo(() => {
  return (
    <Container className="oc_jumbo">
      <Fade>
        <h2 className="display-4 text-center mb-4" style={{ fontWeight: 600 }}>
          Nuestros Cursos
        </h2>
        <p className="lead text-left text-lg-center oc_subtitle pb-3">
          Enfocados para diferentes niveles educativos, en cada uno el alumno
          podrá reforzar los temas que más se le compliquen las veces que él
          crea necesarias hasta que logre comprender el tema.
        </p>
        <CardGroup>
          {/* primaria */}
          <Card className="m-lg-3 border rounded shadow-sm oc_coursecard">
            <Card.Body>
              <Card.Title>
                <div className="d-flex">
                  <h3 className="mb-0">Primaria</h3>
                  <Badge
                    variant="success"
                    className="ml-auto d-flex align-items-center oc_cardBadge"
                  >
                    7 lecciones
                  </Badge>
                </div>
              </Card.Title>
              <Card.Text style={{ color: "#50575e", fontSize: "16px" }}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque
                ipsa.
              </Card.Text>
              <Card.Text className="pt-2">
                {/* 3ro y 4to de primaria */}
                <div>
                  <div className="lead">
                    <i
                      class="fas fa-check-circle mr-2"
                      style={{ color: "#48bf84" }}
                    />
                    <span style={{ fontWeight: 700 }}>
                      3ro y 4to de primaria
                    </span>
                  </div>
                  <ul>
                    <li>Operaciones con números</li>
                    <li>Ubicación en la recta numérica</li>
                    <li>Fracciones</li>
                  </ul>
                </div>
                {/* <5to y 6to */}
                <div>
                  <div className="lead">
                    <i
                      class="fas fa-check-circle mr-2"
                      style={{ color: "#48bf84" }}
                    />
                    <span style={{ fontWeight: 700 }}>
                      5to y 6to de primaria
                    </span>
                  </div>
                  <ul className="mb-0">
                    <li>Fracciones</li>
                    <li>Porcentajes</li>
                    <li>Relaciones</li>
                    <li>Áreas y perímetros</li>
                  </ul>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          {/* secundaria */}
          <Card className="m-lg-3 border rounded shadow-sm oc_coursecard">
            <Card.Body>
              <Card.Title>
                <div className="d-flex">
                  <h3 className="mb-0">Secundaria</h3>
                  <Badge
                    variant="success"
                    className="ml-auto d-flex align-items-center oc_cardBadge"
                  >
                    9 lecciones
                  </Badge>
                </div>
              </Card.Title>
              <Card.Text style={{ color: "#50575e", fontSize: "16px" }}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque
                ipsa.
              </Card.Text>
              <Card.Text className="pt-2">
                {/* 1ro de secundaria */}
                <div>
                  <div className="lead">
                    <i
                      class="fas fa-check-circle mr-2"
                      style={{ color: "#48bf84" }}
                    />
                    <span style={{ fontWeight: 700 }}>1ro de secundaria</span>
                  </div>
                  <ul>
                    <li>Operaciones con números</li>
                    <li>Pre-álgebra</li>
                    <li>Expresiones algebraicas</li>
                    <li>Números negativos</li>
                  </ul>
                </div>
                {/* 2do de secundaria */}
                <div>
                  <div className="lead">
                    <i
                      class="fas fa-check-circle mr-2"
                      style={{ color: "#48bf84" }}
                    />
                    <span style={{ fontWeight: 700 }}>2do de secundaria</span>
                  </div>
                  <ul>
                    <li>Ecuaciones lineales</li>
                    <li>Sistemas de ecuaciones</li>
                  </ul>
                </div>
                {/* 3ro de secundaria */}
                <div>
                  <div className="lead">
                    <i
                      class="fas fa-check-circle mr-2"
                      style={{ color: "#48bf84" }}
                    />
                    <span style={{ fontWeight: 700 }}>3ro de secundaria</span>
                  </div>
                  <ul className="mb-0">
                    <li>Probabilidad</li>
                    <li>Estadística</li>
                    <li>Ecucaciones cuadráticas</li>
                  </ul>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          {/* tercero */}
          <Card className="m-lg-3 border rounded shadow-sm oc_coursecard">
            <Card.Body>
              <Card.Title>
                <div className="d-flex">
                  <h3 className="mb-0">Preparatoria</h3>
                  <Badge
                    variant="success"
                    className="ml-auto d-flex align-items-center oc_cardBadge"
                  >
                    17 lecciones
                  </Badge>
                </div>
              </Card.Title>
              <Card.Text style={{ color: "#50575e", fontSize: "16px" }}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque
                ipsa.
              </Card.Text>
              <Card.Text className="pt-2">
                {/* 1ro de prepa */}
                <div>
                  <div className="lead">
                    <i
                      class="fas fa-check-circle mr-2"
                      style={{ color: "#48bf84" }}
                    />
                    <span style={{ fontWeight: 700 }}>1ro de preparatoria</span>
                  </div>
                  <ul>
                    <li>Álgebra</li>
                    <li>Ecuaciones lineales</li>
                    <li>Ecucaciones cuadráticas</li>
                    <li>Series aritméticas</li>
                  </ul>
                </div>
                {/* 2do de prepa */}
                <div>
                  <div className="lead">
                    <i
                      class="fas fa-check-circle mr-2"
                      style={{ color: "#48bf84" }}
                    />
                    <span style={{ fontWeight: 700 }}>2do de preparatoria</span>
                  </div>
                  <ul>
                    <li>Trigonometría</li>
                    <li>Funciones trigonométricas</li>
                    <li>Ley de senos</li>
                    <li>Ley de cosenos</li>
                  </ul>
                </div>
                {/* 3ro de prepa */}
                <div>
                  <div className="lead">
                    <i
                      class="fas fa-check-circle mr-2"
                      style={{ color: "#48bf84" }}
                    />
                    <span style={{ fontWeight: 700 }}>3ro de preparatoria</span>
                  </div>
                  <ul>
                    <li>Geometría analítica</li>
                    <li>Parábola</li>
                    <li>Elipse</li>
                    <li>Hipérbola</li>
                  </ul>
                </div>
                {/* 4to de prepa */}
                <div>
                  <div className="lead">
                    <i
                      class="fas fa-check-circle mr-2"
                      style={{ color: "#48bf84" }}
                    />
                    <span style={{ fontWeight: 700 }}>4to de preparatoria</span>
                  </div>
                  <ul className="mb-0">
                    <li>Pre-cálculo</li>
                    <li>Ecuaciones polinomiales</li>
                    <li>Ecuaciones exponenciales</li>
                    <li>Ecuaciones logarítmicas</li>
                  </ul>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Fade>
    </Container>
  );
});

export default OurCourses;
