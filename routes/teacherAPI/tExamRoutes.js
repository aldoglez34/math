const router = require("express").Router();
const model = require("../../models");

// t_newExam()
// matches with /teacherAPI/exam/new
router.post("/new", function (req, res) {
  const examData = {
    difficulty: req.body.difficulty,
    examOrderNumber: req.body.examOrderNumber,
    name: req.body.name,
    description: req.body.description,
    duration: req.body.duration,
    qCounter: req.body.qCounter,
  };

  model.Exam.create(examData)
    .then((newExam) => {
      const newExamId = newExam._id;

      // now add that exam to the course
      model.Course.findOneAndUpdate(
        {
          _id: req.body.courseId,
          "topics._id": req.body.topicId,
        },
        {
          $push: {
            "topics.$.exams": newExamId,
          },
        }
      )
        .then(() => {
          res.send("El examen fue agregado con éxito.");
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

// t_fetchExam()
// matches with /teacherAPI/exam/fetch/:examId
router.get("/fetch/:examId", function (req, res) {
  const { examId } = req.params;

  model.Exam.findById(examId)
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error.");
    });
});

// t_updateExamName
// matches with /teacherAPI/exam/update/name
router.put("/update/name", function (req, res) {
  const { newName, examId } = req.body;

  model.Exam.findByIdAndUpdate(
    {
      _id: examId,
    },
    { name: newName }
  )
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error.");
    });
});

// t_updateExamDuration
// matches with /teacherAPI/exam/update/duration
router.put("/update/duration", function (req, res) {
  const { newDuration, examId } = req.body;

  model.Exam.findByIdAndUpdate(
    {
      _id: examId,
    },
    { duration: newDuration }
  )
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error.");
    });
});

// t_updateExamQCounter
// matches with /teacherAPI/exam/update/qCounter
router.put("/update/qCounter", function (req, res) {
  const { newQCounter, examId } = req.body;

  model.Exam.findByIdAndUpdate(
    {
      _id: examId,
    },
    { qCounter: newQCounter }
  )
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error.");
    });
});

// t_updateExamDescription
// matches with /teacherAPI/exam/update/description
router.put("/update/description", function (req, res) {
  const { newDescription, examId } = req.body;

  model.Exam.findByIdAndUpdate(
    {
      _id: examId,
    },
    { description: newDescription }
  )
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error.");
    });
});

module.exports = router;
