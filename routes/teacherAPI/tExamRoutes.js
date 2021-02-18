const router = require("express").Router();
const model = require("../../models");

// t_newExam()
// matches with /teacherAPI/exam/new
router.post("/new", function (req, res) {
  const examData = {
    difficulty: req.body.exam.difficulty,
    examOrderNumber: req.body.exam.examOrderNumber,
    name: req.body.exam.name,
    description: req.body.exam.description,
    duration: req.body.exam.duration,
    qCounter: req.body.exam.qCounter,
  };
  const { courseId, difficulty, topicId } = req.body;

  // create the exam first
  model.Exam.create(examData)
    .then((newExam) => {
      const newExamId = newExam._id;

      // now add that exam to the course
      model.Course.findOneAndUpdate(
        { _id: courseId, "topics._id": topicId },
        { $push: { "topics.$.exams": newExamId } }
      )
        .then(() => {
          // if difficulty is basic, add this exam to all the students that have purchased this course
          if (difficulty === "Basic") {
            model.Student.find()
              .select("courses exams")
              .then((allStudents) => {
                const studentsThatNeedThisExam = allStudents.reduce(
                  (acc, cv) => {
                    if (
                      cv.courses.includes(courseId) &&
                      !cv.exams.includes(newExamId)
                    )
                      acc.push(cv);
                    return acc;
                  },
                  []
                );

                if (!studentsThatNeedThisExam.length) {
                  res.send(newExamId);
                } else {
                  const addNewExamToStudents = new Promise(
                    (resolve, reject) => {
                      studentsThatNeedThisExam.forEach(
                        (value, index, array) => {
                          model.Student.findOneAndUpdate(
                            { _id: value._id },
                            { $push: { exams: newExamId } }
                          )
                            .then(() => {
                              if (index === array.length - 1) resolve();
                            })
                            .catch((err) => console.log(err));
                        }
                      );
                    }
                  );

                  addNewExamToStudents
                    .then(() => res.send(newExamId))
                    .catch((err) => console.log(err));
                }
              })
              .catch((err) => {
                console.log("@error", err);
                res.status(422).send("Ocurrió un error");
              });
          } else {
            res.send(newExamId);
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
