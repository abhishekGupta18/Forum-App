import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Home } from "./Pages/Home";
import { Questions } from "./Pages/Questions";
import { Answers } from "./Pages/Answers";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/questions/:answerId" element={<Answers />} />
      </Routes>
    </div>
  );
}

export default App;
