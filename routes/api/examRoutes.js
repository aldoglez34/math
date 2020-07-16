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
            qTechnicalInstruction: cv.qTechnicalInstruction,
            qMultipleChoice: cv.qMultipleChoice,
            qCorrectAnswers: cv.qCorrectAnswers,
            qComment: cv.qComment,
          });
          return acc;
        }, []),
      };
    })
    .then((data) => {
      // res.json(data);
      const temp = {
        _id: "5f0fbfe1cf99800a70c4387b",
        name: "Sumas 1",
        duration: 30,
        questions: [
          {
            _id: "5f0fbfe1cf99800a70c43881",
            qNumber: 2,
            qInstruction:
              "Escribe 45 en el primer input y 2 en el segundo y 77 en el tercero",
            qTechnicalInstruction: {},
            qMultipleChoice: {
              textChoices: [],
              imageChoices: [],
            },
            qCorrectAnswers: [
              {
                _id: "5f0fbfe1cf99800a70c43882",
                answer: "45",
              },
              {
                _id: "5f0fbfe1cf99800a70c43883",
                answer: "2",
              },
              {
                _id: "5f0fbfe1cf99800a70c43884",
                answer: "77",
              },
            ],
          },
          {
            _id: "5f0fbfe1cf99800a70c4388e",
            qNumber: 1,
            qInstruction: "¿Cuánto es 5 + 8? Elige la respuesta correcta",
            qTechnicalInstruction: {},
            qMultipleChoice: {
              textChoices: ["12", "13", "14", "15"],
              imageChoices: [],
              type: "text",
            },
            qCorrectAnswers: [
              {
                _id: "5f0fbfe1cf99800a70c4388f",
                answer: "13",
              },
            ],
            qComment: "selecciona respuesta correcta y da clic en siguiente",
          },
          {
            _id: "5f0fbfe1cf99800a70c43885",
            qNumber: 3,
            qInstruction: "Resuelve la siguiente suma",
            qTechnicalInstruction: {
              type: "image",
              imageLink: "/exams/suma/suma1.png",
            },
            qMultipleChoice: {
              textChoices: [],
              imageChoices: [],
            },
            qCorrectAnswers: [
              {
                _id: "5f0fbfe1cf99800a70c43886",
                answer: "14",
              },
            ],
          },
          {
            _id: "5f0fbfe1cf99800a70c4387e",
            qNumber: 4,
            qInstruction:
              "Escribe 3 (pesos) en el primer input y 5 (manzanas) en el segundo",
            qTechnicalInstruction: {},
            qMultipleChoice: {
              textChoices: [],
              imageChoices: [],
            },
            qCorrectAnswers: [
              {
                _id: "5f0fbfe1cf99800a70c4387f",
                answer: "3",
                complement: "pesos",
                placement: "right",
              },
              {
                _id: "5f0fbfe1cf99800a70c43880",
                answer: "5",
                complement: "manzanas",
                placement: "left",
              },
            ],
            qComment: "literal sólo eso",
          },
          {
            _id: "5f0fbfe1cf99800a70c43887",
            qNumber: 5,
            qInstruction: "Escribe los números que se muestran en la imagen",
            qTechnicalInstruction: {
              type: "image",
              imageLink: "/exams/suma/suma2.png",
            },
            qMultipleChoice: {
              textChoices: [],
              imageChoices: [],
            },
            qCorrectAnswers: [
              {
                _id: "5f0fbfe1cf99800a70c43888",
                answer: "45",
                complement: "números:",
                placement: "left",
              },
              {
                _id: "5f0fbfe1cf99800a70c43889",
                answer: "7",
                complement: "números:",
                placement: "left",
              },
            ],
          },
          {
            _id: "5f0fbfe1cf99800a70c4387c",
            qNumber: 6,
            qInstruction: "Resuelve la siguiente suma",
            qTechnicalInstruction: {
              type: "text",
              text: "10 + 7",
            },
            qMultipleChoice: {
              textChoices: [],
              imageChoices: [],
            },
            qCorrectAnswers: [
              {
                _id: "5f0fbfe1cf99800a70c4387d",
                answer: "17",
              },
            ],
          },
          {
            _id: "5f0fbfe1cf99800a70c4388a",
            qNumber: 7,
            qInstruction: "Escribe los números que se muestran en la imagen",
            qTechnicalInstruction: {
              type: "image",
              imageLink: "/exams/suma/suma3.png",
            },
            qMultipleChoice: {
              textChoices: [],
              imageChoices: [],
            },
            qCorrectAnswers: [
              {
                _id: "5f0fbfe1cf99800a70c4388b",
                answer: "11",
              },
              {
                _id: "5f0fbfe1cf99800a70c4388c",
                answer: "8",
              },
              {
                _id: "5f0fbfe1cf99800a70c4388d",
                answer: "34",
              },
            ],
            qComment: "sólo escribe los números",
          },
          {
            _id: "5f0fbfe1cf99800a70c43890",
            qNumber: 8,
            qInstruction: "¿Cuánto es 10 + 4? Elige la respuesta correcta",
            qTechnicalInstruction: {},
            qMultipleChoice: {
              textChoices: ["55", "43", "14", "2"],
              imageChoices: [],
              type: "text",
            },
            qCorrectAnswers: [
              {
                _id: "5f0fbfe1cf99800a70c43891",
                answer: "14",
              },
            ],
          },
        ],
      };
      res.json(temp);
    })
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
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
  const { studentId, topicName, difficulty } = req.body;

  console.log("entrando a unblock exam");

  let unblockedDiff = null;
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

  // find the exam's _id (the new one)
  model.Exam.findOne({ topicName: topicName, difficulty: unblockedDiff })
    .select("_id name")
    .then((newExam) => {
      const newExamId = newExam._id;
      const newExamName = newExam.name;

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
            res.send(newExamName);
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
