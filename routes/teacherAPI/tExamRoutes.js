const router = require("express").Router();
const model = require("../../models");

// t_newExam()
// matches with /teacherAPI/exam/new
router.put("/new", function (req, res) {
  const examData = {
    difficulty: req.body.difficulty,
    name: req.body.name,
    description: req.body.description,
    duration: req.body.duration,
  };

  console.log("\n" + examData.toString() + "\n");

  model.Course.findOneAndUpdate(
    {
      _id: req.body.courseId,
      "topics._id": req.body.topicId,
    },
    {
      $push: {
        "topics.$.exams": examData,
      },
    }
  )
    .then(() => {
      res.send("El examen fue agregado con éxito.");
    })
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error");
    });
});

module.exports = router;
