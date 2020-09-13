import React from "react";
import {
  Jumbotron,
  Container,
  Accordion,
  Card,
  Image,
  Row,
  Col,
} from "react-bootstrap";
import Fade from "react-reveal/Fade";
import "./faqjumbotron.scss";
import ContactForm from "./components/ContactForm";

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
            <strong>{question}</strong>
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
      <Image src="/images/top.png" id="fj_image" />
      <Jumbotron className="fj_jumbo" fluid>
        <Container className="fj_paddingsides">
          <Fade>
            <h1 className="mb-4 pb-2 text-center" style={{ fontWeight: 600 }}>
              Preguntas Frecuentes
            </h1>
            <Accordion className="px-3 px-lg-0">
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
              <Card className="fj_accordionItem border rounded">
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="contactForm"
                  className="fj_cardHeader"
                >
                  <div className="d-flex fj_question">
                    <strong>¿Cómo me pongo en contacto con ustedes?</strong>
                    <i className="fas fa-plus ml-auto plusSymbol" />
                  </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="contactForm">
                  <Card.Body className="fj_answer d-flex flex-column">
                    <strong className="mb-2">
                      Puedes comunicarte al siguiente número de Whatsapp
                    </strong>
                    <span>
                      <i className="far fa-user mr-2" />
                      M.C. Luis Rodrigo López Utrera
                    </span>
                    <span>
                      <i className="fab fa-whatsapp mr-2" />
                      229 909 1675
                    </span>
                    <strong className="mt-3 mb-3">
                      O puedes utilizar el siguiente formulario
                    </strong>
                    <Row>
                      <Col md={{ offset: 2, span: 8 }}>
                        <ContactForm />
                      </Col>
                    </Row>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Fade>
        </Container>
      </Jumbotron>
    </>
  );
});

export default FAQJumbotron;
