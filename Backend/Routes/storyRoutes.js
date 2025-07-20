import express from "express";
import { protect } from "../Middleware/authMiddleware.js";
import { admin } from "../Middleware/adminMiddleware.js";
import {
    addNewStory,
    getAllStories,
    getStoryById,
    updateStory,
    deleteStory,
} from "../Controllers/storyController.js";

const router = express.Router();

router.route("/").get(getAllStories).post(protect, admin, addNewStory);
router
    .route("/:id")
    .get(getStoryById)
    .patch(protect, admin, updateStory)
    .delete(protect, admin, deleteStory);

export default router;