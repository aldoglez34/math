const examReducers = (state = null, action) => {
  switch (action.type) {
    case "exam/set":
      return {
        _id: action.data._id,
        name: action.data.name,
      };
    case "exam/setResults":
      return {
        results: action.data.results,
      };
    case "exam/clear":
      return null;
    default:
      return state;
  }
};

export default examReducers;
