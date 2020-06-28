const router = require("express").Router();
const model = require("../../models");

// fetchStudentByUID()
// matches with /api/student/fetchByUID/:uid
router.get("/fetchByUID/:uid", function (req, res) {
  model.Student.find({ firebaseUID: req.params.uid })
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

// buyCourse()
// matches with /api/student/buyCourse
router.put("/buyCourse", function (req, res) {
  const { studentId, courseId } = req.body;

  model.Student.findByIdAndUpdate(studentId, {
    $push: { courses: courseId },
  })
    .then(() => {
      // console.log(data);
      res.send("Curso comprado con éxito");
    })
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error");
    });
});

// fetchMyCourses()
// matches with /api/student/fetchCourses/:studentId
router.get("/fetchCourses/:studentId", function (req, res) {
  const studentId = req.params.studentId;

  model.Student.findById(studentId)
    .select("courses")
    .lean()
    .populate("courses", "name shortDescription topics.subject topics.name")
    .then((data) => res.json(data.courses))
    .catch((err) => {
      console.log("error", err);
      res.send("Ocurrió un error en el servidor");
    });
});

module.exports = router;
