const router = require("express").Router();
const model = require("../../models");

// fetchExamInfo()
// matches with /api/exam/info/:examId
router.get("/info/:examId", function (req, res) {
  const examId = req.params.examId;

  model.Exam.findById(examId)
    .select("name questions duration qCounter")
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
        duration: data.duration,
        questions: randomQuestions.reduce((acc, cv, idx) => {
          acc.push({
            _id: cv._id,
            qNumber: idx + 1,
            qInstruction: cv.qInstruction,
            qTechnicalInstruction: cv.qTechnicalInstruction.type
              ? cv.qTechnicalInstruction
              : null,
            qMultipleChoice:
              cv.qMultipleChoice.textChoices.length ||
              cv.qMultipleChoice.imageChoices.length
                ? cv.qMultipleChoice
                : null,
            qCorrectAnswers: cv.qCorrectAnswers,
            qComment: cv.qComment,
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
      res.status(422).send("Ocurrió un error");
    });
});

// registerAttempt()
// matches with /api/exam/registerAttempt
router.put("/registerAttempt", function (req, res) {
  const { studentId, examId, grade } = req.body;

  model.Student.findOneAndUpdate(
    { _id: studentId },
    { $push: { attempts: { exam: examId, grade: grade } } }
  )
    .then(() => {
      // console.log(attempt);
      res.json("Attempt registered successfully");
    })
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error");
    });
});

// registerPerfectGrade()
// matches with /api/exam/registerPerfectGrade
router.put("/registerPerfectGrade", function (req, res) {
  const { studentId, examId } = req.body;

  model.Student.findOneAndUpdate(
    { _id: studentId },
    { $addToSet: { perfectGrades: examId } }
  )
    .then(() => {
      // console.log(perfectGrade);
      res.json("Perfect grade registered successfully");
    })
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error");
    });
});

// registerReward()
// matches with /api/exam/registerReward
router.put("/registerReward", function (req, res) {
  const { studentId, topicName, name, link } = req.body;

  // push the reward only if the topic isn't already there
  model.Student.findOneAndUpdate(
    { _id: studentId, "rewards.topicName": { $ne: topicName } },
    {
      $addToSet: {
        rewards: {
          topicName: topicName,
          name: name,
          link: link,
        },
      },
    }
  )
    .then(() => {
      // console.log(perfectGrade);
      res.json("Reward registered successfully");
    })
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error");
    });
});

// unlockExam()
// matches with /api/exam/unlockExam
router.put("/unlockExam", function (req, res) {
  const { studentId, topicCode, difficulty } = req.body;

  let unblockedDiff = null;
  switch (difficulty) {
    case "Basic":
      unblockedDiff = "Basic-Intermediate";
      break;
    case "Basic-Intermediate":
      unblockedDiff = "Intermediate";
      break;
    case "Intermediate":
      unblockedDiff = "Intermediate-Advanced";
      break;
    case "Intermediate-Advanced":
      unblockedDiff = "Advanced";
      break;
  }

  // find the exam's _id (the new one)
  model.Exam.findOne({ topicCode: topicCode, difficulty: unblockedDiff })
    .select("_id name difficulty")
    .then((newExam) => {
      const newExamId = newExam._id;
      const newExamName = newExam.name;
      const newExamDifficulty = newExam.difficulty;

      // push if it doesn't exist
      model.Student.findOneAndUpdate(
        { _id: studentId, exams: { $ne: newExamId } },
        {
          $addToSet: {
            exams: newExamId,
          },
        }
      )
        .then((data) => {
          // if data retrieves null, it means nothing was ublocked, therefore return null to the client
          if (!data) {
            res.send(null);
          } else {
            res.send({ name: newExamName, difficulty: newExamDifficulty });
          }
        })
        .catch((err) => {
          console.log("@error", err);
          res.status(422).send("Ocurrió un error");
        });
    })
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error");
    });
});

module.exports = router;
