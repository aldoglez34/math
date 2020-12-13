const router = require("express").Router();
const model = require("../../../models");

// t_deleteQuestion()
// matches with /teacherAPI/questions/delete
router.put("/", function (req, res) {
  const { examId, questionId } = req.body;

  model.Exam.updateOne(
    {
      _id: examId,
    },
    {
      $pull: {
        questions: {
          _id: questionId,
        },
      },
    }
  )
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      res.send(err);
    });
});

module.exports = router;
