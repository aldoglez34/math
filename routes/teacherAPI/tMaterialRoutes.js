const router = require("express").Router();
const model = require("../../models");
const mongoose = require("mongoose");

// t_addMaterial
// matches with /teacherAPI/material/add
router.put("/add", function (req, res) {
  const { courseId, name, topicId, type } = req.body;

  let link;

  if (type === "video") link = req.body.link;
  if (type === "pdf") link = `${courseId}/${topicId}/material/${name}`;

  model.Course.findById(courseId)
    .select("topics")
    .then(({ topics }) => {
      const topic = topics.filter((t) => String(t._id) === String(topicId))[0];

      const latestMaterial = topic.material.sort(
        (a, b) => b.materialOrderNumber - a.materialOrderNumber
      )[0];

      const highestMaterialOrderNumber = latestMaterial
        ? latestMaterial.materialOrderNumber
        : 0;

      model.Course.update(
        {
          _id: courseId,
          "topics._id": topicId,
        },
        {
          $push: {
            "topics.$.material": {
              materialOrderNumber: highestMaterialOrderNumber + 1,
              link,
              name,
              type,
            },
          },
        }
      )
        .then(() => res.send("El elemento fue agregado con éxito."))
        .catch((err) => {
          console.log("@error", err);
          res.status(422).send("Ocurrió un error.");
        });
    })
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error.");
    });
});

// t_deleteMaterial
// matches with /teacherAPI/material/delete
router.put("/delete", function (req, res) {
  const { courseId, materialId, topicId } = req.body;

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
    .then(() => res.json("El elemento fue eliminado con éxito."))
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error.");
    });
});

// t_updateMaterialOrder()
// matches with /teacherAPI/material/update/order
router.put("/update/order", function (req, res) {
  const { courseId, newList, topicId } = req.body;

  // console.log("\n\nUPDATING MATERIAL ORDER - CHANGES:\n");
  // console.log(newList);
  // console.log("\n\n");

  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!");

  model.Course.find({ _id: courseId, "topics._id": topicId })
    .select("topics")
    .then(({ topics }) => {
      console.log(topics);
    })
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error.");
      reject();
    });
});

module.exports = router;
