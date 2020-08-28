const router = require("express").Router();
const model = require("../../models");

// t_fetchCourses()
// matches with /teacherAPI/courses
router.get("/courses", function (req, res) {
  model.Course.find({})
    .sort({ name: 1 })
    .select("createdAt name")
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

// t_fetchOneCourse()
// matches with /teacherAPI/course/:courseId
router.get("/course/:courseId", function (req, res) {
  const { courseId } = req.params;

  model.Course.findById(courseId)
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

module.exports = router;
