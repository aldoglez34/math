const breadcrumbReducers = (state = null, action) => {
  switch (action.type) {
    case "breadcrumb/set":
      return [...action.data];
    case "breadcrumb/clear":
      return null;
    default:
      return state;
  }
};

export default breadcrumbReducers;
