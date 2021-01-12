const router = require("express").Router();
const model = require("../../../models");
const multer = require("multer");
const fs = require("fs");

// t_newMultipleOptionWithImage()
// matches with /teacherAPI/questions/multipleOptionWithImage/new
let fileName;

const storage = multer.diskStorage({
  destination: "./client/public/_temp",
  filename: function (req, file, cb) {
    fileName = file.originalname;
    // set the name of the file
    cb(null, req.body.image);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 4000000 },
}).single("file");

router.post("/new", function (req, res) {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      console.log("ERROR - A Multer error occurred when uploading.");
      res.status(422).send({ msg: "Ocurrió un error." });
    } else if (err) {
      console.log("ERROR - An unknown error occurred when uploading.");
      res.status(422).send({ msg: "Ocurrió un error." });
    }

    // everything went fine
    // no errors

    const courseId = req.body.courseId;

    const newQuestion = {
      qType: "multipleOptionWithPic",
      qInstruction: req.body.qInstruction,
      qTechnicalInstruction: {
        type: "image",
        imageLink: "temp",
      },
      qMultipleChoice: {
        type: "text",
        textChoices: [
          req.body.qOption1,
          req.body.qOption2,
          req.body.qOption3,
          req.body.qOption4,
        ],
      },
      qCorrectAnswers: [
        {
          answer: req.body.qCorrectAnswers,
          complementLeft: req.body.qCALeft,
          complementRight: req.body.qCARight,
        },
      ],
      qComment: req.body.qComment,
    };

    model.Exam.findOneAndUpdate(
      { _id: req.body.examId },
      {
        $push: {
          questions: newQuestion,
        },
      },
      { new: true } // return the updated object
    )
      .then((exam) => {
        const newestQuestionId = exam.questions[exam.questions.length - 1]._id;

        // create questionid folder
        fs.mkdir(
          `./client/public/projectfiles/${courseId}/questions/${newestQuestionId}`,
          function (err) {
            if (err) {
              console.log(err);
            } else {
              console.log("Question folder has been created succesfully.");
            }
          }
        );

        // moving the file to the course folder
        const oldPath = `./client/public/_temp/${fileName}`;
        const newPath = `./client/public/projectfiles/${courseId}/questions/${newestQuestionId}/${fileName}`;
        fs.rename(oldPath, newPath, (err) => {
          if (err) throw err;
          console.log("Image file was renamed (moved) correctly");
        });

        const imageLink = `/projectfiles/${courseId}/questions/${newestQuestionId}/${fileName}`;

        // now rename the question link in mongo
        return model.Exam.findOneAndUpdate(
          {
            _id: req.body.examId,
            "questions._id": newestQuestionId,
          },
          {
            $set: {
              "questions.$.qTechnicalInstruction.imageLink": imageLink,
            },
          }
        );
      })
      .then(() => {
        res.send("Se agregó la pregunta con éxito.");
      })
      .catch((err) => {
        console.log("@error", err);
        res.status(422).send("Ocurrió un error.");
      });
  });
});

module.exports = router;
