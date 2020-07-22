import React, { useEffect } from "react";
import { Image } from "react-bootstrap";
import { StudentLayout } from "../components/Layout";
import { useSelector, useDispatch } from "react-redux";
import { setBreadcrumb } from "../redux/actions/breadcrumb";

const Freestyle = React.memo(() => {
  const dispatch = useDispatch();

  const course = useSelector((state) => state.course);
  const reduxExam = useSelector((state) => state.exam);

  useEffect(() => {
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
      <div className="text-center">
        <Image
          src="https://image.flaticon.com/icons/svg/3121/3121743.svg"
          className="my-4"
          width="250"
          height="250"
        />
        <h1>UNDER CONSTRUCTION</h1>
      </div>
    </StudentLayout>
  );
});

export default Freestyle;
