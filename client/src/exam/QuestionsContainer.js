import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Form, Row, Col } from "react-bootstrap";
import CorrectModal from "./components/CorrectModal";
import WrongModal from "./components/WrongModal";
import ResultsModal from "./components/ResultsModal";
import API from "../utils/API";
import { connect } from "react-redux";

class QuestionsContainer extends Component {
  state = {
    number: 1,
    question: null,
    score: 0,
    // modals
    showCorrectModal: false,
    showWrongModal: false,
    showResultsModal: true,
  };

  inputRef = React.createRef();

  componentDidMount() {
    console.log("COMPONENTDIDMOUNT");

    this.setNewQuestion();
  }

  setNewQuestion() {
    console.log("setting new question");

    // set question
    this.setState(
      {
        question: this.props.questions.filter(
          (q) => q.qNumber === this.state.number
        )[0],
      },
      () => this.inputRef.current.focus()
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.number !== this.state.number) {
      this.setNewQuestion();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.showCorrectModal === false) {
      return false;
    } else {
      return true;
    }
  }

  checkIfLast() {
    // checks if it's the last question
    if (this.state.number === this.props.questions.length) {
      console.log("its the last one, registering in the db...");

      // register attempt
      API.registerAttempt({
        studentId: this.props.student._id,
        examId: this.props.examId,
        score: this.state.score,
      })
        .then((res) => {
          console.log(res.data);
          // show result modal
          this.setState({ showResultsModal: true });
        })
        .catch((err) => {
          console.log("Error", err);
          // alert("Ocurrió un error al registrar el examen");
        });
    } else {
      console.log("next question...");
      // advance to next question
      this.setState(
        (prevState) => {
          return { number: prevState.number + 1 };
        },
        () => this.inputRef.current.focus()
      );
    }
  }

  increment = () => {
    // save whatever is in the input
    const userAnswer = this.inputRef.current.value;
    console.log("la respuesta del usuario es: ", userAnswer);

    // check if the answer given by the user is the same as the correct answer in the state
    if (userAnswer === this.state.question.qCorrectAnswer) {
      console.log("respuesta correcta! setteando score y correct modal");

      this.setState(
        (prevState) => {
          return { score: prevState.score + 10, showCorrectModal: true }; // might have to wait
        },
        () => {
          // clean the input (but wait until the correct modal has disappeared)
          setTimeout(() => {
            console.log("limpiando input y revisando si es la última");

            this.inputRef.current.value = "";
            this.checkIfLast();
          }, 1500);
        }
      );
    } else {
      console.log("respuesta INcorrecta! mostrando wrong modal");
      this.setState({ showWrongModal: false }, () => this.checkIfLast());
    }
  };

  handleKeyDown = (e) => {
    if (e.key === "Enter") {
      this.increment();
    }
  };

  render() {
    return this.state.question ? (
      <>
        {console.log("rendering...")}
        <Row className="mx-lg-1 bg-light mt-4">
          <Col lg={{ span: 7, offset: 2 }} className="p-4">
            {/* INSTRUCTION */}
            <h4>{this.state.question.qInstruction}</h4>
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
            {/* NEXT BUTTON */}
            <Button variant="success" className="mt-4" onClick={this.increment}>
              Siguiente
            </Button>
          </Col>
          <Col className="py-4 d-flex align-items-center justify-content-center bg-white">
            <Row>
              <Col className="text-center">
                <h1 className="display-3 mb-0">{this.state.number}</h1>
                <h5 className="text-muted mb-0" style={{ fontWeight: 800 }}>
                  PREGUNTA
                </h5>
              </Col>
              <Col className="text-center ml-3">
                <h1 className="display-3 mb-0">{this.state.score}</h1>
                <h5 className="text-muted mb-0" style={{ fontWeight: 800 }}>
                  PUNTOS
                </h5>
              </Col>
            </Row>
          </Col>
        </Row>
        {/* modals */}
        <CorrectModal
          showCorrectModal={this.state.showCorrectModal}
          setShowCorrectModal={() => this.setState({ showCorrectModal: false })}
        />
        <WrongModal
          showWrongModal={this.state.showWrongModal}
          setShowWrongModal={() => this.setState({ setShowWrongModal: false })}
        />
        <ResultsModal
          showResultsModal={this.state.showResultsModal}
          courseId={this.props.courseId}
          score={this.state.score}
        />
      </>
    ) : null;
  }
}

const mapStateToProps = (state) => {
  return {
    student: state.student,
  };
};

QuestionsContainer.propTypes = {
  examId: PropTypes.string.isRequired,
  courseId: PropTypes.string.isRequired,
  questions: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, null)(QuestionsContainer);
