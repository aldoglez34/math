const studentReducers = (state = null, action) => {
  switch (action.type) {
    case "student/login":
      return {
        _id: action.data._id,
        name: action.data.name,
        firstSurname: action.data.firstSurname,
        secondSurname: action.data.secondSurname,
        email: action.data.email,
        courses: action.data.courses,
      };
    case "student/logout":
      return null;
    case "student/buyCourse":
      // first check if the course can be bought
      if (state.courses.includes(action.data)) {
        alert("Ya has comprado este curso.");
        return state;
      } else {
        alert("Felicidades, has comprado este curso de manera satisfactoria.");
        return {
          ...state,
          courses: state.courses.concat(action.data),
        };
      }
    default:
      return state;
  }
};

export default studentReducers;
