import React, { useEffect } from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import YouTubePlayer from "youtube-player";
import "./teacherjumbotron.scss";

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
    <Jumbotron className="teacherJumbo" fluid>
      <Container>
        {/* <Fade>
          <h2
            className="display-4 text-center mb-4"
            style={{ fontWeight: 600 }}
          >
            Nosotros
          </h2>
          <p className="lead text-left text-lg-center oc_subtitle mb-4 pb-4">
            MeXmáticas explica de una manera sencilla y versátil cada uno de los
            temas de los diferentes cursos que conforman esta plataforma;
            logrando que los alumnos alcancen sus metas, aclaren sus dudas y
            puedan llegar a decir: ‘‘¡Ah! ¡Esto era así!’’.
          </p>
        </Fade> */}
        <Row>
          <Col lg={7} className="d-flex align-items-center mt-3 mt-lg-0">
            <Fade cascade>
              <blockquote className="blockquote mb-0">
                <p className="lead mb-1 text-muted">FUNDADOR</p>
                <h2 className="qj_quote text-dark">
                  "Nuestro compromiso con cada uno de los cursos se refleja en
                  los resultados obtenidos."
                </h2>
                <footer className="blockquote-footer">
                  M.C. Luis Rodrigo López Utrera
                </footer>
              </blockquote>
            </Fade>
          </Col>
          <Col lg={5} className="d-flex align-items-center">
            <div id="player-2"></div>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
});

export default TeacherJumbotron;
