import axios from "axios";

export default {
  // ==============================================
  // STUDENTS
  // ==============================================

  registerNewStudent: (data) => axios.post("/api/students/new", data),

  fetchStudentByUID: (uid) => axios.get("/api/students/fetchByUID/" + uid),
};
