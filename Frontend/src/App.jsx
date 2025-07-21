import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MathPage from "./pages/GameMathPage";
import Books from "./pages/book/Books";
import FlipBook from "./pages/book/FlipBook";
import FlipBook2 from "./pages/book/FlipBook2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/books" element={<Books />} />
        <Route path="/flipbooks" element={<FlipBook />} />
        <Route path="/flipbooks2" element={<FlipBook2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
