import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/NewsPage";
import Games from "./pages/Games";
import Community from "./pages/Community";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/games" element={<Games />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
