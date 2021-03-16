const utils = {
  getNextDifficulty: (diff) => {
    switch (diff) {
      case "Basic":
        return "Basic-Intermediate";
      case "Basic-Intermediate":
        return "Intermediate";
      case "Intermediate":
        return "Intermediate-Advanced";
      case "Intermediate-Advanced":
        return "Advanced";
    }
  },
};

module.exports = utils;
