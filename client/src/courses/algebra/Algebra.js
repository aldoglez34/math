import React from "react";
import { StudentLayout } from "../../components/Layout";
import CourseIntro from "../_components/CourseIntro";

const Algebra = React.memo(() => {
  const breadcrumb = [
    { text: "Mis cursos", link: "/dashboard" },
    { text: "Álgebra" },
  ];

  return (
    <StudentLayout breadcrumb={breadcrumb}>
      <CourseIntro
        name="Álgebra"
        description="Álgebra es la rama de las matemáticas que estudia la combinación
      de números que cumplen ciertas reglas. El álgebra es el pilar
      fundamental para el estudio de las matemáticas, es por esto que
      el curso comprende los fundamentos básicos del álgebra así como
      algunas de sus aplicaciones. Los temas que conforman éste curso
      son:"
        topics={[
          "Operaciones con números negativos",
          "Expresiones algebraicas",
          "Jerarquía de operaciones y de signos de agrupación",
          "Ecuaciones con una variable",
          "Sistemas de ecuaciones",
          "Desigualdades",
          "Exponentes",
          "Radicales",
          "Productos notables",
          "Factorización",
          "Ecuación cuadrática",
          "Polinomios de grado superior",
        ]}
      />
    </StudentLayout>
  );
});

export default Algebra;
