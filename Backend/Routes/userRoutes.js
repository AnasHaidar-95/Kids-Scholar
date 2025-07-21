import express from "express";
import { deleteUserData, getUserProfile, updateUserData, updateUserPassword } from "../Controllers/userController.js";
import { protect } from "../Middleware/authMiddleware.js";

const router = express.Router();

router.route("/profile").get(protect, getUserProfile);
router.route("/editProfile").patch(protect, updateUserData);
router.route("/editPassword").patch(protect, updateUserPassword);
router.route("/delete").delete(protect, deleteUserData);

export default router;
