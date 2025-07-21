import express from "express";
import { protect } from "../Middleware/authMiddleware.js";
import { admin } from "../Middleware/adminMiddleware.js";
import { addNewProgress, deleteProgress, getMyProgress, getUserProgress, updateProgress } from "../Controllers/progressController.js";

const router = express.Router();

router.route("/").get(protect,getMyProgress).post(protect, admin, addNewProgress).patch(protect,updateProgress);
router
.route("/:id")
.get(protect,getUserProgress).delete(protect,admin,deleteProgress)

    // .patch(protect, admin, updateGame)
    // .delete(protect, admin, deleteGame);

export default router;