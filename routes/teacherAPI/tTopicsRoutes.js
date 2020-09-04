const router = require("express").Router();
const model = require("../../models");

// t_fetchTopic()
// matches with /teacherAPI/topic/:courseId/:topicId
router.get("/:courseId/:topicId", function (req, res) {
  const { courseId, topicId } = req.params;

  model.Course.findById(courseId)
    .select("topics")
    .then((data) =>
      res.json(data.topics.filter((t) => t._id.toString() === topicId)[0])
    )
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error.");
    });
});

// t_updateTopicName
// matches with /teacherAPI/topics/update/name
router.put("/update/name", function (req, res) {
  const newName = req.body.newName;
  const courseId = req.body.courseId;
  const topicId = req.body.topicId;

  console.log("\n", courseId, topicId, "\n");

  // model.Course.findByIdAndUpdate(courseId, { name: newName })
  //   .then(() => {
  //     res.json("Nombre del curso actualizado satisfactoriamente.");
  //   })
  //   .catch((err) => {
  //     console.log("@error", err);
  //     res.status(422).send("Ocurrió un error.");
  //   });
});

module.exports = router;
