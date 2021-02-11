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
    .then((data) => res.json(data))
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

// t_newTopic()
// matches with /teacherAPI/topics/new
router.put("/new", function (req, res) {
  const courseId = req.body.courseId;

  model.Course.findById(courseId)
    .select("topics")
    .then(({ topics }) => {
      const doesNewTopicExist = topics.some(
        (t) => String(t.name).trim() === String(req.body.name).trim()
      );

      const latestTopic = topics.sort(
        (a, b) => b.topicOrderNumber - a.topicOrderNumber
      )[0];

      const highestTopicOrderNumber = latestTopic
        ? latestTopic.topicOrderNumber
        : 0;

      if (doesNewTopicExist) {
        res.status(500).send("Un tema con este nombre ya existe en este curso");
      } else {
        const newTopicData = {
          topicOrderNumber: highestTopicOrderNumber + 1,
          subject: req.body.subject,
          name: req.body.name,
          description: req.body.description,
          freestyle: {
            timer: req.body.freestyleTimer,
          },
        };

        model.Course.findOneAndUpdate(
          { _id: courseId },
          { $push: { topics: newTopicData } },
          { new: true }
        )
          .then(({ topics }) => {
            const newlyCreatedTopic = topics.filter(
              (t) => String(t.name).trim() === String(newTopicData.name).trim()
            )[0];

            // insert reward
            model.Course.findOneAndUpdate(
              {
                _id: courseId,
                "topics._id": newlyCreatedTopic._id,
              },
              {
                $set: {
                  "topics.$.reward": {
                    link: `${courseId}/${newlyCreatedTopic._id}/rewards/medal`,
                  },
                },
              }
            )
              .then(() => {
                res.json({
                  topicId: newlyCreatedTopic._id,
                  topicName: newlyCreatedTopic.name,
                });
              })
              .catch((err) => {
                console.log("@error", err);
                res.status(422).send("Ocurrió un error");
              });
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

// t_updateTopicOrder()
// matches with /teacherAPI/topics/update/order
router.put("/update/order", function (req, res) {
  const { courseId, newList } = req.body;

  let updateAllTopics = new Promise((resolve, reject) => {
    newList.forEach((value, index, array) => {
      const { _id: topicId, newOrderNumber } = value;

      model.Course.update(
        {
          _id: courseId,
          "topics._id": topicId,
        },
        { "topics.$.topicOrderNumber": newOrderNumber }
      )
        .then(() => {
          if (index === array.length - 1) resolve();
        })
        .catch((err) => {
          console.log("@error", err);
          res.status(422).send("Ocurrió un error.");
          reject();
        });
    });
  });

  updateAllTopics
    .then(() => res.send("Los temas fueron actualizados con éxito."))
    .catch((err) => console.log(err));
});

module.exports = router;
