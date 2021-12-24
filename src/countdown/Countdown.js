import React, { useEffect, useState } from "react";

export default function Countdown({isFinished, setIsFinished}) {
  const [timer, setTimer] = useState(Math.floor((Math.random() * 1) * 60000));
  const [minutes, setMinutes] = useState(Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60)));
  const [seconds, setSeconds] = useState(Math.floor((timer % (1000 * 60)) / 1000));

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setTimer((prev) => prev - 1000);
      setMinutes(Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((timer % (1000 * 60)) / 1000));
    } ,1000);

    if(timer < 0){
      clearInterval(intervalRef);
      setIsFinished(true)
    }

    return () => clearInterval(intervalRef);
  }, [timer, setIsFinished]);

  return (
    <div className="countdown">
      <div className="numero">{minutes < 10 ? `0${minutes}`: minutes}:{seconds < 10 ? `0${seconds}` : seconds}</div>
    </div>
  );
}