import React from "react";
import { Layout } from "../../components/Layout";
import ScrollButton from "../../components/scrollbutton";
import { Container, CardGroup } from "react-bootstrap";
import CourseInfoCard from "./components/CourseInfoCard";

const CourseInfoPrepa = React.memo(() => {
  return (
    <Layout>
      <Container style={{ paddingTop: "40px", paddingBottom: "40px" }}>
        {/* title */}
        <p className="display-4" style={{ fontWeight: 700, color: "#0d2129" }}>
          Preparatoria
        </p>
        <p className="lead mt-3">
          Nunc eget quam et ipsum dapibus euismod. Aliquam rutrum iaculis dui
          sit amet ullamcorper. Etiam maximus mi urna, scelerisque tempor turpis
          blandit vitae. Aliquam gravida enim a ante lobortis accumsan. Nam ut
          metus eu mauris varius accumsan eget a sapien. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fames ac turpis
          egestas.
        </p>
        {/* courses */}
        <CardGroup>
          <CourseInfoCard
            title="1ro"
            price="$500"
            description="Donec orci diam, mattis ultrices ipsum quis, mattis laoreet ante."
            lessons={[
              "Álgebra",
              "Ecuaciones lineales",
              "Ecucaciones cuadráticas",
              "Series aritméticas",
            ]}
          />
          <CourseInfoCard
            title="2do"
            price="$500"
            description="Nulla posuere velit eu lorem sollicitudin dictum. Ut non nulla euismod, ullamcorper tortor eu, molestie nisi. Phasellus fermentum facilisis tellus."
            lessons={[
              "Trigonometría",
              "Funciones trigonométricas",
              "Ley de senos",
              "Ley de cosenos",
            ]}
          />
          <CourseInfoCard
            title="3ro"
            price="$500"
            description="Nulla posuere velit eu lorem sollicitudin dictum. Ut non nulla euismod, ullamcorper tortor eu, molestie nisi. Phasellus fermentum facilisis tellus."
            lessons={["Geometría analítica", "Parábola", "Elipse", "Hipérbola"]}
          />
          <CourseInfoCard
            title="4to"
            price="$500"
            description="In pulvinar pulvinar urna, vel placerat enim pulvinar et. Fusce tincidunt, ipsum ut hendrerit interdum, neque nisl convallis justo, ac tincidunt erat mauris non risus."
            lessons={[
              "Pre-cálculo",
              "Ecuaciones polinomiales",
              "Ecuaciones exponenciales",
              "Ecuaciones logarítmicas",
            ]}
          />
        </CardGroup>
      </Container>
      <ScrollButton scrollStepInPx={150} delayInMs={16.66} />
    </Layout>
  );
});

export default CourseInfoPrepa;
