import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Button, Form, Row, Col } from "react-bootstrap";
import CorrectModal from "./components/CorrectModal";
import WrongModal from "./components/WrongModal";
import ResultsModal from "./components/ResultsModal";
import API from "../utils/API";
import { connect } from "react-redux";

class QuestionsContainer extends PureComponent {
  state = {
    number: 1,
    question: null,
    score: 0,
    // modals
    showCorrectModal: false,
    showWrongModal: false,
    showResultsModal: false,
    // inputRef = React.createRef()
  };

  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    // checks if its the last question
    if (number === questions.length) {
      // IT'S THE LAST QUESTION
      API.registerAttempt({ studentId: student._id, examId, score })
        .then(() => this.setState({ showResultsModal: true }))
        .catch((err) => {
          console.log("Error", err);
          // alert("Ocurrió un error al registrar el examen");
        });
    } else {
      // NEXT QUESTION
      // show correct or wrong modal
      // increment number
      // set new question from the props to the state
      // clear and focus input
      this.setState(
        (prevState) => {
          return { number: prevState.number + 1 };
        },
        () =>
          this.setState(
            {
              question: this.props.questions.filter(
                (q) => q.qNumber === this.state.number
              )[0],
            },
            () => {
              this.inputRef.current.value = "";
              this.inputRef.current.focus();
            }
          )
      );
    }

    // setQuestion(questions.filter((q) => q.qNumber === number)[0]);
    this.setState();
  }

  checkIfRight() {
    // save whatever is in the input
    const userAnswer = this.inputRef.current.value;

    // check if the answer given by the user is the same as the correct answer in the state
    if (userAnswer === this.state.question.qCorrectAnswer) {
      this.setState({});
      setShowCorrectModal(true);
      setScore(score + 10);
    } else {
      setShowWrongModal(true);
    }
  }

  nextQuestion = () => {
    this.checkIfRight();

    console.log("score", this.state.score);

    // clean the input
  };

  handleKeyDown = (e) => {
    if (e.key === "Enter") {
      this.nextQuestion();
      console.log("enter key pressed!");
    }
  };

  render() {
    return this.state.question ? (
      <>
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
            <Button
              variant="success"
              className="mt-4"
              onClick={this.nextQuestion}
            >
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
          setShowCorrectModal={this.setShowCorrectModal}
        />
        <WrongModal
          showWrongModal={this.state.showWrongModal}
          setShowWrongModal={this.setShowWrongModal}
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
