import React, { useEffect } from "react";
import { Layout } from "../../components/Layout";
import WelcomeJumbotron from "./welcomejumbotron";
import ThreeColumns from "./threecolumns";
import OurCourses from "./ourcourses";
import TeacherJumbotron from "./teacherjumbotron";
import FacilitiesJumbotron from "./facilitiesjumbotron";
import FAQJumbotron from "./faqjumbotron/FAQJumbotron";
import ScrollButton from "../../components/scrollbutton";
import { useSelector, useDispatch } from "react-redux";
import { clearAdminData } from "../../redux/actions/admin";

const Home = React.memo(() => {
  const dispatch = useDispatch();

  const adminData = useSelector((state) => state.admin);

  useEffect(() => {
    if (adminData) dispatch(clearAdminData());
  }, []);

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
