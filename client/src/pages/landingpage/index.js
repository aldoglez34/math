import React from "react";
import { Layout } from "../../components/Layout";
import WelcomeJumbotron from "./welcomejumbotron";
import ThreeColumns from "./threecolumns";
import OurCourses from "./ourcourses";
import TeacherJumbotron from "./teacherjumbotron";
import FacilitiesJumbotron from "./facilitiesjumbotron";
import FAQJumbotron from "./faqjumbotron/FAQJumbotron";
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
      testtttt
      <ScrollButton scrollStepInPx={150} delayInMs={16.66} />
    </Layout>
  );
});

export default Home;
