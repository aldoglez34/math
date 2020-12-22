const router = require("express").Router();
const model = require("../../models");

// fetchFreestyle()
// matches with /api/freestyle/:topicId
router.get("/:topicId", function (req, res) {
  const difficulties = ["Intermediate", "Intermediate-Advanced", "Advanced"];

  model.Exam.find({
    topicName: req.params.topicName,
    difficulty: { $in: difficulties },
  })
    .select("name questions difficulty")
    .then((data) => {
      // mix all the questions (and set the value for each Q)
      const allQuestions = data.reduce((acc, cv) => {
        const value =
          cv.difficulty === "Intermediate"
            ? 1
            : cv.difficulty === "Intermediate-Advanced"
            ? 2
            : cv.difficulty === "Advanced"
            ? 3
            : null;

        const arr = cv.questions.reduce((acc, cv) => {
          acc.push({
            qValue: value,
            qInstruction: cv.qInstruction,
            qTechnicalInstruction: cv.qTechnicalInstruction,
            qMultipleChoice: cv.qMultipleChoice,
            qCorrectAnswers: cv.qCorrectAnswers,
            qComment: cv.qComment,
          });
          return acc;
        }, []);

        acc.push(...arr);

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
          qValue: allQuestions[cv].qValue,
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
  const { courseId, topicId, studentId, username, score } = req.body;

  const newAttempt = {
    studentId,
    username,
    score,
  };

  model.Course.update(
    {
      _id: courseId,
      "topics._id": topicId,
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
