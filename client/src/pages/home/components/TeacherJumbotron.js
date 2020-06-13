import React, { useEffect } from "react";
import { Jumbotron, Button, Container, Row, Col, Image } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import YouTubePlayer from "youtube-player";

const TeacherJumbotron = React.memo(() => {
  useEffect(() => {
    var player1, firstStateChange;

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
        console.log("Iniciando video 2");
      });
  }, []);

  return (
    <Jumbotron className="teacherJumbo" fluid>
      <Container>
        <Row>
          <Col>
            <div id="player-2"></div>
          </Col>
          <Col className="text-right">
            <Fade right cascade>
              <p className="lead text-muted">INSTRUCTOR</p>
              <h2 className="qj_quote text-dark">
                Conoce más sobre el instructor y fundador de MeXmáticas
              </h2>
              <Button variant="link">Leer más</Button>
            </Fade>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
});

export default TeacherJumbotron;
