import React from "react";
import { Layout, StudentLayout } from "../../components/Layout";
import StudentNav from "../../components/studentnav";
import CourseCard from "./components/CourseCard";
// import { useSelector } from "react-redux";

const Dashboard = React.memo(() => {
  // const student = useSelector((state) => state.student);

  return (
    <Layout>
      <StudentNav />
      <StudentLayout>
        {/* <h2 style={{ fontWeight: 600, fontFamily: "Noto Sans" }}>
          {student.name + " " + student.firstSurname}
        </h2>
        <span className="lead">A continuación se muestran tus cursos</span> */}
        <div className="d-flex flex-row flex-wrap mt-3 justify-content-center ">
          <CourseCard
            course="Aritmética"
            description="Aprende a realizar las 4 operaciones básicas con número enteros, decimales y con fracciones."
            link="/dashboard/arithmetic"
            lessons={["Suma"]}
            lastVisited="Última visita hace 3 minutos"
          />
        </div>
      </StudentLayout>
    </Layout>
  );
});

export default Dashboard;
