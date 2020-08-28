import axios from "axios";

export default {
  t_fetchCourses: () => axios.get("/teacherAPI/courses"),

  t_fetchOneCourse: (courseId) => axios.get("/teacherAPI/course/" + courseId),
};
