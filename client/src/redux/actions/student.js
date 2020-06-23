export const loginStudent = (data) => {
  return {
    type: "student/login",
    data,
  };
};

export const logoutStudent = () => {
  return {
    type: "student/logout",
  };
};

export const buyCourse = (data) => {
  return {
    type: "student/buyCourse",
    data,
  };
};
