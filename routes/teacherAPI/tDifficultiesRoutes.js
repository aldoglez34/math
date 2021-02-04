const router = require("express").Router();
const model = require("../../models");

// t_fetchDifficultiesAvailable()
// matches with /teacherAPI/difficulties/available/:courseId/:topicId
router.get("/available/:courseId/:topicId", function (req, res) {
  const { courseId, topicId } = req.params;

  const allExams = [
    "Basic",
    "Basic-Intermediate",
    "Intermediate",
    "Intermediate-Advanced",
    "Advanced",
  ];

  model.Course.findOne(
    {
      _id: courseId,
      "topics._id": topicId,
    }
    // { "topics.$": topicId }
  )
    .select("topics.id topics.exams")
    .populate("topics.exams", "difficulty")
    .then((data) => {
      return data.topics[0].exams.reduce((acc, cv) => {
        acc.push(cv.difficulty);
        return acc;
      }, []);
    })
    .then((examsTaken) => {
      res.json(
        allExams.reduce((acc, cv) => {
          if (!examsTaken.includes(cv)) acc.push(cv);
          return acc;
        }, [])
      );
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
