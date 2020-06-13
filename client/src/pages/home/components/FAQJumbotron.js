import React from "react";
import { Jumbotron, Container, Accordion, Card, Image } from "react-bootstrap";
import Fade from "react-reveal/Fade";

const FAQJumbotron = React.memo(() => {
  const question = ({ key, question, answer }) => {
    return (
      <Card className="fj_accordionItem border rounded">
        <Accordion.Toggle
          as={Card.Header}
          eventKey={key}
          className="fj_cardHeader"
        >
          <div className="d-flex fj_question">
            {question}
            <i className="fas fa-plus ml-auto plusSymbol" />
          </div>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={key}>
          <Card.Body className="fj_answer">{answer}</Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  };

  return (
    <>
      <div style={{ marginTop: "180px" }} />
      <Image src="/images/top.png" />
      <Jumbotron className="fj_jumbo" fluid>
        <Container className="fj_paddingsides">
          <Fade>
            <h1 className="mb-4">Preguntas Frecuentes</h1>
            <Accordion>
              {question({
                key: 0,
                question: "Lorem ipsum dolor sit amet?",
                answer:
                  "Consectetur adipiscing elit. Fusce lacinia euismod ultrices. Sed fermentum malesuada metus sed molestie.",
              })}
              {question({
                key: 1,
                question: "Etiam condimentum nulla sapien?",
                answer:
                  "Non tempor libero ullamcorper eu. Proin tristique mollis arcu tincidunt vulputate. Pellentesque nec ursus eros, nec accumsan velit.",
              })}
              {question({
                key: 2,
                question: "Donec ut elementum elit in eget molestie nisi?",
                answer:
                  "Curabitur mi mi, dignissim accumsan ullamcorper commodo, molestie eget ligula. Nullam lorem tortor, cumsan nec porttitor sed, molestie vel augue.",
              })}
              {question({
                key: 3,
                question: "Vivamus risus enim, accumsan at sodales vitae?",
                answer:
                  "Venenatis eleifend turpis. Duis malesuada turpis a ligula ornare ultricies. Sed vulputate elit a ros bibendum fringilla.",
              })}
            </Accordion>
          </Fade>
        </Container>
      </Jumbotron>
    </>
  );
});

export default FAQJumbotron;
