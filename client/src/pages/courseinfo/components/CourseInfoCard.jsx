import React, { useEffect } from "react";
import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import { array, bool, number, string } from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { setPurchase } from "../../../redux/actions/purchase";
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
    const dispatch = useDispatch();
    const student = useSelector((state) => state.student);
    const purchase = useSelector((state) => state.purchase);

    const handleBuyButton = () => {
      if (student) {
        window.location.href = `/payment/${school}/${courseId}`;
      } else {
        dispatch(setPurchase({ courseId, school }));
      }
    };

    useEffect(() => {
      if (purchase) window.location.href = "/signup";
    }, [purchase]);

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
              <h2 className={cn("mb-0", "pr-2", styles.title)}>{title}</h2>
              <Badge
                className={cn(
                  "align-items-center",
                  "d-flex",
                  "ml-auto",
                  styles.badge
                )}
              >
                {`${lessonCounter} lecciones`}
              </Badge>
            </div>
            <p className="mt-4">
              En la compra de este curso obtienes material didáctico, videos
              exclusivos, asistencia personalizada y cientos de ejercicios sobre
              los siguientes temas:
            </p>
            {topics.map((l) => {
              return (
                <div key={l}>
                  <i
                    className={cn(
                      "fa-check-circle",
                      "fas",
                      "mr-2",
                      styles.bullet
                    )}
                  />
                  <span>{l}</span>
                </div>
              );
            })}
            <div className="text-center mt-auto">
              <strong className={cn("mt-1", "lead", styles.priceLabel)}>
                Único pago de:
              </strong>
            </div>
            <Row>
              <Col>
                <h1 className={cn("mb-0", "text-center", styles.coursePrice)}>
                  {`$ ${price} MXN`}
                </h1>
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <Button
                  disabled={isCoursePurchased}
                  block
                  className={cn(
                    "mb-3",
                    "mt-2",
                    "py-3",
                    "shadow-sm",
                    isCoursePurchased
                      ? styles.purchasedButton
                      : styles.buyButton
                  )}
                  onClick={handleBuyButton}
                  size="lg"
                >
                  {isCoursePurchased ? (
                    <>
                      <span>Comprado</span>
                      <i className="fas fa-check ml-2" />
                    </>
                  ) : (
                    <>
                      <span>Comprar</span>
                      <i className="fas fa-cart-plus ml-2" />
                    </>
                  )}
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
  isCoursePurchased: bool,
  lessonCounter: number.isRequired,
  price: number.isRequired,
  title: string.isRequired,
  topics: array.isRequired,
};
