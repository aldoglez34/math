import React from "react";
import { StudentLayout } from "../../components/Layout";
import CourseCard from "./components/CourseCard";

const Dashboard = React.memo(() => {
  const breadcrumb = [{ text: "Mis cursos" }];

  return (
    <StudentLayout breadcrumb={breadcrumb}>
      <div className="d-flex flex-row flex-wrap justify-content-centeR">
        <CourseCard
          course="Aritmética"
          description="Aprende a realizar las 4 operaciones básicas con número enteros, decimales y con fracciones."
          link="/dashboard/arithmetic"
          lessons={["Suma"]}
          lastVisited="Última visita hace 3 minutos"
        />
        <CourseCard
          course="Álgebra"
          description="Aplica el lenguaje algebraico para solucionar problemas cotidianos."
          link="/dashboard/algebra"
          // lessons={["Suma"]}
          lastVisited="Última visita ayer"
        />
        <CourseCard
          course="Trigonometría"
          description="Resuelve problemas cotidianos aplicando las funciones trigonométricas."
          link="/dashboard/trigonometry"
          // lessons={["Suma"]}
          lastVisited="Última visita ahce dos horas"
        />
      </div>
    </StudentLayout>
  );
});

export default Dashboard;
