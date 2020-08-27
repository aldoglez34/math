const router = require("express").Router();
const model = require("../../models");

// t_fetchCourses()
// matches with /teacherAPI/courses
router.get("/teacherAPI/courses", function (req, res) {
  res.send("test");

//   model.Course.find({}).then((res) => {
//     res.send(res).catch((err) => {
//       res.send(err);
//     });
//   });
});

module.exports = router;
