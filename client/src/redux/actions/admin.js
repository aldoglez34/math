export const setBackBttn = (data) => {
  return {
    type: "backBttn/set",
    data,
  };
};

export const clearBackBttn = () => {
  return {
    type: "backBttn/clear",
  };
};

export const setTitle = (data) => {
  return {
    type: "title/set",
    data,
  };
};
