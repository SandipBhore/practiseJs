import React, { useState } from "react";

// Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.
function TrianfleArea() {
  const [area, setArea] = useState(0);
  const [base, setBase] = useState({ base: 0, height: 0 });

  const areaCal = (base, height) => {
    setArea((1 / 2) * base * height);
  };
  return (
    <div className="triangle">
      <div>
        height
        <input
          min={0}
          type="number"
          onChange={(e) => setBase({ ...base, height: e.target.value })}
        />
      </div>
      <div>
        base
        <input
          min={0}
          type="number"
          onChange={(e) => setBase({ ...base, base: e.target.value })}
        />
      </div>
      <button onClick={() => areaCal(base.base, base.height)}>submit</button>
      <div>{area}</div>
    </div>
  );
}

export default TrianfleArea;
