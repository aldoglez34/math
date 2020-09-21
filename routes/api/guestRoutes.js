const router = require("express").Router();
const model = require("../../models");

// postMessage()
// matches with /api/guest/postMessage
router.post("/postMessage", function (req, res) {
  const { body, email, subject, type, name, username } = req.body;

  model.Message.create({
    type,
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
