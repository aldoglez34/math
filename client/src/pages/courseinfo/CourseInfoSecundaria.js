import React from "react";
import { Layout } from "../../components/Layout";
import ScrollButton from "../../components/scrollbutton";
import { Container, CardGroup } from "react-bootstrap";
import CourseInfoCard from "./components/CourseInfoCard";

const CourseInfoSecundaria = React.memo(() => {
  return (
    <Layout>
      <Container style={{ paddingTop: "40px", paddingBottom: "40px" }}>
        {/* title */}
        <p className="display-4" style={{ fontWeight: 700, color: "#0d2129" }}>
          Secundaria
        </p>
        <p className="lead mt-3">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati.
        </p>
        {/* courses */}
        <CardGroup>
          <CourseInfoCard
            title="1ro"
            price="$500"
            description="In pulvinar pulvinar urna, vel placerat enim pulvinar et. Fusce tincidunt, ipsum ut hendrerit interdum, neque nisl convallis justo, ac tincidunt erat mauris non risus."
            lessons={[
              "Operaciones con números",
              "Pre-álgebra",
              "Expresiones algebraicas",
              "Números negativos",
            ]}
            courseName="Secundaria1ro"
          />
          <CourseInfoCard
            title="2do"
            price="$500"
            description=" Pellentesque vestibulum arcu neque, vel placerat enim consequat ut. In mattis augue ipsum, ut molestie justo semper at."
            lessons={["Ecuaciones lineales", "Sistemas de ecuaciones"]}
            courseName="Secundaria2do"
          />
          <CourseInfoCard
            title="3ro"
            price="$500"
            description="Nulla molestie semper ligula, ut euismod arcu viverra et. Ut et eleifend ante. Sed egestas aliquet dui. Donec tincidunt, leo vitae tristique ultrices."
            lessons={["Probabilidad", "Estadística", "Ecucaciones cuadráticas"]}
            courseName="Secundaria3ro"
          />
        </CardGroup>
      </Container>
      <ScrollButton scrollStepInPx={150} delayInMs={16.66} />
    </Layout>
  );
});

export default CourseInfoSecundaria;
