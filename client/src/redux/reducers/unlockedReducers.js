const unlockedReducers = (state = null, action) => {
  switch (action.type) {
    case "unlocked/new":
      return {
        name: action.data,
      };
    case "unlocked/clear":
      return null;
    default:
      return state;
  }
};

export default unlockedReducers;
