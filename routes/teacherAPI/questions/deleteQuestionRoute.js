const router = require("express").Router();
const model = require("../../../models");
const fs = require("fs");

// t_deleteQuestion()
// matches with /teacherAPI/questions/delete
router.put("/", function (req, res) {
  const { courseId, examId, questionId } = req.body;

  const filePath = `./client/public/projectfiles/${courseId}/questions/${questionId}`;

  console.log(filePath);

  // first delete from database
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
    .then((data) => {
      // delete directory recursively
      fs.rmdir(filePath, { recursive: true }, (err) => {
        if (err) {
          throw err;
        }

        console.log(`${filePath} is deleted!`);
        res.json(data);
      });
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
