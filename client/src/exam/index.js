import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { StudentLayout } from "../components/Layout";
import { Spinner, Button } from "react-bootstrap";
import API from "../utils/API";
import Question from "./Question";
import { setBreadcrumb } from "../redux/actions/breadcrumb";
import { setExam } from "../redux/actions/exam";
import CurrentQuestion from "./CurrentQuestion";

class Exam extends PureComponent {
  state = {
    exam: null,
    questions: null,
    qNumber: 1,
  };

  examId = this.props.routeProps.match.params.examId;
  courseId = this.props.routeProps.match.params.courseId;

  componentDidMount() {
    API.fetchExamInfo(this.examId)
      .then((res) => {
        // set exam and questions
        this.setState({
          exam: { _id: res.data._id, name: res.data.name },
          questions: res.data.questions,
        });
        // set breadcrumb info
        this.props.setBreadcrumb([
          { text: "Mis cursos", link: "/dashboard" },
          {
            text: this.props.reduxCourse.name,
            link: "/course/" + this.courseId,
          },
          { text: res.data.name },
        ]);
        // set set exam info
        this.props.setExam({ _id: res.data._id, name: res.data.name });
      })
      .catch((err) => {
        console.log(err);
        alert("Ocurrió un error al cargar las preguntas de tu examen");
      });
  }

  render() {
    return (
      <StudentLayout>
        {this.state.questions && this.state.exam ? (
          <>
            {/* title */}
            <div className="d-flex">
              <h1 className="mb-0 pr-2">{this.state.exam.name}</h1>
              <div className="ml-auto d-flex align-items-end">
                <Button
                  href={"/course/" + this.courseId}
                  variant="link"
                  className="text-danger ml-auto"
                  style={{ fontSize: "25px" }}
                >
                  <i className="fas fa-times" />
                </Button>
              </div>
            </div>
            <hr className="mt-0" />
            {/* question */}
            <CurrentQuestion
              question={this.state.questions[this.state.qNumber]}
            />
            {/* <Question
              questions={this.state.questions}
              examId={this.examId}
              courseId={this.courseId}
            /> */}
          </>
        ) : (
          <div className="text-center mt-4 pt-4">
            <Spinner animation="border" variant="primary" />
          </div>
        )}
      </StudentLayout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    reduxCourse: state.course,
  };
};

const mapDispatchToProps = {
  setBreadcrumb,
  setExam,
};

export default connect(mapStateToProps, mapDispatchToProps)(Exam);
