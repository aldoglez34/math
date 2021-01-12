const router = require("express").Router();
const model = require("../../models");
const mongoose = require("mongoose");
const multer = require("multer");
const fs = require("fs");

// t_addVideoToMaterial
// matches with /teacherAPI/material/video/add
router.put("/video/add", function (req, res) {
  const { courseId, topicId, name, link } = req.body;

  model.Course.update(
    {
      _id: courseId,
      "topics._id": topicId,
    },
    {
      $push: {
        "topics.$.material": {
          type: "video",
          name,
          link,
        },
      },
    }
  )
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error.");
    });
});

// t_addPDFToMaterial
// matches with /teacherAPI/material/pdf/add
let fileName;

const storage = multer.diskStorage({
  // destination: "./client/public/projectfiles/" + req.body.courseId + "/reward",
  destination: "./client/public/_temp",
  filename: function (req, file, cb) {
    // cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
    fileName = file.originalname;
    // set the name of the file
    cb(null, req.body.pdf);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 4000000 },
}).single("file");

router.put("/pdf/add", function (req, res) {
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
        $push: {
          "topics.$.material": {
            type: "pdf",
            name,
            link: `./client/public/projectfiles/${courseId}/material/${fileName}`,
          },
        },
      }
    )
      .then(() => {
        // res.send("El pdf fue agregado con éxito.");

        // moving the file to the course folder
        const oldPath = `./client/public/_temp/${fileName}`;
        const newPath = `./client/public/projectfiles/${courseId}/material/${fileName}`;

        fs.rename(oldPath, newPath, (err) => {
          if (err) throw err;
          console.log("PDF file was renamed (moved) correctly");

          res.send("El PDF fue agregado con éxito.");
        });
      })
      .catch((err) => {
        console.log("@error", err);
        res.status(422).send("Ocurrió un error.");
      });
  });
});

// t_deleteMaterial
// matches with /teacherAPI/material/delete
router.put("/delete", function (req, res) {
  const { isPDF, courseId, topicId, materialId } = req.body;

  model.Course.updateOne(
    {
      _id: mongoose.Types.ObjectId(courseId),
      "topics._id": topicId,
    },
    {
      $pull: {
        "topics.$.material": {
          _id: materialId,
        },
      },
    }
  )
    .then((data) => {
      // if the item is a pdf, delete the file
      if (isPDF) {
        fs.unlinkSync(isPDF);
        console.log("File removed...");
        res.json(data);
      } else {
        res.json(data);
      }
    })
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error.");
    });
});

module.exports = router;
