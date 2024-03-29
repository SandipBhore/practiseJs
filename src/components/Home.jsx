import React from "react";
import DayNTime from "./1.Basic/Js1";
import PrintPage from "./1.Basic/Js2";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home">
      <p>Click on any button to redirect to component</p>
      {/* Links to different components */}
      <Link to="/DayNTime">
        <button>DayNTime</button>
      </Link>
      <Link to="/PrintPage">
        <button>PrintPage</button>
      </Link>
      <Link to="/DateFormat">
        <button>DateFormat</button>
      </Link>
      <Link to="/TrianfleArea">
        <button>TrianfleArea</button>
      </Link>
    </div>
  );
}

export default Home;
