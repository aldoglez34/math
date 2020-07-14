import axios from "axios";

export default {
  // ==============================================
  // STUDENTS
  // ==============================================

  fetchStudentByUID: (uid) => axios.get("/api/student/fetchByUID/" + uid),

  registerNewStudent: (data) => axios.post("/api/student/new", data),

  // student panel

  fetchDashboard: (studentId) =>
    axios.get("/api/student/fetchDashboard/" + studentId),

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
  registerPerfectGrade: (data) =>
    axios.put("/api/exam/registerPerfectGrade", data),
  registerReward: (data) => axios.put("/api/exam/registerReward", data),

  unlockExam: (data) => axios.put("/api/exam/unlockExam", data),

  fetchFreestyle: (topicId) => axios.get("/api/exam/freestyle/" + topicId),
};
