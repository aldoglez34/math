const router = require("express").Router();
const model = require("../../../models");
const multer = require("multer");
const fs = require("fs");

// t_newSimpleWithImageQuestion()
// matches with /teacherAPI/questions/simpleWithImage/new

let fileName;

const storage = multer.diskStorage({
  destination: "./client/public/_temp",
  filename: function (req, file, cb) {
    fileName = file.originalname;
    // set the name of the file
    cb(null, req.body.photo);
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

    const newQuestion = {
      qType: "simpleWithPic",
      qInstruction: req.body.qInstruction,
      qCorrectAnswers: [
        {
          complement: req.body.qCALeft
            ? req.body.qCALeft
            : req.body.qCARight
            ? req.body.qCARight
            : null,
          answer: req.body.qCorrectAnswers,
          placement: req.body.qCALeft
            ? "left"
            : req.body.qCARight
            ? "right"
            : null,
        },
      ],
      qComment: req.body.qComment,
    };

    const courseId = req.body.courseId;

    model.Exam.findOneAndUpdate(
      { _id: req.body.examId },
      {
        $push: {
          questions: newQuestion,
        },
      }
    )
      .then((question) => {
        console.log(question);
        console.log("question!!!!!!!!!!!!!!!!!!!!!", question);
        // moving the file to the course folder
        // const oldPath = `./client/public/_temp/${fileName}`;
        // const newPath = `./client/public/files/${courseId}/question_pics/${question._id}`;

        // fs.rename(oldPath, newPath, (err) => {
        //   if (err) throw err;
        //   console.log("Image file was renamed (moved) correctly");
        // });
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
