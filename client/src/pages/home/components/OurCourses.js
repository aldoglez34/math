import React from "react";
import { Container, CardGroup, Card } from "react-bootstrap";
import Fade from "react-reveal/Fade";

const OurCourses = React.memo(() => {
  const CourseCard = ({ title, description, link }) => {
    return (
      <Card className="m-3 border-0 rounded shadow">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Link href={link}>Leer más</Card.Link>
        </Card.Body>
      </Card>
    );
  };

  return (
    <Container className="oc_jumbo">
      <Fade>
        <h2 className="display-4 text-center mb-4">Nuestros Cursos</h2>
        <p className="lead text-center oc_subtitle pb-4">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
        </p>
        <CardGroup>
          {CourseCard({
            title: "Álgebra",
            description:
              "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
            link: "#",
          })}
          {CourseCard({
            title: "Aritmética",
            description:
              "This card has supporting text below as a natural lead-in to additional content.",
            link: "#",
          })}
          {CourseCard({
            title: "Cálculo",
            description:
              "This is a wider card with supporting text below as a natural lead-in to additional content. This card as even longer content than the first to show that equal height action.",
            link: "#",
          })}
        </CardGroup>
        <CardGroup>
          {CourseCard({
            title: "Ecuaciones",
            description:
              "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
            link: "#",
          })}
          {CourseCard({
            title: "Geometría",
            description:
              "This card has supporting text below as a natural lead-in to additional content.",
            link: "#",
          })}
          {CourseCard({
            title: "Trigonometría",
            description:
              "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
            link: "#",
          })}
        </CardGroup>
      </Fade>
    </Container>
  );
});

export default OurCourses;
