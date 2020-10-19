const router = require("express").Router();
const model = require("../../models");

// t_newSimpleQuestion()
// matches with /teacherAPI/questions/simple/new
router.post("/simple/new", function (req, res) {
  const newQuestion = {
    qInstruction: req.body.qInstruction,
    qTechnicalInstruction: req.body.qTechnicalInstruction
      ? {
          type: "text",
          text: req.body.qTechnicalInstruction,
        }
      : null,
    qCorrectAnswers: [{ answer: req.body.qCorrectAnswers }],
    qComment: req.body.qComment,
  };

  console.log("newQuestion", newQuestion);

  model.Exam.findOneAndUpdate(
    { _id: req.body.examId },
    {
      $push: {
        questions: newQuestion,
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
