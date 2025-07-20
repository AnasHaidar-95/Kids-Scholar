import express from "express";
import { protect } from "../Middleware/authMiddleware.js";
import { admin } from "../Middleware/adminMiddleware.js";
import {
    addNewLesson,
    getAllLessons,
    getLessonById,
    updateLesson,
    deleteLesson,
} from "../Controllers/lessonController.js";

const router = express.Router();

router.route("/").get(getAllLessons).post(protect, admin, addNewLesson);
router
    .route("/:id")
    .get(getLessonById)
    .patch(protect, admin, updateLesson)
    .delete(protect, admin, deleteLesson);

export default router;