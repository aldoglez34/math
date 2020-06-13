const router = require("express").Router();
const model = require("../../models");

// fetchStudentByUID()
// matches with /api/student/:uid
router.get("/:uid", function (req, res) {
  model.Student.find({ firebaseUID: req.params.uid })
    .then((data) => res.json(data[0]))
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

module.exports = router;
