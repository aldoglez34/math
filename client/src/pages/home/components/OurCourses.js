import React from "react";
import { Container, CardGroup } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import HomeCard from "../../../components/homecard/HomeCard";

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
          <HomeCard
            title="Primaria"
            lessons={7}
            description="Nulla eros mauris, mollis et vestibulum ut, egestas vel ex. Sed sodales vehicula nisi ac semper. Nulla at malesuada nibh."
            courses={[
              {
                title: "3ro y 4to de primaria",
                list: [
                  "Operaciones con números",
                  "Ubicación en la recta numérica",
                  "Fracciones",
                ],
              },
              {
                title: "5to y 6to de primaria",
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
            lessons={9}
            description="Ut rutrum vulputate arcu, non vehicula lacus ornare sed. Duis efficitur sollicitudin tristique. Ut in ultrices dui, vel porta tortor. Nam aliquet luctus diam, id porta ligula interdum a."
            courses={[
              {
                title: "1ro de secundaria",
                list: [
                  "Operaciones con números",
                  "Pre-álgebra",
                  "Expresiones algebraicas",
                  "Números negativos",
                ],
              },
              {
                title: "2do de secundaria",
                list: ["Ecuaciones lineales", "Sistemas de ecuaciones"],
              },
            ]}
            link="/courses/secundaria"
          />
          <HomeCard
            title="Preparatoria"
            lessons={17}
            description="Etiam risus ipsum, gravida sit amet eros a, placerat dapibus massa. Duis tincidunt venenatis risus in tincidunt. Nullam a turpis turpis. Mauris pulvinar rutrum ultricies."
            courses={[
              {
                title: "1ro de preparatoria",
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
