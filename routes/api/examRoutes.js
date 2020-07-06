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
  const {
    examId,
    studentId,
    courseId,
    grade,
    topicName,
    difficulty,
  } = req.body;

  let dataToPushOrSet = {};

  // push attempt regardless of grade
  dataToPushOrSet.$push = { attempts: { exam: examId, grade: grade } };

  let toSet = {};
  if (grade >= 8) toSet.rewards = courseId;
  if (grade === 10) toSet.crowns = examId;

  dataToPushOrSet.$set = toSet;

  // first register the attempt
  // doesn't matter if he passed or not
  model.Student.findOneAndUpdate({ _id: studentId }, dataToPushOrSet, {
    new: true,
  })
    .then(() => {
      // check if a new difficulty was unblocked
      let unblockedDiff = null;
      if (difficulty && grade >= 8) {
        switch (difficulty) {
          case "Basic":
            unblockedDiff = "Intermediate-Low";
            break;
          case "Intermediate-Low":
            unblockedDiff = "Intermediate-High";
            break;
          case "Intermediate-High":
            unblockedDiff = "Advanced";
            break;
          case "Advanced":
            unblockedDiff = "Final";
            break;
        }
      }
      // if nothing was unblocked, send responde to
      if (!unblockedDiff) {
        res.json("\nNew grade added, nothing unblocked");
      } else {
        // if an exam was indeed unblocked, search for its id and push it
        model.Exam.findOne({
          topicName: topicName,
          difficulty: unblockedDiff,
        })
          .then((examUnblocked) => {
            // push it
            model.Student.findOneAndUpdate(
              { _id: studentId },
              {
                $push: { exams: examUnblocked._id },
              }
            ).then(() => {
              res.json("\nNew grade added and new difficulty unblocked");
            });
          })
          .catch((err) => {
            console.log("@error", err);
            res.status(422).send("Ocurrió un error");
          });
      }
    })
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error");
    });
});

module.exports = router;
