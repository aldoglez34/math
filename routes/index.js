const router = require("express").Router();

// student
const guestRoutes = require("./api/guestRoutes");
router.use("/api/guest", guestRoutes);

const studentRoutes = require("./api/studentRoutes");
router.use("/api/student", studentRoutes);

const courseRoutes = require("./api/courseRoutes");
router.use("/api/course", courseRoutes);

const examRoutes = require("./api/examRoutes");
router.use("/api/exam", examRoutes);

const freestyleRoutes = require("./api/freestyleRoutes");
router.use("/api/freestyle", freestyleRoutes);

// teacher
const tCoursesRoutes = require("./teacherAPI/tCoursesRoutes");
router.use("/teacherAPI/courses", tCoursesRoutes);

const tMessagesRoutes = require("./teacherAPI/tMessagesRoutes");
router.use("/teacherAPI/messages", tMessagesRoutes);

const tTopicsRoutes = require("./teacherAPI/tTopicsRoutes");
router.use("/teacherAPI/topics", tTopicsRoutes);

const tStudentRoutes = require("./teacherAPI/tStudentRoutes");
router.use("/teacherAPI/students", tStudentRoutes);

module.exports = router;
