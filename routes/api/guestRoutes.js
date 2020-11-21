const router = require("express").Router();
const model = require("../../models");

// fetchSchoolDropdownItems()
// matches with /api/guest/fetchSchoolDropdownItems
router.get("/fetchSchoolDropdownItems", function (req, res) {
  model.Course.find({})
    .select("school")
    .distinct("school")
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("@error", err);
      res
        .status(422)
        .send(
          "Ocurrió un error al enviar el mensaje, inténtalo de nuevo más tarde"
        );
    });
});

// fetchCoursesBySchool()
// matches with /api/guest/fetchCoursesBySchool/:school
router.get("/fetchCoursesBySchool/:school", function (req, res) {
  const school = req.params.school;

  model.Course.find({ school })
    // .select("school")
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("@error", err);
      res
        .status(422)
        .send(
          "Ocurrió un error al enviar el mensaje, inténtalo de nuevo más tarde"
        );
    });
});

// fetchLandingPageCourses()
// matches with /api/guest/fetchCourses
router.get("/fetchCourses", function (req, res) {
  model.Course.find({})
    .select("school name topicsSummary")
    .then((data) => {
      const dataobj = data.reduce((acc, obj) => {
        let key = obj["school"];
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
      }, {});

      const arr = [];

      if (dataobj.Primaria)
        arr.push({ school: "Primaria", courses: dataobj.Primaria });
      if (dataobj.Secundaria)
        arr.push({ school: "Secundaria", courses: dataobj.Secundaria });
      if (dataobj.Preparatoria)
        arr.push({ school: "Preparatoria", courses: dataobj.Preparatoria });
      if (dataobj.Universidad)
        arr.push({ school: "Universidad", courses: dataobj.Universidad });

      return arr;
    })
    .then((arr) => res.json(arr))
    .catch((err) => {
      console.log("@error", err);
      res
        .status(422)
        .send(
          "Ocurrió un error al enviar el mensaje, inténtalo de nuevo más tarde"
        );
    });
});

// postMessage()
// matches with /api/guest/postMessage
router.post("/postMessage", function (req, res) {
  const { body, email, subject, source, name, username } = req.body;

  console.log(req.body);

  model.Message.create({
    source,
    name,
    username,
    email,
    subject,
    body,
  })
    .then(() =>
      res.json(
        "El mensaje se ha enviado con éxito, nosotros nos pondremos en contacto contigo al correo proporcionado"
      )
    )
    .catch((err) => {
      console.log("@error", err);
      res
        .status(422)
        .send(
          "Ocurrió un error al enviar el mensaje, inténtalo de nuevo más tarde"
        );
    });
});

module.exports = router;
