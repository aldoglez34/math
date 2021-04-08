const router = require("express").Router();
const model = require("../../models");

// t_newSimpleQuestion()
// matches with /teacherAPI/questions/simpleQuestion/new
router.post("/simpleQuestion/new", function (req, res) {
  const newQuestion = {
    qType: "simple",
    qInstruction: req.body.qInstruction,
    qTechnicalInstruction: req.body.qTechnicalInstruction
      ? {
          type: "text",
          text: req.body.qTechnicalInstruction,
        }
      : null,
    qCorrectAnswers: [
      {
        answer: req.body.qCorrectAnswers,
        complementLeft: req.body.qCALeft,
        complementRight: req.body.qCARight,
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
      res.send("La pregunta fue agregada con éxito.");
    })
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error");
    });
});

// t_newSimpleWithImageQuestion()
// matches with /teacherAPI/questions/simpleWithImage/new
router.post("/simpleWithImage/new", function (req, res) {
  const { courseId, examId, topicId } = req.body;

  const newQuestion = {
    qType: "simpleWithPic",
    qInstruction: req.body.qInstruction,
    qTechnicalInstruction: {
      type: "image",
    },
    qCorrectAnswers: [
      {
        answer: req.body.qCorrectAnswers,
        complementLeft: req.body.qCALeft,
        complementRight: req.body.qCARight,
      },
    ],
    qComment: req.body.qComment,
  };

  model.Exam.findOneAndUpdate(
    { _id: examId },
    { $push: { questions: newQuestion } },
    { new: true } // return the updated object
  )
    .then((exam) => {
      // get the newly created question id
      const questionId = exam.questions[exam.questions.length - 1]._id;

      const firebasePath = `${courseId}/${topicId}/exams/${examId}/${questionId}/imagen`;

      // now rename the question link in mongo
      model.Exam.findOneAndUpdate(
        { _id: examId, "questions._id": questionId },
        {
          $set: { "questions.$.qTechnicalInstruction.imageLink": firebasePath },
        }
      )
        .then(() => res.send(questionId))
        .catch((err) => {
          console.log("@error", err);
          res.status(422).send("Ocurrió un error.");
        });
    })
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error.");
    });
});

// ==========================================================
// t_newImageWithTwoAnswersQuestion()
// matches with /teacherAPI/questions/imageWithTwoAnswers/new
router.post("/imageWithTwoAnswers/new", function (req, res) {
  const { courseId, examId, topicId } = req.body;

  const newQuestion = {
    qType: "imageWithTwoAnswers",
    qInstruction: req.body.qInstruction,
    qTechnicalInstruction: {
      type: "image",
    },
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
    { _id: examId },
    { $push: { questions: newQuestion } },
    { new: true } // return the updated object
  )
    .then((exam) => {
      // get the newly created question id
      const questionId = exam.questions[exam.questions.length - 1]._id;

      const firebasePath = `${courseId}/${topicId}/exams/${examId}/${questionId}/imagen`;

      // now rename the question link in mongo
      model.Exam.findOneAndUpdate(
        { _id: examId, "questions._id": questionId },
        {
          $set: { "questions.$.qTechnicalInstruction.imageLink": firebasePath },
        }
      )
        .then(() => res.send(questionId))
        .catch((err) => {
          console.log("@error", err);
          res.status(422).send("Ocurrió un error.");
        });
    })
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error.");
    });
});

// t_newSimpleWithTwoAnswersQuestion()
// matches with /teacherAPI/questions/simpleWithTwoAnswers/new
router.post("/simpleWithTwoAnswers/new", function (req, res) {
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
    { $push: { questions: newQuestion } }
  )
    .then(() => res.send("La pregunta fue agregada con éxito."))
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error");
    });
});

// t_newMultipleOptionQuestion()
// matches with /teacherAPI/questions/multipleOption/new
router.post("/multipleOption/new", function (req, res) {
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
    { $push: { questions: newQuestion } }
  )
    .then(() => res.send("La pregunta fue agregada con éxito."))
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error");
    });
});

// t_newMultipleOptionWithImage()
// matches with /teacherAPI/questions/multipleOptionWithImage/new
router.post("/multipleOptionWithImage/new", function (req, res) {
  const { courseId, examId, topicId } = req.body;

  const newQuestion = {
    qType: "multipleOptionWithPic",
    qInstruction: req.body.qInstruction,
    qTechnicalInstruction: {
      type: "image",
      imageLink: "temp",
    },
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
        answer: req.body.qCorrectAnswers,
        complementLeft: req.body.qCALeft,
        complementRight: req.body.qCARight,
      },
    ],
    qComment: req.body.qComment,
  };

  model.Exam.findOneAndUpdate(
    { _id: req.body.examId },
    { $push: { questions: newQuestion } },
    { new: true } // return the updated object
  )
    .then((exam) => {
      const questionId = exam.questions[exam.questions.length - 1]._id;

      const firebasePath = `${courseId}/${topicId}/exams/${examId}/${questionId}/imagen`;

      // now rename the question link in mongo
      model.Exam.findOneAndUpdate(
        { _id: req.body.examId, "questions._id": questionId },
        {
          $set: { "questions.$.qTechnicalInstruction.imageLink": firebasePath },
        }
      )
        .then(() => res.send(questionId))
        .catch((err) => {
          console.log("@error", err);
          res.status(422).send("Ocurrió un error.");
        });
    })
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error.");
    });
});

// t_deleteQuestion()
// matches with /teacherAPI/questions/delete
router.put("/delete", function (req, res) {
  const { examId, questionId } = req.body;

  model.Exam.updateOne(
    { _id: examId },
    { $pull: { questions: { _id: questionId } } }
  )
    .then(() => res.send("La pregunta ha sido eliminada con éxito."))
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
