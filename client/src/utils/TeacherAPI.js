import axios from "axios";

export default {
  // ==============================================
  // COURSES
  // =============================================
  t_fetchCourses: () => axios.get("/teacherAPI/courses/all"),

  t_fetchOneCourse: (courseId) => axios.get("/teacherAPI/courses/" + courseId),

  t_updateCourseName: (data) =>
    axios.put("/teacherAPI/courses/update/name", data),

  t_updateCourseDescription: (data) =>
    axios.put("/teacherAPI/courses/update/description", data),

  // ==============================================
  // STUDENTS
  // =============================================

  t_fetchStudents: () => axios.get("/teacherAPI/students/all"),

  t_fetchOneStudent: (studentId) =>
    axios.get("/teacherAPI/students/" + studentId),
};
