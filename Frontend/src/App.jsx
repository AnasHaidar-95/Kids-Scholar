import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GamePage from "./pages/gamePage";
import MemoryGame from "./components/ShuffleCards";
import Books from "./pages/book/Books";
import GameMathPage from "./pages/GameMathPage";
import BookPage from "./pages/book/BookPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/books" element={<Books />} />
        <Route path="/book" element={<BookPage />} />
        <Route path="/games" element={<GamePage />} />
        <Route path="/math" element={<GameMathPage />} />
        <Route path="/science" element={<MemoryGame />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
