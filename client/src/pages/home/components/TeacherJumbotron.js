import React, { useEffect } from "react";
import { Jumbotron, Container, Row, Col, Image } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import YouTubePlayer from "youtube-player";

const TeacherJumbotron = React.memo(() => {
  useEffect(() => {
    // var player1, firstStateChange;
    var player1;

    player1 = YouTubePlayer("player-2", {
      videoId: "LssEXs7noKQ",
      width: 450,
      height: 250,
    });

    player1
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
      <Image src="/images/top.png" id="teacher_img" />
      <Jumbotron className="teacherJumbo" fluid>
        <Container>
          <Fade>
            <h2
              className="display-4 text-center"
              style={{ marginBottom: "70px", fontWeight: 600 }}
            >
              Nosotros
            </h2>
          </Fade>
          <Row>
            <Col lg={5} className="d-flex align-items-center">
              <div id="player-2"></div>
            </Col>
            <Col lg={7} className="d-flex align-items-center mt-3 mt-lg-0">
              <Fade right cascade>
                <blockquote className="blockquote mb-0 text-right">
                  <p className="lead mb-1 text-muted">FUNDADOR</p>
                  <h2 className="qj_quote text-dark">
                    "Nuestro compromiso con cada uno de los cursos se refleja en
                    los resultados obtenidos."
                  </h2>
                  <footer className="blockquote-footer">
                    Ing. Luis Rodrigo López Utrera
                  </footer>
                </blockquote>
              </Fade>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </>
  );
});

export default TeacherJumbotron;
