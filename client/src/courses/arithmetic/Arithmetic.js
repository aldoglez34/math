import React from "react";
import { StudentLayout } from "../../components/Layout";
import Topic from "../_components/Topic";
import CourseIntro from "../_components/CourseIntro";
import "./arithmetic.scss";

const Arithmetic = React.memo(() => {
  const breadcrumb = [
    { text: "Mis cursos", link: "/dashboard" },
    { text: "Aritmética" },
  ];

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
      <Topic
        name="Suma"
        learnList={[
          "Identificar los elementos y propiedades de la suma",
          "Resolver problemas usando la suma",
        ]}
        material={[
          {
            link: "https://youtu.be/UFclruOiQRg",
            icon: <i className="fas fa-video mr-2" />,
            text: "La suma",
          },
          {
            link: "/pdf/sum/Introducción sumas.pdf",
            icon: <i className="fas fa-file-pdf mr-2" />,
            text: "Introducción a la suma",
          },
          {
            link: "/pdf/sum/Sumas.pdf",
            icon: <i className="fas fa-file-pdf mr-2" />,
            text: "Ejemplos",
          },
        ]}
        exercises={[
          {
            link: "/dashboard/arithmetic/exam/sumas1",
            text: "Ejercicios de sumas 1",
          },
          {
            link: "/dashboard/arithmetic/exam/sumas2",
            text: "Ejercicios de sumas 2",
          },
          {
            link: "/dashboard/arithmetic/exam/sumas3",
            text: "Ejercicios de sumas 3",
          },
          {
            link: "/dashboard/arithmetic/exam/sumas4",
            text: "Ejercicios de sumas 4",
          },
          {
            link: "/dashboard/arithmetic/exam/sumas5",
            text: "Ejercicios de sumas 5",
          },
          {
            link: "/dashboard/arithmetic/exam/sumas6",
            text: "Ejercicios de sumas 6",
          },
        ]}
      />
    </StudentLayout>
  );
});

export default Arithmetic;
