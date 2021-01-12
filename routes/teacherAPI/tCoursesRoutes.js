const router = require("express").Router();
const model = require("../../models");
const fs = require("fs");

// t_fetchCourses()
// matches with /teacherAPI/courses/all
router.get("/all", function (req, res) {
  model.Course.find({})
    .sort({ name: 1 })
    .select("name school isActive")
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error.");
    });
});

// t_fetchOneCourse()
// matches with /teacherAPI/courses/:courseId
router.get("/:courseId", function (req, res) {
  const { courseId } = req.params;

  model.Course.findById(courseId)
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error.");
    });
});

////////////////// new

// t_newCourse
// matches with /teacherAPI/courses/new
router.post("/new", function (req, res) {
  const { name, school, description, price, summary } = req.body;

  model.Course.create({
    name: name,
    school: school,
    price: price,
    description: description,
    topicsSummary: summary.split(","),
  })
    .then((data) => {
      const newCourseId = data._id;

      // create main folder
      fs.mkdir(
        "mathprojectmex/app/client/public/projectfiles/" + newCourseId,
        function (err) {
          if (err) {
            console.log(err);
          } else {
            console.log("The main folder has been created succesfully.");
          }
        }
      );

      // create reward folder
      fs.mkdir(
        "mathprojectmex/app/client/public/projectfiles/" +
          newCourseId +
          "/reward",
        function (err) {
          if (err) {
            console.log(err);
          } else {
            console.log("Reward folder has been created succesfully.");
          }
        }
      );

      // create exams folder
      fs.mkdir(
        "mathprojectmex/app/client/public/projectfiles/" +
          newCourseId +
          "/exams",
        function (err) {
          if (err) {
            console.log(err);
          } else {
            console.log("Exams folder has been created succesfully.");
          }
        }
      );

      // create material folder
      fs.mkdir(
        "mathprojectmex/app/client/public/projectfiles/" +
          newCourseId +
          "/material",
        function (err) {
          if (err) {
            console.log(err);
          } else {
            console.log("Material folder has been created succesfully.");
          }
        }
      );

      // create questions folder
      fs.mkdir(
        "./mathprojectmex/app/client/public/projectfiles/" +
          newCourseId +
          "/questions",
        function (err) {
          if (err) {
            console.log(err);
          } else {
            console.log("Questions folder has been created succesfully.");
          }
        }
      );

      // send response to the client
      res.json(data);
    })
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error.");
    });
});

////////////////// updating

// t_updateCourseName
// matches with /teacherAPI/courses/update/name
router.put("/update/name", function (req, res) {
  const newName = req.body.newName;
  const courseId = req.body.courseId;

  model.Course.findByIdAndUpdate(courseId, { name: newName })
    .then(() => {
      res.json("Nombre del curso actualizado satisfactoriamente.");
    })
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error.");
    });
});

// t_updateCourseSchool
// matches with /teacherAPI/courses/update/school
router.put("/update/school", function (req, res) {
  const newSchool = req.body.newSchool;
  const courseId = req.body.courseId;

  model.Course.findByIdAndUpdate(courseId, { school: newSchool })
    .then(() => {
      res.json("Nivel escolar del curso actualizado satisfactoriamente.");
    })
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error.");
    });
});

// t_updateCourseStatus
// matches with /teacherAPI/courses/update/status
router.put("/update/status", function (req, res) {
  const newStatus = req.body.newStatus;
  const courseId = req.body.courseId;

  model.Course.findByIdAndUpdate(courseId, { isActive: newStatus })
    .then(() => {
      res.json("Estatus del curso actualizado satisfactoriamente.");
    })
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error.");
    });
});

// t_updateCoursePrice
// matches with /teacherAPI/courses/update/price
router.put("/update/price", function (req, res) {
  const { newPrice, courseId } = req.body;

  model.Course.findByIdAndUpdate(courseId, { price: newPrice })
    .then(() => {
      res.json("Precio del curso actualizada satisfactoriamente.");
    })
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error.");
    });
});

// t_updateCourseDescription
// matches with /teacherAPI/courses/update/description
router.put("/update/description", function (req, res) {
  const { newDescription, courseId } = req.body;

  model.Course.findByIdAndUpdate(courseId, { description: newDescription })
    .then(() => {
      res.json("Descripción del curso actualizada satisfactoriamente.");
    })
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error.");
    });
});

// t_updateCourseSummary
// matches with /teacherAPI/courses/update/summary
router.put("/update/summary", function (req, res) {
  const { newSummary, courseId } = req.body;

  model.Course.findByIdAndUpdate(courseId, {
    topicsSummary: newSummary.split(","),
  })
    .then(() => {
      res.json("Descripción del curso actualizada satisfactoriamente.");
    })
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error.");
    });
});

module.exports = router;
