import axios from "axios";

export default {
  // ==============================================
  // STUDENTS
  // ==============================================

  fetchStudentByUID: (uid) => axios.get("/api/student/fetchByUID/" + uid),

  registerNewStudent: (data) => axios.post("/api/student/new", data),

  buyCourse: (data) => axios.put("/api/student/buyCourse", data),

  // student panel

  fetchMyCourses: (studentId) =>
    axios.get("/api/student/fetchCourses/" + studentId),

  registerTry: (data) => axios.put("/api/student/registerTry", data),

  // ==============================================
  // COURSES
  // =============================================

  fetchCourseInfo: (courseId) => axios.get("/api/course/info/" + courseId),

  // ==============================================
  // EXAMS
  // =============================================

  fetchExamInfo: (examId) => axios.get("/api/exam/info/" + examId),
};
