import React from "react";
import Layout from "../../components/Layout";
import WelcomeJumbotron from "./components/WelcomeJumbotron";
import ThreeColumns from "./components/ThreeColumns";
import QuoteJumbotron from "./components/QuoteJumbotron";
import OurCourses from "./components/OurCourses";
import TeacherJumbotron from "./components/TeacherJumbotron";
import FacilitiesJumbotron from "./components/FacilitiesJumbotron";
import FAQJumbotron from "./components/FAQJumbotron";
import "./homeStyles.scss";
import ScrollButton from "../../components/scrollbutton";

const Home = React.memo(() => {
  return (
    <Layout>
      <WelcomeJumbotron />
      <ThreeColumns />
      <QuoteJumbotron />
      <OurCourses />
      <TeacherJumbotron />
      <FacilitiesJumbotron />
      <FAQJumbotron />
      <ScrollButton />
    </Layout>
  );
});

export default Home;
