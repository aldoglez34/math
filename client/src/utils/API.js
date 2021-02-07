import axios from "axios";

export default {
  // ==============================================
  // GUEST
  // ==============================================

  fetchSchoolDropdownItems: () =>
    axios.get("/api/guest/fetchSchoolDropdownItems"),

  fetchLandingPageCourses: () => axios.get("/api/guest/fetchCourses"),

  postMessage: (data) => axios.post("/api/guest/postMessage", data),

  fetchCoursesBySchool: (school) =>
    axios.get("/api/guest/fetchCoursesBySchool/" + school),

  // ==============================================
  // STUDENTS
  // ==============================================

  buyCourse: (data) => axios.put("/api/student/buyCourse", data),

  fetchStudentByUID: (uid) => axios.get("/api/student/fetchByUID/" + uid),

  registerNewStudent: (data) => axios.post("/api/student/new", data),

  fetchMessages: (username) => axios.get("/api/student/messages/" + username),

  fetchUnseeenMessages: (studentId) =>
    axios.get("/api/student/messages/unseen/" + studentId),

  markAllMessagesSeen: (studentId) =>
    axios.put("/api/student/messages/markAllSeen/" + studentId),

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

  registerReward: (data) => axios.put("/api/exam/registerReward", data),

  unlockExam: (data) => axios.put("/api/exam/unlockExam", data),

  // ==============================================
  // FREESTYLE
  // ==============================================

  fetchFreestyle: (topicName) => axios.get("/api/freestyle/" + topicName),

  registerFreestyleAttempt: (data) =>
    axios.put("/api/freestyle/registerAttempt", data),
};
