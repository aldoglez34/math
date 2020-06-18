import React from "react";
import { Layout, StudentLayout } from "../../components/Layout";
import StudentNav from "../../components/studentnav";
import CourseCard from "./components/CourseCard";
import { useSelector } from "react-redux";
// import NewCourseCard from "./components/NewCourseCard";

const Dashboard = React.memo(() => {
  const student = useSelector((state) => state.student);

  return (
    <Layout>
      <StudentNav />
      <StudentLayout>
        {student ? (
          <div className="d-flex flex-row">
            <h3>Hola,</h3>
            <h3 className="ml-2" style={{ fontWeight: 600 }}>
              {student.name + " " + student.firstSurname}
            </h3>
          </div>
        ) : (
          <h2>Hola,</h2>
        )}
        <span className="lead">A continuación se muestran tus cursos</span>
        <div className="d-flex flex-row flex-wrap mt-3 justify-content-center ">
          <CourseCard
            course="Aritmética"
            description="Aprende a realizar las 4 operaciones básicas con número enteros, decimales y con fracciones."
            link="/dashboard/arithmetic"
            lessons={[
              "Suma",
              // "Resta",
              // "Multiplicación",
              // "Divisón",
              // "Fracciones",
              // "Decimales",
              // "Figuras geométricas",
            ]}
            lastVisited="Última visita hace 3 minutos"
          />
          {/* <NewCourseCard /> */}
        </div>
      </StudentLayout>
    </Layout>
  );
});

export default Dashboard;
