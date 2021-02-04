import React, { useState, useEffect } from "react";
import { Container, Row, Col, Tab, ListGroup, Spinner } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import { SectionTitle, HomeCard } from "./components";
import API from "../../../utils/API";
import "./ourcourses.scss";

export const OurCourses = React.memo(() => {
  const [courses, setCourses] = useState();

  useEffect(() => {
    API.fetchLandingPageCourses()
      .then((res) => {
        setCourses(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Ocurrió un error");
      });
  }, []);

  return (
    <Container className="oc_jumbo">
      <Fade>
        {/* title */}
        <SectionTitle
          title="Nuestros Cursos"
          text="Cursos de matemáticas para los siguientes niveles educativos."
        />
        {/* content */}
        {courses ? (
          courses.length ? (
            <Tab.Container defaultActiveKey={"#" + courses[0].school}>
              <Row>
                <Col md={5}>
                  <ListGroup className="mb-3 mb-md-0">
                    {courses.map((c) => {
                      return (
                        <ListGroup.Item
                          key={c.school}
                          action
                          href={"#" + c.school}
                          className="courseMenuItem shadow-sm rounded border border-lignt"
                        >
                          <h4 className="mb-0" style={{ fontWeight: 900 }}>
                            <i
                              className="fas fa-graduation-cap mr-3"
                              style={{ color: "#49bf84" }}
                            />
                            {c.school}
                          </h4>
                        </ListGroup.Item>
                      );
                    })}
                  </ListGroup>
                </Col>
                <Col md={7}>
                  <Tab.Content>
                    {courses.map((c) => {
                      return (
                        <Tab.Pane key={c.school} eventKey={"#" + c.school}>
                          <HomeCard
                            courses={c.courses.map((cc) => {
                              return {
                                title: cc.name,
                                list: [...cc.topicsSummary],
                              };
                            })}
                            link={"/courses/" + c.school}
                          />
                        </Tab.Pane>
                      );
                    })}
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          ) : (
            <></>
          )
        ) : (
          <div className="text-center" style={{ margin: "150px 0px" }}>
            <Spinner animation="border" role="status" />
          </div>
        )}
      </Fade>
    </Container>
  );
});
