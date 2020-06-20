import React from "react";
import { Layout } from "../../components/Layout";
import ScrollButton from "../../components/scrollbutton";
import { Container, CardGroup } from "react-bootstrap";
import CourseInfoCard from "./components/CourseInfoCard";
import "./courseinfo.scss";

const CourseInfoPrimaria = React.memo(() => {
  return (
    <Layout>
      <Container style={{ paddingTop: "40px", paddingBottom: "40px" }}>
        {/* title */}
        <p className="display-4" style={{ fontWeight: 700, color: "#0d2129" }}>
          Primaria
        </p>
        <p className="lead mt-3">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati.
        </p>
        {/* courses */}
        <CardGroup>
          <CourseInfoCard
            title="3ro y 4to"
            price="$500"
            description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque
            ipsa."
            lessons={[
              "Operaciones con números",
              "Ubicación en la recta numérica",
              "Fracciones",
            ]}
          />
          <CourseInfoCard
            title="5to y 6to"
            price="$500"
            description="In interdum facilisis faucibus. Nunc eget quam et ipsum dapibus euismod. Aliquam rutrum iaculis dui sit amet ullamcorper."
            lessons={[
              "Fracciones",
              "Porcentajes",
              "Relaciones",
              "Áreas y perímetros",
            ]}
          />
        </CardGroup>
      </Container>
      <ScrollButton scrollStepInPx={150} delayInMs={16.66} />
    </Layout>
  );
});

export default CourseInfoPrimaria;
