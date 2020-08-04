const router = require("express").Router();
const model = require("../../models");

// fetchFreestyle()
// matches with /api/freestyle/:topicName
router.get("/:topicName", function (req, res) {
  const difficulties = ["Intermediate", "Intermediate-Advanced", "Advanced"];

  model.Exam.find({
    topicName: req.params.topicName,
    difficulty: { $in: difficulties },
  })
    .select("name questions difficulty")
    .then((data) => {
      // mix all the questions
      const allQuestions = data.reduce((acc, cv) => {
        acc.push(...cv.questions);
        return acc;
      }, []);

      const allQuestionsCounter = allQuestions.length;

      // generate random numbers
      const uniqueNumbers = [];
      while (uniqueNumbers.length <= allQuestionsCounter) {
        let n = Math.floor(Math.random() * allQuestionsCounter);
        if (!uniqueNumbers.includes(n)) uniqueNumbers.push(n);
        // ...
        if (uniqueNumbers.length === allQuestionsCounter) {
          break;
        }
      }

      // extract the questions
      return uniqueNumbers.reduce((acc, cv, idx) => {
        acc.push({
          qNumber: idx + 1,
          qInstruction: allQuestions[cv].qInstruction,
          qTechnicalInstruction: allQuestions[cv].qTechnicalInstruction.type
            ? allQuestions[cv].qTechnicalInstruction
            : null,
          qMultipleChoice:
            allQuestions[cv].qMultipleChoice.textChoices.length ||
            allQuestions[cv].qMultipleChoice.imageChoices.length
              ? allQuestions[cv].qMultipleChoice
              : null,
          qCorrectAnswers: allQuestions[cv].qCorrectAnswers,
          qComment: allQuestions[cv].qComment,
        });
        return acc;
      }, []);
    })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error");
    });
});

// registerFreestyleAttempt()
// matches with /api/freestyle/registerAttempt
router.put("/registerAttempt", function (req, res) {
  const { courseId, topicName } = req.body;

  const newAttempt = {
    studentId: req.body.studentId,
    username: req.body.username,
    score: req.body.score,
  };

  model.Course.update(
    {
      _id: courseId,
      "topics.name": topicName,
    },
    {
      $push: {
        "topics.$.freestyle.attempts": newAttempt,
      },
    }
  )
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error");
    });
});

module.exports = router;
