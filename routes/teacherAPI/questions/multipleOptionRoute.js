const router = require("express").Router();
const model = require("../../../models");

// t_newMultipleOptionQuestion()
// matches with /teacherAPI/questions/multipleOption/new
router.post("/new", function (req, res) {
  const newQuestion = {
    qType: "multipleOption",
    qInstruction: req.body.qInstruction,
    qTechnicalInstruction: req.body.qTechnicalInstruction
      ? {
          type: "text",
          text: req.body.qTechnicalInstruction,
        }
      : null,
    qMultipleChoice: {
      type: "text",
      textChoices: [
        req.body.qOption1,
        req.body.qOption2,
        req.body.qOption3,
        req.body.qOption4,
      ],
    },
    qCorrectAnswers: [
      {
        answer: req.body.qCorrectAnswer,
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
