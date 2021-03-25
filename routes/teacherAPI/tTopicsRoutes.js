const router = require("express").Router();
const model = require("../../models");
const utils = require("../utils/utils");

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
router.put("/new", async (req, res) => {
  const {
    courseId,
    name: topicName,
    subject: topicSubject,
    description: topicDescription,
    freestyleTimer: topicFreestyleTimer,
  } = req.body;

  try {
    // get all the topics from that course
    const topics = await model.Course.findById(courseId)
      .select("topics")
      .then(({ topics }) => topics);

    // check if this topic name exists
    const doesNewTopicExist = topics.some(
      (t) => String(t.name).trim() === String(topicName).trim()
    );

    // get the next topic order number
    const nextTopicOrderNumber = utils.getNextTopicOrderNumber(topics);

    // if a topic with the same name exists, send error to client
    // if not, add the topic
    if (doesNewTopicExist) {
      res.status(500).send("Un tema con este nombre ya existe en este curso");
    } else {
      // generate data for 5 exams, one for each difficulty for the new topic
      const defaultExams = utils.generateDefaultExams(topicName);

      // insert those 5 exams and get their ids
      const addDefaultExams = new Promise((resolve, reject) => {
        const examIds = [];
        defaultExams.forEach((value, index, array) => {
          model.Exam.create(value).then(({ _id }) => {
            examIds.push(_id);
            if (index === array.length - 1) resolve(examIds);
          });
        });
      });

      const examIds = await addDefaultExams.then((res) => res);

      // data for the new topic
      const newTopicData = {
        topicOrderNumber: nextTopicOrderNumber,
        name: topicName,
        subject: topicSubject,
        description: topicDescription,
        freestyle: {
          timer: topicFreestyleTimer,
        },
        exams: examIds,
      };

      // push the topic
      const insertNewTopic = await model.Course.findOneAndUpdate(
        { _id: courseId },
        { $push: { topics: newTopicData } },
        { new: true }
      ).then(({ topics }) => topics);

      // get the newly created topic data
      const newlyCreatedTopic = insertNewTopic.filter(
        (t) => String(t.name).trim() === String(newTopicData.name).trim()
      )[0];

      // edit the topic to build the reward link
      // this needs to be done after the topic is created+
      // because it uses the _id of the newly created topic
      await model.Course.findOneAndUpdate(
        { _id: courseId, "topics._id": newlyCreatedTopic._id },
        {
          $set: {
            "topics.$.reward": {
              link: `${courseId}/${newlyCreatedTopic._id}/rewards/medal`,
            },
          },
        }
      );

      // send back to the client
      res.json({
        topicId: newlyCreatedTopic._id,
        topicName: newlyCreatedTopic.name,
      });
    }
  } catch (err) {
    console.log("@error", err);
    res.status(422).send("Ocurrió un error");
  }
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
