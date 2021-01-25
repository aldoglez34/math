const router = require("express").Router();
const model = require("../../models");

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

// t_fetchAvailableDifficulties()
// matches with /teacherAPI/topics/difficulties/:courseId/:topicId
router.get("/difficulties/:courseId/:topicId", function (req, res) {
  const courseId = req.params.courseId;
  const topicId = req.params.topicId;

  model.Course.find({ _id: courseId, "topics._id": topicId })
    // .select("topics")
    .populate("topics.exams")
    .then((data) =>
      // res.json(data.topics.filter((t) => t._id.toString() === topicId)[0])
      res.send(data)
    )
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error.");
    });
});

////////////////// EDITING FIELDS

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

////////////////// NEW (requires uploading)

// t_newTopic()
// matches with /teacherAPI/topics/new

router.put("/new", function (req, res) {
  const topicData = {
    subject: req.body.subject,
    name: req.body.name,
    description: req.body.description,
    reward: {
      name: req.body.rewardName,
      link: `/projectfiles/${req.body.courseId}/reward/foto.jpg`,
    },
    freestyle: {
      timer: req.body.freestyleTimer,
    },
  };

  model.Course.findById(req.body.courseId)
    .select("topics")
    .then(({ topics }) => {
      let doesNewTopicExist = topics.some(
        (t) => String(t.name).trim() === String(topicData.name).trim()
      );

      if (doesNewTopicExist) {
        res.status(500).send("Un tema con este nombre ya existe en este curso");
      } else {
        model.Course.findOneAndUpdate(
          { _id: req.body.courseId },
          {
            $push: {
              topics: topicData,
            },
          },
          {
            new: true,
          }
        )
          .then((thisCourse) => {
            const newTopic = thisCourse.topics.sort(
              (a, b) => a.createdAt + b.createdAt
            )[0];
            console.log("========================================");
            console.log(newTopic);

            res.json({ topicId: thisCourse._id, topicName: thisCourse.name });
          })
          .catch((err) => {
            console.log("@error", err);
            res.status(422).send("Ocurrió un error");
          });
      }
    })
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error.");
    });
});

module.exports = router;
