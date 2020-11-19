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
    qCorrectAnswers: [
      {
        complement: req.body.qCALeft
          ? req.body.qCALeft
          : req.body.qCARight
          ? req.body.qCARight
          : null,
        answer: req.body.qCorrectAnswers,
        placement: req.body.qCALeft
          ? "left"
          : req.body.qCARight
          ? "right"
          : null,
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

// t_deleteQuestion()
// matches with /teacherAPI/questions/delete
router.put("/delete", function (req, res) {
  const { examId, questionId } = req.body;

  model.Exam.updateOne(
    {
      _id: examId,
    },
    {
      $pull: {
        questions: {
          _id: questionId,
        },
      },
    }
  )
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      res.send(err);
    });
});

// t_updateQuestion()
// matches with /teacherAPI/questions/update
router.put("/update", function (req, res) {
  const { examId, questionId, question } = req.body;

  const newQuestion = {
    qInstruction: question.qInstruction,
    qTechnicalInstruction: question.qTechnicalInstruction
      ? {
          type: "text",
          text: question.qTechnicalInstruction,
        }
      : null,
    qCorrectAnswers: [
      {
        complement: question.qCALeft
          ? question.qCALeft
          : question.qCARight
          ? question.qCARight
          : null,
        answer: question.qCorrectAnswers,
        placement: question.qCALeft
          ? "left"
          : question.qCARight
          ? "right"
          : null,
      },
    ],
    qComment: question.qComment,
  };

  model.Exam.updateOne(
    {
      _id: examId,
      "questions._id": questionId,
    },
    {
      $set: {
        "questions.$.qInstruction": newQuestion.qInstruction,
        "questions.$.qTechnicalInstruction": newQuestion.qTechnicalInstruction,
        "questions.$.qComment": newQuestion.qComment,
        "questions.$.qCorrectAnswers": newQuestion.qCorrectAnswers[0],
      },
    }
  )
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      res.send(err);
    });
});

module.exports = router;
