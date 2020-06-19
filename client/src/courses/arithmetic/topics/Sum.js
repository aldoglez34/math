import React from "react";
import { Row, Col, ListGroup } from "react-bootstrap";

const Sum = React.memo(() => {
  return (
    <Row id="Suma">
      <Col lg={4}>
        <h1 style={{ fontWeight: 600 }}>Suma</h1>
        <hr className="myDivider" />
        <p className="lead mb-1" style={{ fontWeight: 500 }}>
          <i className="far fa-lightbulb mr-2" />
          En esta sección aprenderás a:
        </p>
        <ul className="mb-1">
          <li>Identificar los elementos y propiedades de la suma</li>
          <li>Resolver problemas usando la suma</li>
        </ul>
        <p className="mb-1" style={{ fontWeight: 500 }}>
          <a
            href="https://youtu.be/UFclruOiQRg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-video mr-2" />
            La suma
          </a>
        </p>
        <p className="mb-1" style={{ fontWeight: 500 }}>
          <a
            href="/pdf/sum/Introducción sumas.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-file-pdf mr-2" />
            Introducción a la suma
          </a>
        </p>
        <p style={{ fontWeight: 500 }}>
          <a
            href="/pdf/sum/Sumas.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-file-pdf mr-2" />
            Ejemplos
          </a>
        </p>
      </Col>
      <Col lg={8} className="mt-2 mt-lg-0">
        <ListGroup>
          <ListGroup.Item
            action
            variant="primary"
            href="/dashboard/arithmetic/exam/sumas1"
          >
            <strong>Ejercicios de sumas 1</strong>
          </ListGroup.Item>
          <ListGroup.Item action variant="primary" disabled>
            <strong>Ejercicios de sumas 2</strong>
          </ListGroup.Item>
          <ListGroup.Item action variant="primary" disabled>
            <strong>Ejercicios de sumas 3</strong>
          </ListGroup.Item>
          <ListGroup.Item action variant="primary" disabled>
            <strong>Ejercicios de sumas 4</strong>
          </ListGroup.Item>
          <ListGroup.Item action variant="primary" disabled>
            <strong>Ejercicios de sumas 5</strong>
          </ListGroup.Item>
          <ListGroup.Item action variant="primary" disabled>
            <strong>Ejercicios de sumas 6</strong>
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
  );
});

export default Sum;
