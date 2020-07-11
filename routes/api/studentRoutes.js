const router = require("express").Router();
const model = require("../../models");

// fetchStudentByUID()
// matches with /api/student/fetchByUID/:uid
router.get("/fetchByUID/:uid", function (req, res) {
  model.Student.find({ firebaseUID: req.params.uid })
    .select("name firstSurname secondSurname email")
    .then((data) => res.json(data[0]))
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

// registerNewStudent()
// matches with /api/student/new
router.post("/new", function (req, res) {
  model.Student.create({
    firebaseUID: req.body.firebaseUID,
    name: req.body.name,
    firstSurname: req.body.firstSurname,
    secondSurname: req.body.secondSurname,
    email: req.body.email,
  })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

// fetchDashboard()
// matches with /api/student/fetchDashboard/:studentId
router.get("/fetchDashboard/:studentId", function (req, res) {
  const studentId = req.params.studentId;

  model.Student.findById(studentId)
    .select("courses attempts rewards perfectGrades")
    .lean()
    .populate(
      "courses",
      "name shortDescription topics._id topics.subject topics.name"
    )
    .then((data) => {
      const myRewards = data.rewards;

      res.json({
        ...data,
        courses: data.courses.reduce((acc, cv) => {
          acc.push({
            ...cv,
            topics: cv.topics.reduce((acc, cv) => {
              acc.push({
                ...cv,
                hasReward: myRewards.filter((mr) => mr.topicName === cv.name)
                  .length
                  ? true
                  : false,
              });
              return acc;
            }, []),
          });
          return acc;
        }, []),
      });
    })
    .catch((err) => {
      console.log("error", err);
      res.send("Ocurrió un error en el servidor");
    });
});

// fetchRewards()
// matches with /api/student/rewards/:studentId
router.get("/rewards/:studentId", function (req, res) {
  model.Student.findById(req.params.studentId)
    .select("rewards")
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error");
    });
});

module.exports = router;
