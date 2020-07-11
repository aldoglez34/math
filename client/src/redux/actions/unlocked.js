export const unlockedExam = (data) => {
  return {
    type: "unlocked/new",
    data,
  };
};

export const clearUnlockedExam = () => {
  return {
    type: "unlocked/clear",
  };
};
