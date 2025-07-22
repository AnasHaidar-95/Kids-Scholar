import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MathPage from "./pages/GameMathPage";
import Books from "./pages/book/Books";
import FlipBook from "./pages/book/FlipBook";
import FlipBook2 from "./pages/book/FlipBook2";
import AdminDashboard from "./components/AdminDashboard"
import AdminUser from "./components/Admin-User"
import AdminStory from "./components/Admin-Story"
import AdminLesson from "./components/Admin-Lesson"
import AdminQuizz from "./components/Admin-Quizz"
import AdminGame from "./components/Admin-Game"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/books" element={<Books />} />
        <Route path="/flipbooks" element={<FlipBook />} />
        <Route path="/flipbooks2" element={<FlipBook2 />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/AdminUser" element={<AdminUser />} />
        <Route path="/AdminStory" element={<AdminStory />} />
        <Route path="/AdminQuizz" element={<AdminQuizz />} />
        <Route path="/AdminLesson" element={<AdminLesson />} />
        <Route path="/AdminGame" element={<AdminGame />} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
