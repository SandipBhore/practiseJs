import React, { useState } from "react";

// Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy or dd-mm-yyyy

function DateFormat() {
  const [date, setDate] = useState("");
  const handle = (format) => {
    const d = new Date();
    const formatValue = [];
    {
      format == "ddmmyyyy"
        ? setDate(
            () => d.getDate() + ":" + (d.getMonth() + 1) + ":" + d.getFullYear()
          )
        : setDate(
            () => d.getMonth() + 1 + ":" + d.getDate() + ":" + d.getFullYear()
          );
    }
  };
  return (
    <div>
      <button onClick={() => handle("mmddyyyy")}>mm-dd-yyyy</button>
      <button onClick={() => handle("ddmmyyyy")}>dd-mm-yyyy</button>
      <p>{date}</p>
    </div>
  );
}

export default DateFormat;
