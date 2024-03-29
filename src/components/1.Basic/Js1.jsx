import React, { useState } from "react";

// Write a JavaScript program to display the current day and time in the following format.
// Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

function DayNTime() {
  const [date, setDate] = useState({ day: "", time: "" });
  const getDate = (date) => {
    const d = new Date();
    const day = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const time = [];
    time.push(d.getHours() % 12);
    time.push(d.getMinutes());
    time.push(d.getSeconds());
    setDate({
      day: day[d.getDay()],
      time: `${time[0]}: ${time[1]}: ${time[2]} ${
        d.getHours() / 12 ? "PM" : "AM"
      }`,
    });
  };

  return (
    <div>
      <h5>TO get Get current time and date</h5>
      <button onClick={() => getDate(date)}>Click here</button>
      {date.day ? <p>Day : {date.day}</p> : null}
      {date.time ? <p>Time : {date.time}</p> : null}
    </div>
  );
}

export default DayNTime;
