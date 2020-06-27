const router = require("express").Router();
const model = require("../../models");

// fetchCourseInfo()
// matches with /api/course/info/:courseId
router.get("/info/:courseId", function (req, res) {
  const courseId = req.params.courseId;

  model.Course.findById(courseId)
    .lean()
    .populate("topics.exams", "subject name description difficulty qCounter duration")
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

module.exports = router;
