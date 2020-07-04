import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Button, Form, Row, Col, Spinner } from "react-bootstrap";
import API from "../utils/API";
import { connect } from "react-redux";

class Question extends PureComponent {
  state = {
    number: 1,
    question: null,
    studentAnswers: [],
    //
    isLoading: false,
  };

  inputRef = React.createRef();

  componentDidMount() {
    console.log("====================================");
    console.log("componentDidMount");

    this.setQuestion();
  }

  setQuestion() {
    console.log("setting a question");

    // set question (only if number is less or equal than questions length)
    if (this.state.number <= this.props.questions.length) {
      this.setState(
        {
          question: this.props.questions.filter(
            (q) => q.qNumber === this.state.number
          )[0],
        },
        () => this.inputRef.current.focus()
      );
    } else if (this.state.number === this.props.questions.length) {
      console.log("FINAL QUESTION, CAN'T SET NEW QUESTION");
    }
  }

  nextQuestion = () => {
    // add answer to the student answers arr
    const userAnswer = this.inputRef.current.value;
    this.setState(
      (prevState) => {
        return {
          studentAnswers: [
            ...prevState.studentAnswers,
            { qNumber: this.state.number, answer: userAnswer },
          ],
        };
      },
      () => {
        // clear the input and check if next question or not
        this.inputRef.current.value = "";
        if (this.state.number < this.props.questions.length) {
          console.log("avanzando a siguiente pregunta");
          this.setState((prevState) => {
            return { number: prevState.number + 1 };
          });
        } else {
          console.log("ya no se avanza porque es la última");
        }
      }
    );
  };

  lastQuestion() {
    // add answer to the student answers arr
    const userAnswer = this.inputRef.current.value;
    this.setState(
      (prevState) => {
        return {
          studentAnswers: [
            ...prevState.studentAnswers,
            { qNumber: this.state.number, answer: userAnswer },
          ],
        };
      },
      () => {
        console.log("aquí termina todo");
      }
    );
  }

  handleKeyDown = (e) => {
    if (e.key === "Enter") {
      this.nextQuestion();
    }
  };

  componentDidUpdate(prevProps, prevState) {
    // if the NUMBER changes, re-render and set a new question
    if (prevState.number !== this.state.number) {
      this.setQuestion();
    }
  }

  render() {
    return this.state.question ? (
      <>
        <Row className="mx-lg-1">
          {console.log("rendering...")}
          <Col lg={{ span: 7, offset: 2 }} className="p-4">
            {/* INSTRUCTION */}
            <h4>
              <span className="mr-1">{this.state.question.qNumber + "."}</span>
              <span>{this.state.question.qInstruction}</span>
            </h4>
            {/* TECHNICAL INSTRUCTION */}
            <h4>{this.state.question.qTechnicalInstruction}</h4>
            {/* INPUT FORM */}
            <Form className="w-50 mt-4">
              <div className="d-flex flex-row mt-3">
                <Form.Control
                  type="text"
                  maxLength="10"
                  ref={this.inputRef}
                  onKeyDown={this.handleKeyDown}
                />
                {/* question complement (if any) */}
                {this.state.question.qCorrectAnswerComplement ? (
                  <h4 className="ml-2 mb-0">
                    {this.state.question.qCorrectAnswerComplement}
                  </h4>
                ) : null}
              </div>
            </Form>
            {/* QUESTION COMMENT */}
            {this.state.question.qComment ? (
              <span className="text-muted mt-2 mb-2">
                {this.state.question.qComment}
              </span>
            ) : null}
            {/* buttons */}
            {this.state.number < this.props.questions.length ? (
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
            )}
          </Col>
        </Row>
      </>
    ) : (
      <div className="text-center mt-4 pt-4">
        <Spinner animation="border" variant="success" />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    student: state.student,
  };
};

Question.propTypes = {
  questions: PropTypes.array.isRequired,
  examId: PropTypes.string.isRequired,
  courseId: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Question);
