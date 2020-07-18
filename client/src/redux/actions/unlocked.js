export const unlockExam = (data) => {
  return {
    type: "unlock/new",
    data,
  };
};

export const clearUnlockedExam = () => {
  return {
    type: "unlocked/clear",
  };
};
