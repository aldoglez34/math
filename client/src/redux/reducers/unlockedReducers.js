const unlockedReducers = (state = null, action) => {
  switch (action.type) {
    case "unlock/new":
      return action.data;
    case "unlocked/clear":
      return null;
    default:
      return state;
  }
};

export default unlockedReducers;
