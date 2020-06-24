// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import DashboardCourseCard from "./components/DashboardCourseCard";
// import API from "../../utils/API";

// const MyCourses = React.memo(() => {
//   const coursesArr = useSelector((state) => state.student.courses);

//   useEffect(() => {
//     // build string from array of courses before making the api call
//     const coursesStr = coursesArr.reduce((acc, cv, idx) => {
//       if (idx === coursesArr.length - 1) {
//         acc += cv;
//       } else {
//         acc += cv + ",";
//       }
//       return acc;
//     }, "");
//     API.getMyCourses(coursesStr)
//       .then((res) => console.log(res.data))
//       .catch((err) => {
//         console.log(err);
//         alert("Ocurrió un error inesperado");
//       });
//   });

//   return (
//     <div className="d-flex mt-4">
//       {/* {student.courses.map((c) => (
//         <DashboardCourseCard key={c} course={c} />
//       ))} */}
//     </div>
//   );
// });

// export default MyCourses;
