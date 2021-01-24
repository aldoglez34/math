const admin = (state = null, action) => {
  switch (action.type) {
    case "admin/setCourse":
      return {
        ...state,
        courseId: action.data.courseId,
        courseName: action.data.courseName,
      };

    case "admin/setTitle":
      return { ...state, title: action.data };

    default:
      return state;
  }
};

export default admin;
