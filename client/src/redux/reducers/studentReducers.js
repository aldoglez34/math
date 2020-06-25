const studentReducers = (state = null, action) => {
  switch (action.type) {
    case "student/login":
      return {
        _id: action.data._id,
        name: action.data.name,
        firstSurname: action.data.firstSurname,
        secondSurname: action.data.secondSurname,
        email: action.data.email,
      };
    case "student/logout":
      return null;
    default:
      return state;
  }
};

export default studentReducers;
