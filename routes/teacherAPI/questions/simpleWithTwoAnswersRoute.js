const router = require("express").Router();
const model = require("../../../models");

// t_newSimpleWithTwoAnswersQuestion()
// matches with /teacherAPI/questions/simpleWithTwoAnswers/new
router.post("/new", function (req, res) {
  const newQuestion = {
    qType: "twoAnswers",
    qInstruction: req.body.qInstruction,
    qTechnicalInstruction: req.body.qTechnicalInstruction
      ? {
          type: "text",
          text: req.body.qTechnicalInstruction,
        }
      : null,
    qCorrectAnswers: [
      {
        answer: req.body.qCorrectAnswer1,
        complementLeft: req.body.qCALeft1,
        complementRight: req.body.qCARight1,
      },
      {
        answer: req.body.qCorrectAnswer2,
        complementLeft: req.body.qCALeft2,
        complementRight: req.body.qCARight2,
      },
    ],
    qComment: req.body.qComment,
  };

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
