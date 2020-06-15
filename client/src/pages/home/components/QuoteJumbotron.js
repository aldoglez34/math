import React, { useEffect } from "react";
import { Jumbotron, Container, Row, Col, Image } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import YouTubePlayer from "youtube-player";

const QuoteJumbotron = React.memo(() => {
  useEffect(() => {
    // var player1, firstStateChange;
    var player1;

    player1 = YouTubePlayer("player-1", {
      videoId: "vgTYW14y85o",
      width: 450,
      height: 250,
    });

    player1
      // Play video is a Promise.
      // 'playVideo' is queued and will execute as soon as player is ready.
      //   .playVideo()
      .stopVideo()
      .then(() => {
        // console.log("Iniciando video 1");
      });
  }, []);

  return (
    <>
      <Image src="/images/top.png" id="qj_img" />
      <Jumbotron className="qj_jumboStyle" fluid>
        <Container>
          <Row>
            <Col lg={7} className="d-flex align-items-center">
              <Fade left cascade>
                <blockquote className="blockquote mb-0">
                  <p className="lead mb-1 text-muted">TESTIMONIO</p>
                  <div className="mb-2">
                    <i className="fas fa-star text-warning mr-1" />
                    <i className="fas fa-star text-warning mr-1" />
                    <i className="fas fa-star text-warning mr-1" />
                    <i className="fas fa-star text-warning mr-1" />
                    <i className="fas fa-star text-warning" />
                  </div>

                  <h2 className="qj_quote text-dark">
                    "Buscamos diferentes escuelas, nos preocupaba que mi nieto
                    no entendiera las reglas básicas, Luis tiene mucha paciencia
                    y hemos visto una mejora significativa."
                  </h2>
                  <footer className="blockquote-footer">
                    Abuela de alumno
                  </footer>
                </blockquote>
              </Fade>
            </Col>
            <Col lg={5} className="d-flex align-items-center mt-4 mt-lg-0">
              <div id="player-1"></div>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </>
  );
});

export default QuoteJumbotron;
