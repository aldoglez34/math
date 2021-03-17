import React from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { StudentLayout } from "../../components/Layout";
import {
  GoBackBttn,
  Grade,
  MyResults,
  ResultMsg,
  UnlockedExam,
} from "./components";

export const ResultsPage = () => {
  const exam = useSelector((state) => state.exam);

  console.log(exam.results);

  return exam.results ? (
    <StudentLayout>
      <Container style={{ paddingBottom: "45px" }}>
        <Row>
          <Col md={{ offset: 3, span: 6 }}>
            <GoBackBttn topicName={exam.topicName} className="mt-4" />
            <Grade
              grade={exam.results.grade}
              corrects={exam.results.corrects}
              incorrects={exam.results.incorrects}
            />
            <hr />
            <ResultMsg grade={exam.results.grade} />
            <hr />
            {exam.results.unlockedExam || exam.results.isFreestyleUnlocked ? (
              <>
                <UnlockedExam
                  unlockedExam={exam.results.unlockedExam}
                  isFreestyleUnlocked={exam.results.isFreestyleUnlocked}
                />
                <hr />
              </>
            ) : null}
            <MyResults results={exam.results.answers} />
            <GoBackBttn topicName={exam.topicName} className="mt-2" />
          </Col>
        </Row>
      </Container>
    </StudentLayout>
  ) : (
    <div className="text-center mt-4 pt-4">
      <Spinner animation="border" variant="success" />
    </div>
  );
};
