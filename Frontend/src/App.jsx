import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Games from "./pages/Games";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Games/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
