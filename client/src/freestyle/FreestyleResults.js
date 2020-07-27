import React, { useState, useEffect } from "react";
import { StudentLayout } from "../components/Layout";
import { useSelector, useDispatch } from "react-redux";
import { setBreadcrumb } from "../redux/actions/breadcrumb";

const FreestyleResults = React.memo(() => {
  const dispatch = useDispatch();

  const course = useSelector((state) => state.course);
  const reduxExam = useSelector((state) => state.exam);

  useEffect(() => {
    // set breadcrumb
    dispatch(
      setBreadcrumb([
        { text: "Mis cursos", link: "/dashboard" },
        {
          text: course.name,
          link: "/course",
        },
        {
          text: reduxExam.topicName,
          link: "/course/#" + reduxExam.topicName,
        },
        { text: reduxExam.name },
      ])
    );
  }, []);

  return (
    <StudentLayout>
      <h1>aquí van los results</h1>
    </StudentLayout>
  );
});

export default FreestyleResults;
