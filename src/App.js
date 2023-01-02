import { Route, Routes } from "react-router-dom";
import Home from "./view/Home";
import Surah from "./view/Surah";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/surah" element={<Surah />} />
    </Routes>
  );
}

export default App;
