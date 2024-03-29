import "./App.css";
import "./components/index";
import { Routes, Route, Link } from "react-router-dom";
import DayNTime from "./components/1.Basic/Js1";
import PrintPage from "./components/1.Basic/Js2";
import Home from "./components/Home";
import DateFormat from "./components/1.Basic/Js3";
import TrianfleArea from "./components/1.Basic/Js4";

function App() {
  return (
    <div>
      <h2>Hello JavaScript</h2>
      <Link to="/" id="backbtn">
        <button>back to Home</button>
      </Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="DayNTime" element={<DayNTime />} />
        <Route path="PrintPage" element={<PrintPage />} />
        <Route path="DateFormat" element={<DateFormat />} />
        <Route path="TrianfleArea" element={<TrianfleArea />} />
        {/* <Route path="" element={< />} /> */}
      </Routes>
    </div>
  );
}

export default App;
