import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Form } from "react-bootstrap";

const CurrentQuestion = React.memo(({ question }) => {
  return (
    <Row className="mx-lg-1">
      <Col lg={{ span: 7, offset: 2 }} className="p-4">
        {/* INSTRUCTION */}
        <h4>
          <span className="mr-1">{question.qNumber + "."}</span>
          <span>{question.qInstruction}</span>
        </h4>
        {/* TECHNICAL INSTRUCTION */}
        <h4>{question.qTechnicalInstruction}</h4>
        {/* INPUT FORM */}
        <Form className="w-50 mt-4">
          <div className="d-flex flex-row mt-3">
            <Form.Control
              type="text"
              maxLength="10"
              //   ref={this.inputRef}
              //   onKeyDown={this.handleKeyDown}
            />
            {/* question complement (if any) */}
            {question.qCorrectAnswerComplement ? (
              <h4 className="ml-2 mb-0">{question.qCorrectAnswerComplement}</h4>
            ) : null}
          </div>
        </Form>
        {/* QUESTION COMMENT */}
        {question.qComment ? (
          <span className="text-muted mt-2 mb-2">{question.qComment}</span>
        ) : null}
        {/* buttons */}
        {/* {this.state.number < this.props.questions.length ? (
          <Button
            variant="success"
            className="shadow-sm mt-4"
            onClick={this.nextQuestion}
          >
            Siguiente
          </Button>
        ) : (
          <Button
            variant="primary"
            className="shadow-sm mt-4"
            onClick={this.lastQuestion}
          >
            Finalizar
          </Button>
        )} */}
      </Col>
    </Row>
  );
});

CurrentQuestion.propTypes = {
  question: PropTypes.object.isRequired,
};

export default CurrentQuestion;
