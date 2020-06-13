import React from "react";
import Layout from "../../components/Layout";
import WelcomeJumbotron from "./components/WelcomeJumbotron";
import ThreeColumns from "./components/ThreeColumns";
import QuoteJumbotron from "./components/QuoteJumbotron";
import OurCourses from "./components/OurCourses";
import TeacherJumbotron from "./components/TeacherJumbotron";
import FAQJumbotron from "./components/FAQJumbotron";
import "./homeStyles.scss";

const Home = React.memo(() => {
  return (
    <Layout>
      <WelcomeJumbotron />
      <ThreeColumns />
      <QuoteJumbotron />
      <OurCourses />
      <TeacherJumbotron />
      <FAQJumbotron />
    </Layout>
  );
});

export default Home;
