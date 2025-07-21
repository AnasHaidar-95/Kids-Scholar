import asyncHandler from "express-async-handler";
import Story from "../Models/storyModel.js";

// @desc    Add a new story
// @route   POST /api/stories
// @access  Private/Admin
export const addNewStory = asyncHandler(async (req, res) => {
    const newStory = await Story.create({
        title: req.body.title,
        description: req.body.description,
        author: req.body.author,
        category: req.body.category,
        content: req.body.content,
        image: req.body.image,
    });
    res.status(201).json({
        message: "Story Added Successfully.",
        success: true,
        data: newStory,
    });
});

// @desc    Get all stories
// @route   GET /api/stories
// @access  Public
export const getAllStories = asyncHandler(async (req, res) => {
    const stories = await Story.find({});
    res.json(stories);
});

// @desc    Get a story by ID
// @route   GET /api/stories/:id
// @access  Public
export const getStoryById = asyncHandler(async (req, res) => {
    const story = await Story.findById(req.params.id);

    if (story) {
        res.json(story);
    } else {
        res.status(404);
        throw new Error("Story not found");
    }
});

// @desc    Update a story
// @route   PUT /api/stories/:id
// @access  Private/Admin
export const updateStory = asyncHandler(async (req, res) => {
    const story = await Story.findById(req.params.id);

    if (story) {
        story.title = req.body.title || story.title;
        story.description = req.body.description || story.description;
        story.author = req.body.author || story.author;
        story.category = req.body.category || story.category;
        story.content = req.body.content || story.content;
        story.image = req.body.image || story.image;

        const updatedStory = await story.save();
        res.json(updatedStory);
    } else {
        res.status(404);
        throw new Error("Story not found");
    }
});

// @desc    Delete a story
// @route   DELETE /api/stories/:id
// @access  Private/Admin
export const deleteStory = asyncHandler(async (req, res) => {
    const story = await Story.findByIdAndDelete(req.params.id);

    if (story) {
        res.json({ message: "Story removed" });
    } else {
        res.status(404);
        throw new Error("Story not found");
    }
});