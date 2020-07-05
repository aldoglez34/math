const examReducers = (state = null, action) => {
  switch (action.type) {
    case "exam/set":
      return {
        _id: action.data._id,
        name: action.data.name,
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
