import React, { useState } from "react";

function App() {
  //update the time in <h1> every second
  //using the setInterval method.
  setInterval(updateTime, 1000);

  let time = new Date().toLocaleTimeString();

  // useState hook
  const [currentTime, setTime] = useState(time);

  //show the latest time in the <h1> when the Get Time button
  //is pressed.
  function updateTime() {
    let updatedTime = new Date().toLocaleTimeString();
    setTime(updatedTime);
  }

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
