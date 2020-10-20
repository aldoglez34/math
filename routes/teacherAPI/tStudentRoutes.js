const router = require("express").Router();
const model = require("../../models");

// t_fetchStudents()
// matches with /teacherAPI/students/all
router.get("/all", function (req, res) {
  model.Student.find({})
    .sort({ name: 1 })
    .select("name firstSurname email")
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error.");
    });
});

// t_fetchStudentHistory()
// matches with /teacherAPI/students/history/:studentId
router.get("/history/:studentId", function (req, res) {
  const { studentId } = req.params;

  model.Student.findById(studentId)
    .select("attempts")
    .lean()
    .populate("attempts.exam", "name")
    .then((data) => res.json(data.attempts))
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error.");
    });
});

// t_fetchStudentUnpurchased()
// matches with /teacherAPI/students/unpurchased/:studentId
router.get("/unpurchased/:studentId", function (req, res) {
  const { studentId } = req.params;

  model.Student.findById(studentId)
    .select("courses")
    .then((data) => {
      // this student's courses
      const myCourses = data.courses;

      model.Course.find()
        .select("name")
        .then((allCourses) => {
          res.json(
            allCourses.reduce((acc, cv) => {
              if (!myCourses.includes(cv._id)) acc.push(cv);
              return acc;
            }, [])
          );
        })
        .catch((err) => {
          console.log("@error", err);
          res.status(422).send("Ocurrió un error.");
        });
    })
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error.");
    });
});

// t_assignCourse()
// matches with /teacherAPI/students/assignCourse
router.put("/assignCourse", function (req, res) {
  const { studentId, courseId } = req.body;

  // first get all the course's exams
  model.Course.findById(courseId)
    .select("topics")
    .then((data) => {
      // get only exams ids
      const allExams = data.topics.reduce((acc, cv) => {
        acc.push(...cv.exams);
        return acc;
      }, []);

      // insert data
      return model.Student.findByIdAndUpdate(studentId, {
        $push: { courses: courseId, exams: allExams },
      });
    })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error.");
    });
});

// t_fetchOneStudent()
// matches with /teacherAPI/students/:studentId
router.get("/:studentId", function (req, res) {
  const { studentId } = req.params;

  model.Student.findById(studentId)
    .select(
      "email name firstSurname secondSurname registeredAt courses attempts rewards"
    )
    .lean() // necessary
    .populate("courses", "name")
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error.");
    });
});

module.exports = router;
