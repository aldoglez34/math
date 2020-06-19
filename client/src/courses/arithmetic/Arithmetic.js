import React from "react";
import { StudentLayout } from "../../components/Layout";
import Sum from "./topics/Sum";
import CourseIntro from "../_components/CourseIntro";
import "./arithmetic.scss";

const Arithmetic = React.memo(() => {
  const breadcrumb = [{ text: "Aritmética", link: "/dashboard/arithmetic" }];

  return (
    <StudentLayout breadcrumb={breadcrumb}>
      <CourseIntro
        name="Aritmética"
        description="La aritmética es la rama de las matemáticas que estudia los números
            y los tipos de operaciones (suma, resta, multiplicación y división)
            que se hacen con ellos. En este curso el alumno aprenderá y
            reforzará las operaciones básicas con números enteros, decimales y
            con fracciones, así como también será capaz de calcular el perímetro
            y el área de figuras geométricas. Los temas que conforman éste curso
            son los siguientes:"
        topics={[
          "Suma",
          "Resta",
          "Multiplicación",
          "División",
          "Fracciones",
          "Operaciones con números decimales",
          "Regla de tres",
          "Porcentajes",
          "Perímetro y área de figuras geométricas",
        ]}
      />
      <hr className="dashedDivider" />
      <Sum />
    </StudentLayout>
  );
});

export default Arithmetic;
