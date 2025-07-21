import express from "express";
import {
  addNewQuizz,
  deleteQuizz,
  getAllQuizzes,
  getQuizzById,
  updateQuizz,
} from "../Controllers/quizzController.js";
import { protect } from "../Middleware/authMiddleware.js";
import { admin } from "../Middleware/adminMiddleware.js";

const router = express.Router();

router
  .route("/")
  .get(protect, admin, getAllQuizzes)
  .post(protect, admin, addNewQuizz);
router.route("/:id").get(getQuizzById).patch(protect,admin,updateQuizz).delete(protect,admin,deleteQuizz);
export default router;
