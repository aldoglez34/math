export const setCourse = (data) => {
  return {
    type: "admin/setCourse",
    data,
  };
};

export const setTopic = (data) => {
  return {
    type: "admin/setTopic",
    data,
  };
};

export const setTitle = (data) => {
  return {
    type: "admin/setTitle",
    data,
  };
};
