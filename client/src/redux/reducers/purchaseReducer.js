const purchaseReducer = (state = null, action) => {
  switch (action.type) {
    case "purchase/set":
      return action.data;
    default:
      return state;
  }
};

export default purchaseReducer;
