import express from "express";
import dotenv from "dotenv";
import connectDB from "./DB/dbConnection.js";
import authRoutes from "./Routes/authRoutes.js";
import userRoutes from "./Routes/userRoutes.js";
import storyRoutes from "./Routes/storyRoutes.js";
import lessonRoutes from "./Routes/lessonRoutes.js";
import gameRoutes from "./Routes/gameRoutes.js";
import quizzRoutes from "./Routes/quizzRoutes.js";
import progressRoutes from "./Routes/progressRoutes.js"
import badgeRoutes from "./Routes/badgeRoutes.js";

import { notFound, errorHandler } from "./Middleware/errorMiddleware.js";
import uploadRouter from "./Routes/upload.js";
import cors from "cors"

dotenv.config();

const app = express();

// Connect to database
connectDB();

// Init Middleware
app.use(express.json());

// Define Routes

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/stories", storyRoutes);
app.use("/api/lessons", lessonRoutes);
app.use("/api/games", gameRoutes);

// Error Middleware
app.use(notFound);
app.use(errorHandler);
