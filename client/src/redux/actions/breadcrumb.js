export const setBreadcrumb = (data) => {
  return {
    type: "breadcrumb/set",
    data,
  };
};

export const clearBreadcrumb = () => {
  return {
    type: "breadcrumb/clear",
  };
};
