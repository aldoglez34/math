module.exports = (coursesIds, examsArr) => [
  {
    firebaseUID: "GJ8odBBzGHgKtA45uC6luESZM1g2",
    name: "Luis",
    firstSurname: "López",
    secondSurname: "Utrera",
    email: "lrlu.very@gmail.com",
    courses: [...coursesIds],
    exams: examsArr.reduce((acc, cv) => {
      if (cv.difficulty === "Basic") acc.push(cv.examId);
      return acc;
    }, []),
  },
  {
    firebaseUID: "G4mcLYFVuVPfgBlDP5zYbm54anm1",
    name: "Aldo",
    firstSurname: "Solano",
    secondSurname: "González",
    email: "aldoglez34@gmail.com",
    courses: [...coursesIds],
    exams: examsArr.reduce((acc, cv) => {
      if (cv.difficulty === "Basic") acc.push(cv.examId);
      return acc;
    }, []),
  },
  {
    firebaseUID: "mUxhiHVYzSQYofhgVgUdUuVQTLB2",
    name: "Testence",
    firstSurname: "Guest",
    secondSurname: "Guest",
    email: "guest@guest.com",
    courses: [...coursesIds],
    exams: examsArr.reduce((acc, cv) => {
      if (cv.difficulty === "Basic") acc.push(cv.examId);
      return acc;
    }, []),
  },
];
