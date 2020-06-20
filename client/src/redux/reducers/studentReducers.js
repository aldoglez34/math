const studentReducers = (state = null, action) => {
  switch (action.type) {
    case "student/login":
      return {
        name: action.data.name,
        firstSurname: action.data.firstSurname,
        secondSurname: action.data.secondSurname,
        email: action.data.email,
        courses: action.data.courses,
      };
    case "student/logout":
      return null;
    default:
      return state;
  }
};

export default studentReducers;
