import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  // Optional: Link a quiz to a specific lesson
  lesson: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lesson",
  },
  subject: {
    type: String,
    required: true,
  },
  questions: [{
    questionText: {
      type: String,
      required: true,
    },
    // Array of possible answers
    options: {
      type: [String],
      required: true,
    },
    correctAnswerIndex: {
      type: Number,
      required: true,
    }
  }]
});

export default mongoose.model("Quiz", quizSchema);