const examReducers = (state = null, action) => {
  switch (action.type) {
    case "exam/set":
      return {
        _id: action.data._id,
        topicName: action.data.topicName,
        reward: action.data.reward,
        name: action.data.name,
        difficulty: action.data.difficulty,
        duration: action.data.duration,
      };
    case "exam/unlock":
      return {
        ...state,
        unlocked: action.data,
      };
    case "exam/setResults":
      return {
        ...state,
        results: action.data,
      };
    case "exam/clear":
      return null;
    default:
      return state;
  }
};

export default examReducers;
