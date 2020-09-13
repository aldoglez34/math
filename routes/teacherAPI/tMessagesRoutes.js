const router = require("express").Router();
const model = require("../../models");

// t_fetchMessages()
// matches with /teacherAPI/messages/all
router.get("/all", function (req, res) {
  model.Message.find()
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error.");
    });
});

module.exports = router;
