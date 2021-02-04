import React, { useEffect } from "react";
import { Layout } from "../../components/Layout";
import { ScrollButton } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { clearAdminData } from "../../redux/actions/admin";
import {
  WelcomeJumbotron,
  ThreeColumns,
  OurCourses,
  TeacherJumbotron,
  FacilitiesJumbotron,
  FAQJumbotron,
} from "./sections";

export const LandingPage = () => {
  const dispatch = useDispatch();

  const adminData = useSelector((state) => state.admin);

  useEffect(() => {
    if (adminData) dispatch(clearAdminData());
  }, [adminData, dispatch]);

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
};
