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

      const uniqueNumbers = [];
      while (uniqueNumbers.length <= qCounter) {
        let n = Math.floor(Math.random() * totalQuestions);
        if (!uniqueNumbers.includes(n)) uniqueNumbers.push(n);
        // ...
        if (uniqueNumbers.length === qCounter) {
          break;
        }
      }

      let qNumber = 0;
      return {
        name: data.name,
        questions: data.questions.reduce((acc, cv, idx) => {
          if (uniqueNumbers.includes(idx)) {
            acc.push({
              _id: cv._id,
              qNumber: qNumber + 1,
              qInstruction: cv.qInstruction,
              qTechnicalInstruction: cv.qTechnicalInstruction,
              qComment: cv.qComment,
              qCorrectAnswer: cv.qCorrectAnswer,
              qCorrectAnswerComplement: cv.qCorrectAnswerComplement,
            });
            qNumber++;
          }
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
  const { studentId, examId, score } = req.body;

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
