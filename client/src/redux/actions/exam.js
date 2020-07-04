export const setExam = (data) => {
  return {
    type: "exam/set",
    data,
  };
};

export const clearExam = () => {
  return {
    type: "exam/clear",
  };
};
