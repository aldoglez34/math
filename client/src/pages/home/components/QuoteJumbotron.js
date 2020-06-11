import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import Fade from "react-reveal/Fade";

const QuoteJumbotron = React.memo(() => {
  const jumboStyle = {
    backgroundImage: "url('/images/dot-grid.png')",
  };

  const quoteStyle = {
    fontWeight: "lighter",
  };

  return (
    <Jumbotron style={jumboStyle} fluid>
      <Container>
        <Fade>
          <blockquote className="blockquote mb-0">
            <h1 style={quoteStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </h1>
            <footer className="blockquote-footer">Someone famous</footer>
          </blockquote>
        </Fade>
      </Container>
    </Jumbotron>
  );
});

export default QuoteJumbotron;
