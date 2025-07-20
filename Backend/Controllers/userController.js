import asyncHandler from "express-async-handler";
import User from "../Models/userModel.js";

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private

//عرض بيانات المستخدم بشرط وجود توكن
export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      age: user.age,
      badges: user.badges,
      type: user.type,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

//تعديل بيانات المستخدم
export const updateUserData = asyncHandler(async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.user.id,
      {
        name: req.body.name,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, 10),
        age: req.body.age,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(201).json("Profile Info Has Been Edited Sucessfully");
  } catch (error) {
    res.status(500).send(`There Is An Error Editing Profile Info .. ${error}`);
  }
});

//حذف المستخدم
export const deleteUserData = asyncHandler(async (req, res) => {
  try {
    await User.findByIdAndDelete(req.user.id);

    res.status(201).json("User Data Has Been Deleted Sucessfully");
  } catch (error) {
    res.status(500).send(`There Is An Error Deleting User Data .. ${error}`);
  }
});
