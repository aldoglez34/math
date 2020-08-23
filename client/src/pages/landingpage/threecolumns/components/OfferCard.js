import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

const OfferCard = React.memo(({ img, title, text }) => {
  return (
    <Card className="bg-transparent border-0">
      <div className="text-center mt-4">
        <Card.Img variant="top" src={img} alt="cursos" className="tc_pic" />
      </div>
      <Card.Body>
        <Card.Title>
          <strong>{title}</strong>
        </Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
});

OfferCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default OfferCard;
