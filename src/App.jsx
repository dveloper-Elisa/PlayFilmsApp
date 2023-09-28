import "./App.css";
import Home from "./componets/home";
import Navigation from "./componets/navigation";
import Movies from "./componets/movie";
import Play from "./componets/playNow";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playnow/:key/:id" element={<Play />} />
        <Route path="/movie/:id/" element={<Movies />} />
      </Routes>
    </>
  );
}

export default App;
