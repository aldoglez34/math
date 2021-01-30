const admin = (state = null, action) => {
  switch (action.type) {
    case "admin/clear":
      return null;
    case "admin/setCourse":
      return {
        ...state,
        course: {
          courseId: action.data.courseId,
          courseName: action.data.courseName,
        },
      };
    case "admin/setTopic":
      return {
        ...state,
        topic: {
          topicId: action.data.topicId,
          topicName: action.data.topicName,
        },
      };
    case "admin/setTitle":
      return { ...state, title: action.data };
    default:
      return state;
  }
};

export default admin;
