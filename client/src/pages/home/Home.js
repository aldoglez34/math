import React from "react";
import { Layout } from "../../components/Layout";
import WelcomeJumbotron from "./components/WelcomeJumbotron";
import ThreeColumns from "./components/ThreeColumns";
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
      <OurCourses />
      <TeacherJumbotron />
      <FacilitiesJumbotron />
      <FAQJumbotron />
      <ScrollButton scrollStepInPx={150} delayInMs={16.66} />
    </Layout>
  );
});

export default Home;
