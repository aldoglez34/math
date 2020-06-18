import React, { useEffect } from "react";
import { Accordion, Card, Container } from "react-bootstrap";
import YouTubePlayer from "youtube-player";

const Sum = React.memo(() => {
  useEffect(() => {
    // var player1, firstStateChange;
    var sumvideo;

    sumvideo = YouTubePlayer("sumvideo", {
      videoId: "UFclruOiQRg",
      width: 450,
      height: 250,
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
    <>
      <h3 style={{ fontWeight: 600 }}>Suma</h3>
      <hr className="myDivider" />
      <div id="sumvideo"></div>
      <div className="mt-3">
        <Accordion>
          <Accordion.Toggle
            as={Card.Header}
            className="accordionItem bg-light text-dark rounded"
            eventKey="0"
          >
            <strong>Contenido</strong>
            <i className="fas fa-chevron-down ml-1 pt-1" />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
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
                <a href="/dashboard/arithmetic">
                  <strong title="Ejercicio">
                    <i className="fas fa-book mr-2" />
                    Sumas 1
                  </strong>
                </a>
                <p>
                  Sumas con sumandos hasta el número 20 y resolución de
                  problemas
                </p>
              </div>
              {/* <div>
                  <a href="/dashboard/arithmetic">
                    <strong title="Ejercicio">
                      <i className="fas fa-book mr-2" />
                      Sumas 2
                    </strong>
                  </a>
                  <p>
                    Sumas con sumandos hasta el número 100 y resolución de
                    problemas
                  </p>
                </div>
                <div>
                  <a href="/dashboard/arithmetic">
                    <strong title="Ejercicio">
                      <i className="fas fa-book mr-2" />
                      Sumas 3
                    </strong>
                  </a>
                  <p>
                    Sumas con sumandos hasta el número 1000 y resolución de
                    problemas
                  </p>
                </div>
                <div>
                  <a href="/dashboard/arithmetic">
                    <strong title="Ejercicio">
                      <i className="fas fa-book mr-2" />
                      Sumas 4
                    </strong>
                  </a>
                  <p>
                    Sumas con sumandos hasta el número 5000 y resolución de
                    problemas
                  </p>
                </div>
                <div>
                  <a href="/dashboard/arithmetic">
                    <strong title="Ejercicio">
                      <i className="fas fa-book mr-2" />
                      Sumas 5
                    </strong>
                  </a>
                  <p>Sumas con 3 sumandos hasta el número 5000</p>
                </div>
                <div>
                  <a href="/dashboard/arithmetic">
                    <strong title="Ejercicio">
                      <i className="fas fa-book mr-2" />
                      Sumas 6
                    </strong>
                  </a>
                  <p>Ejercicios para calcular el sumando de una suma</p>
                </div> */}
            </Card.Body>
          </Accordion.Collapse>
        </Accordion>
      </div>
    </>
  );
});

export default Sum;
