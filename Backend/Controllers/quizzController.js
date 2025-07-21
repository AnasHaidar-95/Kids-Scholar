import asyncHandler from "express-async-handler";
import Quizz from "../Models/quizzModel.js";
import Lesson from "../Models/lessonModel.js";
import Story from "../Models/storyModel.js";

// @desc    Add a new quizz
// @route   POST /api/quizzes
// @access  Private/Admin
export const addNewQuizz = asyncHandler(async (req, res) => {
  const { title, lessonTitle, storyTitle, subject, questions, image } =
    req.body;

  let linkedLessonId = null;
  let linkedStoryId = null;

  if (lessonTitle) {
    const lesson = await Lesson.findOne({ title: lessonTitle });
    if (!lesson) {
      res.status(404);
      throw new Error("Lesson with this name not found");
    }
    linkedLessonId = lesson._id;
  }

  if (storyTitle) {
    const story = await Story.findOne({ title: storyTitle });
    if (!story) {
      res.status(404);
      throw new Error("Story with this name not found");
    }
    linkedStoryId = story._id;
  }

  // Prevent both being set at once (optional rule)
  if (linkedLessonId && linkedStoryId) {
    res.status(400);
    throw new Error(
      "A quiz can only be linked to either a lesson or a story, not both."
    );
  }

  const newQuizz = await Quizz.create({
    title,
    subject,
    image,
    questions,
    lesson: linkedLessonId,
    story: linkedStoryId,
  });

  res.status(201).json({
    message: "Quiz added successfully.",
    success: true,
    data: newQuizz,
  });
});

// @desc    Get all Quizzes
// @route   GET /api/Quizzes
// @access  Private/Admin
export const getAllQuizzes = asyncHandler(async (req, res) => {
  const quizzes = await Quizz.find({});
  res.json(quizzes);
});

// @desc    Get a quiz by ID
// @route   GET /api/quizzes/:id
// @access  Public
export const getQuizzById = asyncHandler(async (req, res) => {
  const quizz = await Quizz.findById(req.params.id);

  if (quizz) {
    res.json(quizz);
  } else {
    res.status(404);
    throw new Error("Story not found");
  }
});

// @desc    Update a quizz
// @route   patch /api/quizzes/:id
// @access  Private/Admin

export const updateQuizz = asyncHandler(async (req, res) => {
  const quizz = await Quizz.findById(req.params.id);

  if (!quizz) {
    res.status(404);
    throw new Error("Quiz not found");
  }

  const {
    title,
    subject,
    image,
    questions,
    lessonId,
    storyId,
    lessonTitle,
    storyTitle,
  } = req.body;

  // Update basic fields
  if (title) quizz.title = title;
  if (subject) quizz.subject = subject;
  if (image !== undefined) quizz.image = image;
  if (questions) quizz.questions = questions;

  // Resolve lessonTitle or storyTitle if provided
  let resolvedLessonId = lessonId || null;
  let resolvedStoryId = storyId || null;

  if (lessonTitle) {
    const lesson = await Lesson.findOne({ title: lessonTitle });
    if (!lesson) {
      res.status(404);
      throw new Error("Lesson with this name not found");
    }
    resolvedLessonId = lesson._id;
  }

  if (storyTitle) {
    const story = await Story.findOne({ title: storyTitle });
    if (!story) {
      res.status(404);
      throw new Error("Story with this name not found");
    }
    resolvedStoryId = story._id;
  }

  // Check that both lesson and story are not set at the same time
  if (resolvedLessonId && resolvedStoryId) {
    res.status(400);
    throw new Error("Quiz can only be linked to either a lesson or a story, not both.");
  }

  quizz.lesson = resolvedLessonId;
  quizz.story = resolvedStoryId;

  const updatedQuizz = await quizz.save();

  res.json({
    message: "Quiz updated successfully",
    success: true,
    data: updatedQuizz,
  });
});


// @desc    Delete a quizz
// @route   DELETE /api/quizzes/:id
// @access  Private/Admin
export const deleteQuizz = asyncHandler(async (req, res) => {
  const quizz = await Quizz.findByIdAndDelete(req.params.id);

  if (quizz) {
    res.json({ message: "Quizz removed" });
  } else {
    res.status(404);
    throw new Error("Quizz not found");
  }
});
