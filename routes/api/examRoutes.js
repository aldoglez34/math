const router = require("express").Router();
const model = require("../../models");

// fetchExamInfo()
// matches with /api/exam/info/:examId
router.get("/info/:examId", function (req, res) {
  const examId = req.params.examId;

  model.Exam.findById(examId)
    .select("name questions")
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

// registerScore()
// matches with /api/exam/registerScore
router.put("/registerScore", function (req, res) {
  const { studentId, examId, score } = req.body;

  const obj = { student: studentId, date: Date.now(), score };

  model.Exam.findOneAndUpdate(
    { _id: examId },
    { $set: { highestScores: obj } },
    { new: true }
  )
    .then(() => {
      res.send("Se registró un nuevo score");
    })
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error");
    });
});

module.exports = router;
