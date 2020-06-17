import React from "react";
import Layout from "../../components/Layout";
import { Container } from "react-bootstrap";
import StudentNav from "../../components/studentnav";
import CourseCard from "./components/CourseCard";
import NewCourseCard from "./components/NewCourseCard";

const Dashboard = React.memo(() => {
  return (
    <Layout>
      <StudentNav title="Mis Cursos" />
      <Container className="py-4 px-2 mb-3 px-lg-0">
        {/* card deck -- courses */}
        <div className="d-flex flex-row flex-wrap mt-3 justify-content-center ">
          <CourseCard
            course="Cálculo"
            description="Quisque finibus posuere risus nec faucibus. Mauris dui diam, maximus at molestie in, fringilla id felis. Pellentesque vitae nisi ipsum"
            link="/course/calculus"
            lessons={[
              "Lorem ipsum dolor sit amet",
              "Fusce ornare sed nisi ut posuere",
              "Duis auctor ornare dictum",
            ]}
            lastVisited="Última visita ayer"
          />
          <NewCourseCard />
        </div>
      </Container>
    </Layout>
  );
});

export default Dashboard;
