import axios from "axios";

export default {
  // ==============================================
  // GUEST
  // ==============================================

  postMessage: (data) => axios.post("/api/guest/postMessage", data),

  // ==============================================
  // STUDENTS
  // ==============================================

  fetchStudentByUID: (uid) => axios.get("/api/student/fetchByUID/" + uid),

  registerNewStudent: (data) => axios.post("/api/student/new", data),

  fetchMessages: (studentId) => axios.get("/api/student/messages/" + studentId),

  // student panel

  fetchDashboard: (studentId) =>
    axios.get("/api/student/fetchDashboard/" + studentId),

  // ==============================================
  // COURSES
  // ==============================================

  fetchCourseInfo: (courseId, studentId) =>
    axios.get("/api/course/info/" + courseId + "/" + studentId),

  // ==============================================
  // EXAMS
  // ==============================================

  fetchExamInfo: (examId) => axios.get("/api/exam/info/" + examId),

  registerAttempt: (data) => axios.put("/api/exam/registerAttempt", data),
  registerPerfectGrade: (data) =>
    axios.put("/api/exam/registerPerfectGrade", data),
  registerReward: (data) => axios.put("/api/exam/registerReward", data),

  unlockExam: (data) => axios.put("/api/exam/unlockExam", data),

  // ==============================================
  // FREESTYLE
  // ==============================================

  fetchFreestyle: (topicName) => axios.get("/api/freestyle/" + topicName),

  registerFreestyleAttempt: (data) =>
    axios.put("/api/freestyle/registerAttempt", data),
};
