import express from "express";
import { protect } from "../Middleware/authMiddleware.js";
import { admin } from "../Middleware/adminMiddleware.js";
import {
    addNewGame,
    getAllGames,
    getGameById,
    updateGame,
    deleteGame,
} from "../Controllers/gameController.js";

const router = express.Router();

router.route("/").get(getAllGames).post(protect, admin, addNewGame);
router
    .route("/:id")
    .get(getGameById)
    .patch(protect, admin, updateGame)
    .delete(protect, admin, deleteGame);

export default router;