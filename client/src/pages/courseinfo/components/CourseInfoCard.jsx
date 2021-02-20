import React from "react";
import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import { array, bool, number, string } from "prop-types";
import cn from "classnames";

import styles from "./courseinfocard.module.scss";

export const CourseInfoCard = React.memo(
  ({
    courseId,
    isCoursePurchased = false,
    lessonCounter,
    price,
    school,
    title,
    topics,
  }) => {
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
                {isCoursePurchased ? (
                  <Button
                    disabled
                    block
                    className={cn(
                      "mb-3",
                      "mt-2",
                      "py-3",
                      "shadow-sm",
                      styles.purchasedButton
                    )}
                    size="lg"
                  >
                    Comprado
                    <i className="fas fa-check ml-2" />
                  </Button>
                ) : (
                  <Button
                    block
                    className={cn(
                      "mb-3",
                      "mt-2",
                      "py-3",
                      "shadow-sm",
                      styles.buyButton
                    )}
                    href={`/payment/${school}/${courseId}`}
                    size="lg"
                  >
                    Comprar
                    <i className="fas fa-cart-plus ml-2" />
                  </Button>
                )}
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
  isCoursePurchased: bool,
  lessonCounter: number.isRequired,
  price: number.isRequired,
  title: string.isRequired,
  topics: array.isRequired,
};
