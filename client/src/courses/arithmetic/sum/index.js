import React, { useEffect } from "react";
import { Row, Col, Accordion, Card, Button } from "react-bootstrap";
import YouTubePlayer from "youtube-player";

const Sum = React.memo(() => {
  useEffect(() => {
    // var player1, firstStateChange;
    var sumvideo;

    sumvideo = YouTubePlayer("sumvideo", {
      videoId: "UFclruOiQRg",
      // width: 450,
      // height: 250,
    });

    sumvideo
      // Play video is a Promise.
      // 'playVideo' is queued and will execute as soon as player is ready.
      //   .playVideo()
      .stopVideo()
      .then(() => {
        // console.log("Iniciando video 2");
      });
  }, []);

  return (
    <Row id="Suma">
      <Col lg={4} style={{ backgroundColor: "#0f4b51" }}>
        <h2
          style={{ fontWeight: 600 }}
          className="display-4 text-light mb-0 mt-2 mt-lg-0"
        >
          Suma
        </h2>
        <hr className="myDivider" />
      </Col>
      <Col lg={8}>
        <div className="text-center pt-4 pt-lg-0 mt-2 mt-lg-0">
          <div id="sumvideo" className="mb-3"></div>
        </div>
        <Accordion>
          <Accordion.Toggle
            as={Card.Header}
            className="accordionItem text-center border-0"
            eventKey="0"
          >
            <Button style={{ fontWeight: 700 }}>
              <i className="fas fa-chevron-down mr-1" />
              CONTENIDO
              <i className="fas fa-chevron-down ml-1" />
            </Button>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="bg-light">
              <div>
                <a
                  href="/pdf/sum/Introducción sumas.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong title="PDF">
                    <i className="fas fa-file-pdf mr-2" />
                    Introducción a la suma
                  </strong>
                </a>
                <p>Elementos y propiedades de la suma</p>
              </div>
              <div>
                <a
                  href="/pdf/sum/Sumas.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong title="PDF">
                    <i className="fas fa-file-pdf mr-2" />
                    Sumas (ejemplos)
                  </strong>
                </a>
                <p>Ejemplos explicados de sumas</p>
              </div>
              <div>
                <a href="/dashboard/arithmetic/exam/sumas1">
                  <strong title="Ejercicios">
                    <i className="fas fa-book mr-2" />
                    Sumas 1
                  </strong>
                </a>
                <p>
                  Sumas con sumandos hasta el número 20 y resolución de
                  problemas
                </p>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Accordion>
      </Col>
    </Row>
  );
});

export default Sum;
