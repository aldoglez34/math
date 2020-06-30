const router = require("express").Router();
const model = require("../../models");
const { addListener } = require("../../models/Exam");

// fetchCourseInfo()
// matches with /api/course/info/:courseId/:studentId
router.get("/info/:courseId/:studentId", function (req, res) {
  const courseId = req.params.courseId;
  const studentId = req.params.studentId;

  model.Course.findById(courseId)
    .lean()
    .populate(
      "topics.exams",
      "subject name description difficulty qCounter duration visits"
    )
    .then((data) => {
      // res.json(data);

      return {
        _id: data._id,
        name: data.name,
        longDescription: data.longDescription,
        topics: data.topics.reduce((acc, cv) => {
          acc.push({
            _id: cv._id,
            subject: cv.subject,
            name: cv.name,
            description: cv.description,
            toLearn: cv.toLearn,
            material: cv.material,
            freestyleTimer: cv.freestyle.timer,
            freestyleAttemptsCounter: cv.freestyle.visits
              .filter((v) => v.student == studentId)
              .sort((a, b) => (a.date > b.date ? -1 : 1)).length,
            freestyleLatestVisit: cv.freestyle.visits
              .filter((v) => v.student == studentId)
              .sort((a, b) => (a.date > b.date ? -1 : 1))[0]
              ? cv.freestyle.visits
                  .filter((v) => v.student == studentId)
                  .sort((a, b) => (a.date > b.date ? -1 : 1))[0].date
              : null,
            freestyleHighestScore: cv.freestyle.visits
              .filter((v) => v.student == studentId)
              .sort((a, b) => (a.score > b.score ? -1 : 1))[0]
              ? cv.freestyle.visits
                  .filter((v) => v.student == studentId)
                  .sort((a, b) => (a.score > b.score ? -1 : 1))[0].score
              : null,
            exams: cv.exams.reduce((acc, cv) => {
              acc.push({
                _id: cv._id,
                name: cv.name,
                description: cv.description,
                difficulty: cv.difficulty,
                myAttempts: cv.visits.filter((v) => v.student == studentId)
                  .length,
                latestAttempt: cv.visits
                  .filter((v) => v.student == studentId)
                  .sort((a, b) => (a.date > b.date ? -1 : 1))[0]
                  ? cv.visits
                      .filter((v) => v.student == studentId)
                      .sort((a, b) => (a.date > b.date ? -1 : 1))[0]
                  : null,
                latestScore: cv.visits
                  .filter((v) => v.student == studentId)
                  .sort((a, b) => (a.score > b.score ? -1 : 1))[0]
                  ? cv.visits
                      .filter((v) => v.student == studentId)
                      .sort((a, b) => (a.score > b.score ? -1 : 1))[0].score
                  : 0,
              });
              return acc;
            }, []),
          });
          return acc;
        }, []),
      };
    })
    .then((toFront) => {
      res.json(toFront);
    })
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

module.exports = router;
