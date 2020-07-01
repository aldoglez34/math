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

  // ==============================================
  // COURSES
  // =============================================

  fetchCourseInfo: (courseId, studentId) =>
    axios.get("/api/course/info/" + courseId + "/" + studentId),

  // ==============================================
  // EXAMS
  // =============================================

  fetchExamInfo: (examId) => axios.get("/api/exam/info/" + examId),

  registerAttempt: (data) => axios.put("/api/exam/registerAttempt", data),
};
