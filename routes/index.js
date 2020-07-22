const router = require("express").Router();

const studentRoutes = require("./api/studentRoutes");
router.use("/api/student", studentRoutes);

const courseRoutes = require("./api/courseRoutes");
router.use("/api/course", courseRoutes);

const examRoutes = require("./api/examRoutes");
router.use("/api/exam", examRoutes);

const freestyleRoutes = require("./api/freestyleRoutes");
router.use("/api/freestyle", freestyleRoutes);

module.exports = router;
