import axios from "axios";

export default {
  // ==============================================
  // COURSES
  // =============================================
  t_fetchCourses: () => axios.get("/teacherAPI/courses/all"),

  t_fetchOneCourse: (courseId) => axios.get("/teacherAPI/courses/" + courseId),

  // new

  t_newCourse: (data) => axios.post("/teacherAPI/courses/new", data),

  // updating

  t_updateCourseName: (data) =>
    axios.put("/teacherAPI/courses/update/name", data),

  t_updateCourseSchool: (data) =>
    axios.put("/teacherAPI/courses/update/school", data),

  t_updateCoursePrice: (data) =>
    axios.put("/teacherAPI/courses/update/price", data),

  t_updateCourseDescription: (data) =>
    axios.put("/teacherAPI/courses/update/description", data),

  t_updateCourseSummary: (data) =>
    axios.put("/teacherAPI/courses/update/summary", data),

  // ==============================================
  // TOPICS
  // =============================================

  t_fetchTopic: (courseId, topicId) =>
    axios.get("/teacherAPI/topics/" + courseId + "/" + topicId),

  t_updateTopicName: (data) =>
    axios.put("/teacherAPI/topics/update/name", data),

  t_updateTopicSubject: (data) =>
    axios.put("/teacherAPI/topics/update/subject", data),

  t_updateTopicDescription: (data) =>
    axios.put("/teacherAPI/topics/update/description", data),

  t_updateTopicFreestyleTimer: (data) =>
    axios.put("/teacherAPI/topics/update/timer", data),

  // ==============================================
  // STUDENTS
  // =============================================

  t_fetchStudents: () => axios.get("/teacherAPI/students/all"),

  t_fetchOneStudent: (studentId) =>
    axios.get("/teacherAPI/students/" + studentId),
};
