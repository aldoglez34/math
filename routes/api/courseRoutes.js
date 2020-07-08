const router = require("express").Router();
const model = require("../../models");

// fetchCourseInfo()
// matches with /api/course/info/:courseId/:studentId
router.get("/info/:courseId/:studentId", function (req, res) {
  const courseId = req.params.courseId;
  const studentId = req.params.studentId;

  var courseData = {};

  // 1. first get the course data
  model.Course.findById(courseId)
    .lean()
    .select(
      "name longDescription topics._id topics.subject topics.name topics.description topics.toLearn topics.freestyle topics.material topics.exams"
    )
    .populate(
      "topics.exams",
      "_id topicName name description duration difficulty qCounter leaderboard"
    )
    .then((data) => {
      courseData = data;

      // 2. then get the student data
      return model.Student.findById(studentId).select(
        "exams attempts rewards crowns"
      );
    })
    .then((data) => {
      const studentData = data;

      // 3. combine both results and send to client
      return {
        ...courseData,
        topics: courseData.topics.reduce((acc, cv) => {
          acc.push({
            ...cv,
            hasReward: studentData.rewards.includes(cv._id),
            exams: cv.exams.reduce((acc, cv) => {
              acc.push({
                ...cv,
                isAvailable: studentData.exams.includes(cv._id),
                hasCrown: studentData.crowns.includes(cv._id),
                attemptsCounter: studentData.attempts.filter(
                  (a) => a.exam.toString() === cv._id.toString()
                ).length,
                //
                latestAttempt: studentData.attempts
                  .filter((a) => a.exam.toString() === cv._id.toString())
                  .sort((a, b) => (a.date > b.date ? -1 : 1))[0]
                  ? studentData.attempts
                      .filter((a) => a.exam.toString() === cv._id.toString())
                      .sort((a, b) => (a.date > b.date ? -1 : 1))[0].date
                  : null,
                //
                highestGrade: studentData.attempts
                  .filter((a) => a.exam === cv._id)
                  .sort((a, b) => (a.grade > b.grade ? -1 : 1))[0]
                  ? studentData.attempts
                      .filter((a) => a.exam === cv._id)
                      .sort((a, b) => (a.grade > b.grade ? -1 : 1))[0].grade
                  : 0,
              });
              return acc;
            }, []),
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

module.exports = router;
