const router = require("express").Router();
const model = require("../../models");
const multer = require("multer");
const fs = require("fs");

// t_deleteReward
// matches with /teacherAPI/rewards/delete
router.put("/delete", function (req, res) {
  const { filePath, courseId, topicId } = req.body;

  model.Course.update(
    {
      _id: courseId,
      "topics._id": topicId,
    },
    {
      $set: {
        "topics.$.reward": null,
      },
    }
  )
    .then(() => {
      // delete file
      fs.unlinkSync(`./client/public/${filePath}`);
      console.log("File removed...");
    })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error.");
    });
});

// t_addReward
// matches with /teacherAPI/reward/add
let fileName;

const storage = multer.diskStorage({
  destination: "./client/public/_temp",
  filename: function (req, file, cb) {
    // cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
    fileName = file.originalname;
    // set the name of the file
    cb(null, req.body.image);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 4000000 },
}).single("file");

router.put("/add", function (req, res) {
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

    const { courseId, topicId, name } = req.body;

    model.Course.findOneAndUpdate(
      {
        _id: courseId,
        "topics._id": topicId,
      },
      {
        $set: {
          "topics.$.reward": {
            name,
            link: `/files/${courseId}/reward/${fileName}`,
          },
        },
      }
    )
      .then(() => {
        // moving the file to the course folder
        const oldPath = `./client/public/_temp/${fileName}`;
        const newPath = `./client/public/files/${courseId}/reward/${fileName}`;

        fs.rename(oldPath, newPath, (err) => {
          if (err) throw err;
          console.log("Image file was renamed (moved) correctly");
        });
      })
      .then(() => {
        res.send("La recompensa fue agregada con éxito.");
      })
      .catch((err) => {
        console.log("@error", err);
        res.status(422).send("Ocurrió un error.");
      });
  });
});

module.exports = router;
