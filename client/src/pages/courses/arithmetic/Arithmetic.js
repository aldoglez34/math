import React from "react";
import { Layout, StudentLayout } from "../../../components/Layout";
import StudentNav from "../../../components/studentnav";
import "./arithmetic.scss";
import Sum from "./sum";

const Arithmetic = React.memo(() => {
  const breadcrumb = [{ text: "Aritmética", link: "/dashboard/arithmetic" }];

  return (
    <Layout>
      <StudentNav breadcrumb={breadcrumb} />
      <StudentLayout>
        {/* intro */}
        <h2 style={{ fontWeight: 600 }}>Bienvenido al curso de Aritmética</h2>
        <hr className="myDivider" />
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
          <li>Resolver problemas usando la regla de tres directa e inversa</li>
          <li>
            Encontrar el perímetro, área y el volumen de figuras geométricas
          </li>
        </ul>
        {/* sum */}
        <Sum />
      </StudentLayout>
    </Layout>
  );
});

export default Arithmetic;
