import axios from "axios";

export default {
  t_fetchCourses: () => axios.get("/teacherAPI/courses/all"),

  t_fetchOneCourse: (courseId) => axios.get("/teacherAPI/courses/" + courseId),

  t_fetchStudents: () => axios.get("/teacherAPI/students/all"),
};
