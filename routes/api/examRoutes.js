const router = require("express").Router();
const model = require("../../models");

// fetchExamInfo()
// matches with /api/exam/info/:examId
router.get("/info/:examId", function (req, res) {
  const examId = req.params.examId;

  model.Exam.findById(examId)
    .select("name questions qCounter")
    .then((data) => {
      const { qCounter } = data;
      const totalQuestions = data.questions.length;

      // generate random numbers
      const uniqueNumbers = [];
      while (uniqueNumbers.length <= qCounter) {
        let n = Math.floor(Math.random() * totalQuestions);
        if (!uniqueNumbers.includes(n)) uniqueNumbers.push(n);
        // ...
        if (uniqueNumbers.length === qCounter) {
          break;
        }
      }

      // extract the questions
      const randomQuestions = uniqueNumbers.reduce((acc, cv) => {
        acc.push(data.questions[cv]);
        return acc;
      }, []);

      // add the qNumber field and return it
      return {
        _id: data._id,
        name: data.name,
        questions: randomQuestions.reduce((acc, cv, idx) => {
          acc.push({
            _id: cv._id,
            qNumber: idx + 1,
            qInstruction: cv.qInstruction,
            qTechnicalInstruction: cv.qTechnicalInstruction,
            qComment: cv.qComment,
            qCorrectAnswer: cv.qCorrectAnswer,
            qCorrectAnswerComplement: cv.qCorrectAnswerComplement,
          });
          return acc;
        }, []),
      };
    })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

// registerAttempt()
// matches with /api/exam/registerAttempt
router.put("/registerAttempt", function (req, res) {
  // difficulty and score here are optional
  // if there's no score it means it's just registering a visit
  // if there's difficulty AND the score is greater than 8, unlock next difficuly
  const { studentId, subject, examId, score, difficulty } = req.body;

  let unblockedDiff = null;

  if (difficulty && score > 8) {
    switch (difficulty) {
      case "Basic":
        unblockedDiff = "Intermediate";
        break;
      case "Intermediate":
        unblockedDiff = "Advanced";
        break;
      case "Advanced":
        unblockedDiff = "Final";
        break;
    }
  }

  const obj = { student: studentId, date: Date.now(), score };

  // first register the score
  model.Exam.findOneAndUpdate(
    { _id: examId },
    { $push: { visits: obj } },
    { new: true }
  )
    .then(() => {
      // check if something was unblocked and proceed to unbock it
      if (!unblockedDiff) {
        res.json("Se registró un nuevo score");
      } else {
        return model.Exam.update(
          { subject: subject, difficulty: unblockedDiff },
          { $push: { availableTo: studentId } }
        );
      }
    })
    .then(() =>
      res.json(
        "Se registró un nuevo score y se desbloqueó una nueva dificultad"
      )
    )
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error");
    });
});

module.exports = router;
