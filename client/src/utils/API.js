import axios from "axios";

export default {
  // ==============================================
  // STUDENTS
  // ==============================================

  registerNewStudent: (data) => axios.post("/api/student/new", data),

  fetchStudentByUID: (uid) => axios.get("/api/student/fetchByUID/" + uid),
};
