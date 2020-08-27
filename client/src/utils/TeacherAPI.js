import axios from "axios";

export default {
  t_fetchCourses: () => axios.get("/courses"),
};
