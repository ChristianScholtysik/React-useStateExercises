import { useState } from "react";
import "./DayNight.css";

const DayNight = () => {
  const [isDay, setIsDay] = useState(true);

  const switchMode = () => {
    setIsDay(!isDay);
  };

  return (
    <div className={`wrapper ${isDay ? "day" : "night"}`}>
      <h1>{isDay ? "Day" : "Night"}</h1>
      <button onClick={switchMode}>
        {isDay ? "Switch to Night" : "Switch to Day"}
      </button>
    </div>
  );
};

export default DayNight;
