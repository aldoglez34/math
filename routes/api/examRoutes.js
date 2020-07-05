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
  const { studentId, examId, score, difficulty } = req.body;

  const obj = { student: studentId, date: Date.now(), score };

  model.Exam.findOneAndUpdate(
    { _id: examId },
    { $push: { visits: obj } },
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
