const router = require("express").Router();
const model = require("../../models");
const multer = require("multer");

// t_fetchTopic()
// matches with /teacherAPI/topics/:courseId/:topicId
router.get("/:courseId/:topicId", function (req, res) {
  const { courseId, topicId } = req.params;

  model.Course.findById(courseId)
    .select("topics")
    .populate("topics.exams")
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
  const { newName, courseId, topicId } = req.body;

  model.Course.update(
    {
      _id: courseId,
      "topics._id": topicId,
    },
    { "topics.$.name": newName }
  )
    .then((data) => {
      res.json(data);
      // res.json("Nombre del curso actualizado satisfactoriamente.");
    })
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error.");
    });
});

// t_updateTopicSubject
// matches with /teacherAPI/topics/update/subject
router.put("/update/subject", function (req, res) {
  const { newSubject, courseId, topicId } = req.body;

  model.Course.update(
    {
      _id: courseId,
      "topics._id": topicId,
    },
    { "topics.$.subject": newSubject }
  )
    .then((data) => {
      res.json(data);
      // res.json("Nombre del curso actualizado satisfactoriamente.");
    })
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error.");
    });
});

// t_updateTopicDescription
// matches with /teacherAPI/topics/update/description
router.put("/update/description", function (req, res) {
  const { newDescription, courseId, topicId } = req.body;

  model.Course.update(
    {
      _id: courseId,
      "topics._id": topicId,
    },
    { "topics.$.description": newDescription }
  )
    .then((data) => {
      res.json(data);
      // res.json("Nombre del curso actualizado satisfactoriamente.");
    })
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error.");
    });
});

// t_updateTopicFreestyleTimer
// matches with /teacherAPI/topics/update/timer
router.put("/update/timer", function (req, res) {
  const { newTimer, courseId, topicId } = req.body;

  model.Course.update(
    {
      _id: courseId,
      "topics._id": topicId,
    },
    { "topics.$.freestyle.timer": newTimer }
  )
    .then((data) => {
      res.json(data);
      // res.json("Nombre del curso actualizado satisfactoriamente.");
    })
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error.");
    });
});

// new

// t_newTopic()
// matches with /teacherAPI/topics/new
const storage = multer.diskStorage({
  // destination: "./client/public/files/" + req.body.courseId + "/reward",
  destination: "./client/public/__temp",
  filename: function (req, file, cb) {
    // cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
    // set the name of the file
    cb(null, req.body.photo);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 4000000 },
}).single("file");

router.put("/new", function (req, res) {
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

    const topicData = {
      topicCode: "nuevo",
      subject: req.body.subject,
      name: req.body.name,
      description: req.body.description,
      reward: {
        name: req.body.rewardName,
        link: "/files/" + req.body.courseId + "/reward",
      },
      freestyle: {
        timer: req.body.freestyleTimer,
      },
    };

    model.Course.findOneAndUpdate(
      { _id: req.body.courseId },
      {
        $push: {
          topics: topicData,
        },
      }
    )
      .then(() => {
        res.send("El tema fue agregado con éxito.");
        console.log("./client/public/files/" + req.body.courseId + "/reward");
      })
      .catch((err) => {
        console.log("@error", err);
        res.status(422).send("Ocurrió un error");
      });
  });
});

module.exports = router;
