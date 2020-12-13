const router = require("express").Router();

// ==============================================
// STUDENT API
// ==============================================
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

// ==============================================
// TEACHER API
// ==============================================
const tCoursesRoutes = require("./teacherAPI/tCoursesRoutes");
router.use("/teacherAPI/courses", tCoursesRoutes);

const tMessagesRoutes = require("./teacherAPI/tMessagesRoutes");
router.use("/teacherAPI/messages", tMessagesRoutes);

const tTopicsRoutes = require("./teacherAPI/tTopicsRoutes");
router.use("/teacherAPI/topics", tTopicsRoutes);

const tMaterialRoutes = require("./teacherAPI/tMaterialRoutes");
router.use("/teacherAPI/material", tMaterialRoutes);

const tStudentRoutes = require("./teacherAPI/tStudentRoutes");
router.use("/teacherAPI/students", tStudentRoutes);

const tExamRoutes = require("./teacherAPI/tExamRoutes");
router.use("/teacherAPI/exam", tExamRoutes);

const tRewardsRoutes = require("./teacherAPI/tRewardsRoutes");
router.use("/teacherAPI/rewards", tRewardsRoutes);

const tDifficultiesRoutes = require("./teacherAPI/tDifficultiesRoutes");
router.use("/teacherAPI/difficulties", tDifficultiesRoutes);

// ==============================================
// QUESTIONS
// ==============================================

const deleteQuestionRoute = require("./teacherAPI/questions/deleteQuestionRoute");
router.use("/teacherAPI/questions/delete", deleteQuestionRoute);

const simpleQuestionRoute = require("./teacherAPI/questions/simpleQuestionRoute");
router.use("/teacherAPI/questions/simpleQuestion", simpleQuestionRoute);

const multipleOptionRoute = require("./teacherAPI/questions/multipleOptionRoute");
router.use("/teacherAPI/questions/multipleOption", multipleOptionRoute);

const simpleWithImageRoute = require("./teacherAPI/questions/simpleWithImageRoute");
router.use("/teacherAPI/questions/simpleWithImage", simpleWithImageRoute);

module.exports = router;
