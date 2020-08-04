import React, { useEffect } from "react";
import { StudentLayout } from "../components/Layout";
import { useSelector, useDispatch } from "react-redux";
import { setBreadcrumb } from "../redux/actions/breadcrumb";
import API from "../utils/API";

const FreestyleResults = React.memo(() => {
  const dispatch = useDispatch();

  const course = useSelector((state) => state.course);
  const reduxExam = useSelector((state) => state.exam);

  useEffect(() => {
    // register attempt regardless of grade
    API.registerFreestyleAttempt()
      .then((res) => console.log(res.data))
      .catch((err) => console.log("error", err));
  }, []);

  return (
    <StudentLayout>
      <h1>aquí van los results</h1>
    </StudentLayout>
  );
});

export default FreestyleResults;
