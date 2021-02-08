const router = require("express").Router();
const model = require("../../models");

// t_fetchDifficultiesAvailable()
// matches with /teacherAPI/difficulties/available/:courseId/:topicId
router.get("/available/:courseId/:topicId", function (req, res) {
  const { courseId, topicId } = req.params;

  const allDifficulties = [
    "Basic",
    "Basic-Intermediate",
    "Intermediate",
    "Intermediate-Advanced",
    "Advanced",
  ];

  model.Course.findOne({
    _id: courseId,
    "topics._id": topicId,
  })
    .populate("topics.exams", "difficulty")
    .then(({ topics }) => {
      const examsOfThisTopic = topics.filter(
        ({ _id }) => String(_id) === String(topicId)
      )[0].exams;

      const difficultiesOfThisTopic = examsOfThisTopic.reduce((acc, cv) => {
        acc.push(cv.difficulty);
        return acc;
      }, []);

      const difficultiesAvailable = allDifficulties.reduce((acc, cv) => {
        if (!difficultiesOfThisTopic.includes(cv)) acc.push(cv);
        return acc;
      }, []);

      res.send(difficultiesAvailable);
    })
    .catch((err) => {
      console.log("@error", err);
      res
        .status(422)
        .send(
          "Ocurrió un error al enviar el mensaje, inténtalo de nuevo más tarde"
        );
    });
});

module.exports = router;
