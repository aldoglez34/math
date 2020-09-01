const router = require("express").Router();
const model = require("../../models");

// t_fetchCourses()
// matches with /teacherAPI/courses/all
router.get("/all", function (req, res) {
  model.Course.find({})
    .sort({ name: 1 })
    .select("name school")
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error.");
    });
});

// t_fetchOneCourse()
// matches with /teacherAPI/courses/:courseId
router.get("/:courseId", function (req, res) {
  const { courseId } = req.params;

  model.Course.findById(courseId)
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error.");
    });
});

// t_updateCourseName
// matches with /teacherAPI/courses/update/name
router.put("/update/name", function (req, res) {
  const newName = req.body.newName;
  const courseId = req.body.courseId;

  model.Course.findOneAndUpdate(courseId, { name: newName })
    .then(() => {
      res.json("Nombre del curso actualizado satisfactoriamente.");
    })
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error.");
    });
});

// t_updateCourseDescription
// matches with /teacherAPI/courses/update/description
router.put("/update/description", function (req, res) {
  const { newDescription, courseId } = req.body;

  model.Course.findOneAndUpdate(courseId, { description: newDescription })
    .then(() => {
      res.json("Descripción del curso actualizada satisfactoriamente.");
    })
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error.");
    });
});

module.exports = router;
