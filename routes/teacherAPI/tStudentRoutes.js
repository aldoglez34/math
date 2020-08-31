const router = require("express").Router();
const model = require("../../models");

// t_fetchStudents()
// matches with /teacherAPI/students/all
router.get("/all", function (req, res) {
  model.Student.find({})
    // .sort({ name: 1 })
    // .select("createdAt name")
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});
