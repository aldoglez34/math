const router = require("express").Router();
const model = require("../../models");
const { getNextDifficulty } = require("../utils/utils");

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
router.put("/registerAttempt", async (req, res) => {
  const {
    courseId,
    examDifficulty,
    examId,
    examLink,
    examName,
    grade,
    studentId,
    topicId,
  } = req.body;

  const isExamApproved = grade >= 8;
  const isPerfectGrade = grade === 10;
  const isLastExam = examDifficulty === "Advanced";
  const isFreestyleUnlocked = isLastExam && isExamApproved;
  let unlockedExam = false;

  try {
    // REGISTER ATTEMPT
    await model.Student.findOneAndUpdate(
      { _id: studentId },
      { $push: { attempts: { exam: examId, grade: grade } } }
    );

    // REGISTER PERFECT GRADE
    if (isPerfectGrade) {
      await model.Student.findOneAndUpdate(
        { _id: studentId },
        { $addToSet: { perfectGrades: examId } } // addToSet will push it only if only it doesn't exist
      );
    }

    // REGISTER REWARD (THIS WILL BE USED FOR THE FREESTYLE TOO)
    if (isExamApproved && isLastExam) {
      // check if the student already has the a reward for this topic
      const rewards = await model.Student.findById(studentId).then(
        ({ rewards }) => rewards
      );

      const isRewardMissing =
        rewards.filter((r) => String(r.topicId) === String(topicId)).length ===
        0;

      if (isRewardMissing) {
        // push the reward -- "$ne" won't push it if it's there already
        await model.Student.findOneAndUpdate(
          { _id: studentId, "rewards.topicId": { $ne: topicId } },
          {
            $addToSet: { rewards: { link: examLink, name: examName, topicId } },
          }
        );
      }
    }

    // UNLOCK NEW EXAM
    if (isExamApproved && !isLastExam) {
      // get all the topics from this course
      const courseTopics = await model.Course.findOne({ _id: courseId })
        .select("topics")
        .populate("topics.exams", "_id name difficulty")
        .then(({ topics }) => topics);

      // filter this topic only
      const thisTopic = courseTopics.filter(
        (t) => String(t._id) === String(topicId)
      )[0];

      // get the next difficulty to unlock
      const nextDifficulty = getNextDifficulty(examDifficulty);

      // get an object with the data of the new exam
      const nextExam = thisTopic.exams.filter(
        (e) => e.difficulty === nextDifficulty
      )[0];

      // check if the user has unlocked this exam already
      const studentUnlockedExams = await model.Student.findOne({
        _id: studentId,
      })
        .select("exams")
        .then(({ exams }) => exams);

      const hasStudentExam = studentUnlockedExams.filter(
        (e) => String(e) === String(nextExam._id)
      ).length;

      if (!hasStudentExam) {
        const tryToPushExam = await model.Student.findOneAndUpdate(
          { _id: studentId, exams: { $ne: nextExam._id } },
          { $addToSet: { exams: nextExam._id } },
          { new: true }
        );

        // double check if the new exam was added to the student's exams
        const wasTheExamAdded = tryToPushExam.exams.filter(
          (e) => String(e) === String(nextExam._id)
        ).length;

        // sending error
        if (!wasTheExamAdded)
          res
            .status(422)
            .send("Ocurrió un error, no se pudo desbloquear examen.");

        // get the unlocked exam's info
        unlockedExam = wasTheExamAdded && {
          name: nextExam.name,
          difficulty: nextExam.difficulty,
        };
      }
    }

    res.json({ unlockedExam, isFreestyleUnlocked });
  } catch (err) {
    console.log("@error", err);
    res.status(422).send("Ocurrió un error");
  }
});

module.exports = router;
