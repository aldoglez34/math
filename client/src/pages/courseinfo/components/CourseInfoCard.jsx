import React from "react";
import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import { array, number, string } from "prop-types";
import { useSelector } from "react-redux";
import API from "../../../utils/API";
import cn from "classnames";

import styles from "./courseinfocard.module.scss";

export const CourseInfoCard = React.memo(
  ({ courseId, title, price, topics, lessonCounter }) => {
    const student = useSelector((state) => state.student);

    const buyCourseSimulation = () => {
      API.buyCourse({ courseId, studentId: student._id })
        .then((res) => {
          console.log(res.data);
          alert("Has comprado el curso satisfactoriamente.");
          window.location.href = "/";
        })
        .catch((err) => {
          console.log(err);
          alert("Ocurrió un error, vuelve a intentarlo.");
        });
    };

    return (
      <div className="mb-4">
        <Card
          className={cn(
            "border",
            "h-100",
            "mr-0",
            "mr-lg-4",
            "rounded",
            "shadow-sm",
            styles.card
          )}
        >
          <Card.Body className="d-flex flex-column">
            <div className="d-flex flex-row">
              {/* title */}
              <h2 className={cn("mb-0", "pr-2", styles.title)}>{title}</h2>
              {/* topics counter */}
              <Badge
                className={cn(
                  "align-items-center",
                  "d-flex",
                  "ml-auto",
                  styles.badge
                )}
              >
                {lessonCounter + " lecciones"}
              </Badge>
            </div>
            {/* description */}
            <p className="mt-4">
              En la compra de este curso obtienes material didáctico, videos
              exclusivos, asistencia personalizada y cientos de ejercicios sobre
              los siguientes temas:
            </p>
            {/* topics list */}
            {topics.map((l) => {
              return (
                <div key={l}>
                  <i
                    className={cn(
                      "fa-check-circle",
                      "fas",
                      "mr-2",
                      styles.topic
                    )}
                  />
                  <span>{l}</span>
                </div>
              );
            })}
            <div className="text-center mt-auto">
              <strong
                className="mt-1 lead"
                style={{
                  color: "#212529",
                  backgroundColor: "#c6d9d7",
                }}
              >
                Único pago de:
              </strong>
            </div>
            {/* price */}
            <Row>
              <Col>
                <h1 className={cn("mb-0", "text-center", styles.coursePrice)}>
                  {"$" + price + " MXN"}
                </h1>
              </Col>
            </Row>
            {/* button */}
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <Button
                  block
                  className={cn(
                    "mb-3",
                    "mt-2",
                    "py-3",
                    "shadow-sm",
                    styles.buyButton
                  )}
                  onClick={
                    student
                      ? () => buyCourseSimulation()
                      : () =>
                          alert(
                            "Para comprar un curso es necesario estar registrado"
                          )
                  }
                  size="lg"
                >
                  Comprar
                  <i className="fas fa-cart-plus ml-2" />
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    );
  }
);

CourseInfoCard.propTypes = {
  courseId: string.isRequired,
  title: string.isRequired,
  price: number.isRequired,
  topics: array.isRequired,
  lessonCounter: number.isRequired,
};
