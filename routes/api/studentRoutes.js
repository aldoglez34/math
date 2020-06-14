const router = require("express").Router();
const model = require("../../models");

// registerNewStudent()
// matches with /api/students/new
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

// fetchStudentByUID()
// matches with /api/students/:uid
router.get("/:uid", function (req, res) {
  model.Student.find({ firebaseUID: req.params.uid })
    .then((data) => res.json(data[0]))
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

module.exports = router;
