import React from "react";
import { StudentLayout } from "../../components/Layout";
import CourseIntro from "../_components/CourseIntro";

const Trigonometry = React.memo(() => {
  const breadcrumb = [
    { text: "Mis cursos", link: "/dashboard" },
    { text: "Trigonometría" },
  ];

  return (
    <StudentLayout breadcrumb={breadcrumb}>
      <CourseIntro
        name="Álgebra"
        description="Es la rama de las matemáticas que estudia las razones
      trigonométricas (seno, coseno, tangente, secante, cosecante y
      cotangente). En éste curso el alumno aprenderá y/o reforzará los
      conceptos básicos de la trigonometría, para que así pueda tener
      las herramientas necesarias para poder encontrar distancias y
      ángulos en triángulos rectángulos y oblicuángulos. Los temas que
      conforman este curso son:"
        topics={[
          "Teorema de Pitágoras",
          "Resolución de triángulos rectángulos",
          "Funciones trigonométricas",
          "Ecuaciones trigonométricas",
          "Ley de senos",
          "Ley de cosenos",
        ]}
      />
    </StudentLayout>
  );
});

export default Trigonometry;
