import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MathPage from "./pages/GameMathPage";
import Books from "./pages/book/Books";
import FlipBook from "./pages/book/FlipBook";
import FlipBook2 from "./pages/book/FlipBook2";
import FlipBook3 from "./pages/book/FlipBook3";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/books" element={<Books />} />
        <Route path="/flipbooks" element={<FlipBook />} />
        <Route path="/flipbooks2" element={<FlipBook2 />} />
        <Route path="/flipbooks3" element={<FlipBook3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
