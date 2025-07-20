import asyncHandler from "express-async-handler";
import Lesson from "../Models/lessonModel.js";

// @desc    Add a new lesson
// @route   POST /api/lessons
// @access  Private/Admin
export const addNewLesson = asyncHandler(async (req, res) => {
    const newLesson = await Lesson.create({
        title: req.body.title,
        image: req.body.image,
        subject: req.body.subject,
        content: req.body.content,
        language: req.body.language,
    });
    res.status(201).json({
        message: "Lesson Added Successfully.",
        success: true,
        data: newLesson,
    });
});

// @desc    Get all lessons
// @route   GET /api/lessons
// @access  Public
export const getAllLessons = asyncHandler(async (req, res) => {
    const lessons = await Lesson.find({});
    res.json(lessons);
});

// @desc    Get a lesson by ID
// @route   GET /api/lessons/:id
// @access  Public
export const getLessonById = asyncHandler(async (req, res) => {
    const lesson = await Lesson.findById(req.params.id);

    if (lesson) {
        res.json(lesson);
    } else {
        res.status(404);
        throw new Error("Lesson not found");
    }
});

// @desc    Update a lesson
// @route   PUT /api/lessons/:id
// @access  Private/Admin
export const updateLesson = asyncHandler(async (req, res) => {
    const lesson = await Lesson.findById(req.params.id);

    if (lesson) {
        lesson.title = req.body.title || lesson.title;
        lesson.image = req.body.image || lesson.image;
        lesson.subject = req.body.subject || lesson.subject;
        lesson.content = req.body.content || lesson.content;
        lesson.language = req.body.language || lesson.language;

        const updatedLesson = await lesson.save();
        res.json(updatedLesson);
    } else {
        res.status(404);
        throw new Error("Lesson not found");
    }
});

// @desc    Delete a lesson
// @route   DELETE /api/lessons/:id
// @access  Private/Admin
export const deleteLesson = asyncHandler(async (req, res) => {
    const lesson = await Lesson.findById(req.params.id);

    if (lesson) {
        await lesson.deleteOne();
        res.json({ message: "Lesson removed" });
    } else {
        res.status(404);
        throw new Error("Lesson not found");
    }
});