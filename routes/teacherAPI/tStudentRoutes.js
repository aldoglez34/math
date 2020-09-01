const router = require("express").Router();
const model = require("../../models");

// t_fetchStudents()
// matches with /teacherAPI/students/all
router.get("/all", function (req, res) {
  model.Student.find({})
    .sort({ name: 1 })
    .select("name firstSurname email")
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error.");
    });
});

// t_fetchOneStudent()
// matches with /teacherAPI/students/:studentId
router.get("/:studentId", function (req, res) {
  const { studentId } = req.params;

  model.Student.findById(studentId)
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error.");
    });
});

module.exports = router;
