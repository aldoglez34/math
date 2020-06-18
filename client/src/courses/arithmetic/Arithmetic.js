import React from "react";
import { Layout, StudentLayout } from "../../components/Layout";
import { Row, Col } from "react-bootstrap";
import StudentNav from "../../components/studentnav";
import "./arithmetic.scss";
import Sum from "./sum";

const Arithmetic = React.memo(() => {
  const breadcrumb = [{ text: "Aritmética", link: "/dashboard/arithmetic" }];

  return (
    <Layout>
      <StudentNav breadcrumb={breadcrumb} />
      <StudentLayout>
        {/* intro */}
        <Row>
          <Col lg={4}>
            <h2 style={{ fontWeight: 600 }} className="display-4">
              Curso de <span className="bg-dark text-light">Aritmética</span>
            </h2>
          </Col>
          <Col lg={8}>
            <p className="lead">En este curso aprenderás a:</p>
            <ul>
              <li>
                Sumar, restar, multiplicar, dividir números enteros, números
                decimales y fracciones
              </li>
              <li>Identificar los 3 tipos de fracciones</li>
              <li>Simplificar fracciones</li>
              <li>
                Encontrar el mínimo común múltiplo y el máximo común divisor de
                números
              </li>
              <li>Convertir unidades de medición</li>
              <li>
                Resolver problemas usando la regla de tres directa e inversa
              </li>
              <li>
                Encontrar el perímetro, área y el volumen de figuras geométricas
              </li>
            </ul>
          </Col>
        </Row>
        <div className="mt-3" />
        <hr className="dashedDivider" />
        <Sum />
      </StudentLayout>
    </Layout>
  );
});

export default Arithmetic;
