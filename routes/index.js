const router = require("express").Router();

const studentRoutes = require("./api/studentRoutes");
router.use("/api/student", studentRoutes);

module.exports = router;
