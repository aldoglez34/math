import React from "react";
import {
  Accordion,
  Card,
  Col,
  Container,
  Image,
  Jumbotron,
  Row,
} from "react-bootstrap";
import Fade from "react-reveal/Fade";
import { ContactForm } from "./components";
import "./faqjumbotron.scss";

export const FAQJumbotron = () => {
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
          <Card.Body className="fj_answer bg-light">{answer}</Card.Body>
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
                question: "¿Los cursos son exclusivos para estudiantes?",
                answer:
                  "No, el contenido de MeXmáticas está diseñado y dirigido a todo público independientemente de la edad o grado educativo. Cualquier persona que quiera desarrollar su habilidad numérica puede suscribirse a nuestra plataforma.",
              })}
              {question({
                key: 1,
                question:
                  "¿Cuántas veces puedo hacer uso del contenido de cada curso?",
                answer:
                  "Al suscribirte al curso de tu elección, podrás hacer uso de los PDFs, ejercicios y videos de manera ilimitada.",
              })}
              {question({
                key: 2,
                question: "¿Puedo repetir un curso al terminarlo?",
                answer:
                  "Sí. Todo el material que utilizaste durante el curso puede ser reusado cuantas veces quieras hasta que hayas comprendido por completo los temas incluso los exámenes serán diferentes cada vez que los tomes.",
              })}
              {question({
                key: 3,
                question:
                  "¿Otorgan algún certificado o reconocimiento al concluir satisfactoriamente los cursos?",
                answer:
                  "Por el momento no, sin embargo todos nuestros cursos están basados en el plan de estudios de la SEP.",
              })}
              {question({
                key: 4,
                question: "¿Cómo puedo pagar un curso?",
                answer:
                  "Mediante una tarjeta de crédito o débito de cualquier banco, también es posible realizar una transferencia electrónica o a través de Pay Pal.",
              })}
              <Card className="fj_accordionItem border rounded">
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="contactForm"
                  className="fj_cardHeader"
                >
                  <div className="d-flex fj_question">
                    <strong>
                      ¿Cómo me pongo en contacto con ustedes en caso de
                      presentarse dudas?
                    </strong>
                    <i className="fas fa-plus ml-auto plusSymbol" />
                  </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="contactForm">
                  <Card.Body className="fj_answer d-flex flex-column bg-light">
                    <span className="mb-2">
                      Para cualquier aclaración ya sean preguntas relacionadas
                      al curso, dudas o servicios extras, te invitamos a llenar
                      el siguiente formulario para poder darte una pronta y
                      eficaz atención:
                    </span>
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
};
