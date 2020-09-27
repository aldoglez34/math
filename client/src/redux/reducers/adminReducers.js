const adminReducers = (state = null, action) => {
  switch (action.type) {
    case "backBttn/set":
      return {
        backBttn: {
          link: action.data.link,
          text: action.data.text,
        },
      };
    case "backBttn/clear":
      return {
        ...state,
        backBttn: null,
      };
    case "title/set":
      return {
        ...state,
        title: action.data,
      };
    default:
      return state;
  }
};

export default adminReducers;
