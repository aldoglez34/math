const router = require("express").Router();
const model = require("../../models");

// fetchFreestyle()
// matches with /api/freestyle/:topicName
router.get("/:topicName", function (req, res) {
  const difficulties = ["Intermediate", "Intermediate-Advanced", "Advanced"];

  model.Exam.find({
    topicName: req.params.topicName,
    difficulty: { $in: difficulties },
  })
    .select("name questions difficulty")
    .then((data) => {
      res.json(
        data.reduce((acc, cv) => {
          acc.push(
            ...cv.questions
            // examName: cv.name,
            // difficulty: cv.difficulty,
          );
          return acc;
        }, [])
      );
    })
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error");
    });
});

module.exports = router;
