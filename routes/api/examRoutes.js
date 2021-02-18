const router = require("express").Router();
const model = require("../../models");

// fetchExamInfo()
// matches with /api/exam/info/:examId
router.get("/info/:examId", function (req, res) {
  const examId = req.params.examId;

  model.Exam.findById(examId)
    .select("name questions duration qCounter")
    .then((data) => {
      const totalQuestions = data.questions.length;
      const qCounter =
        totalQuestions < data.qCounter ? totalQuestions : data.qCounter;

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
            qComment: cv.qComment ? cv.qComment : null,
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
      // register perfect score only if grade is 10
      if (grade === 10) {
        model.Student.findOneAndUpdate(
          { _id: studentId },
          { $addToSet: { perfectGrades: examId } }
        )
          .then(() =>
            res.json(
              "Attempt registered successfully and perfect grade registered successfully."
            )
          )
          .catch((err) => {
            console.log("@error", err);
            res.status(422).send("Ocurrió un error");
          });
      } else {
        // if not return msg to the client
        res.json("Attempt registered successfully.");
      }
    })
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error");
    });
});

// registerReward()
// matches with /api/exam/registerReward
router.put("/registerReward", function (req, res) {
  const { link, name, studentId, topicId } = req.body;

  // FIRST check if the student already has this topic
  // this has to be done BEFORE adding the topicId to the rewards list of the student
  model.Student.findById(studentId)
    .then(({ rewards }) => {
      const isFreestyleUnlockable =
        rewards.filter((r) => String(r.topicId) === String(topicId)).length ===
        0;

      // ONLY AFTER try to push the topicId to the student's rewards
      // "$ne" won't push it if it's there already
      model.Student.findOneAndUpdate(
        { _id: studentId, "rewards.topicId": { $ne: topicId } },
        {
          $addToSet: {
            rewards: {
              link: link,
              name: name,
              topicId,
            },
          },
        }
      )
        .then(() => res.send({ isFreestyleUnlockable }))
        .catch((err) => {
          console.log("@error", err);
          res.status(422).send("Ocurrió un error");
        });
    })
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error");
    });

  // push the reward only if the topic isn't already there
});

// unlockExam()
// matches with /api/exam/unlockExam
router.put("/unlockExam", function (req, res) {
  const { courseId, difficulty, studentId, topicId } = req.body;

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
  model.Course.findOne({ _id: courseId })
    .select("topics")
    .populate("topics.exams", "_id name difficulty")
    .then(({ topics }) => {
      const thisTopic = topics.filter(
        (t) => String(t._id) === String(topicId)
      )[0];

      const unlockedExam = thisTopic.exams.filter(
        (e) => e.difficulty === unblockedDiff
      )[0];

      // push if it doesn't exist
      model.Student.findOneAndUpdate(
        { _id: studentId, exams: { $ne: unlockedExam._id } },
        {
          $addToSet: {
            exams: unlockedExam._id,
          },
        }
      )
        .then((data) => {
          // if data retrieves null, it means nothing was ublocked, therefore return null to the client
          if (!data) {
            res.send(null);
          } else {
            res.send({
              name: unlockedExam.name,
              difficulty: unlockedExam.difficulty,
            });
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
