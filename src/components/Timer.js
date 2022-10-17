import React, { useState, useEffect } from "react";

// Styles
import "./Timer.css";

export default function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 1);
    } else if (!isRunning) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => {
    if (isRunning) {
      return;
    }

    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setTime(0);
  };

  const addZero = (n) => {
    return n < 10 ? "0" + n : n;
  };

  const minutes = Math.floor((time / 60000) % 60);
  const seconds = Math.floor((time / 1000) % 60);
  const hundredths = (time / 10) % 100;

  return (
    <section className="Chrono">
      <h1>
        {addZero(minutes)}:{addZero(seconds)}:{addZero(hundredths)}
      </h1>
      <div className="buttons">
        <button onClick={handleStart}>START</button>
        <button onClick={handleStop}>STOP</button>
        <button onClick={handleReset}>RESET</button>
      </div>
    </section>
  );
}
