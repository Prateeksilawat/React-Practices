import { useEffect, useState } from 'react';
import './App.css';
import InputTimer from './components/InputTimer';
import ShowTimer from './components/ShowTimer';

function App() {
  const [isStart, setIsSet] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSecond] = useState(0);
  const [timerId, setTimerId] = useState(null);

  function handleShow() {
    if (hours < 0 || minutes < 0 || seconds <= 0) {
      alert('Invalid Input');
      return;
    } else {
      setIsSet(true);
    }
  }

  function handleReset() {
    setIsSet(false);
    resetTimer();
  }
  const resetTimer = () => {
    setHours(0);
    setMinutes(0);
    setSecond(0);
    clearInterval(timerId);
  };
  function handlePaused() {
    setIsPaused(true);
    clearInterval(timerId);
  }

  function handleResume() {
    setIsPaused(false);
    runTimer(hours, minutes, seconds);
  }

  const handeInput = (e) => {
    // console.warn(e.target.name, e.target.value);
    const { name, value } = e.target;
    const numValue = value === '' ? '' : parseInt(value, 10);
    if (name === 'hours') {
      setHours(numValue);
    } else if (name === 'minutes') {
      setMinutes(numValue);
    } else {
      setSecond(numValue);
    }
  };

  const runTimer = (hr, min, sec) => {
    if (sec > 0) {
      setSecond((s) => s - 1);
    } else if (sec === 0 && min > 0) {
      setMinutes((m) => m - 1);
      setSecond(59);
    } else {
      setHours((h) => h - 1);
      setMinutes(59);
      setSecond(59);
    }

    if (sec === 0 && min === 0 && hr === 0) {
      resetTimer();
      // alert("Times Up")
    }
  };

  useEffect(() => {
    let tid;
    if (isStart) {
      tid = setInterval(() => {
        runTimer(hours, minutes, seconds, tid);
      }, 1000);
      setTimerId(tid);
    }

    return () => {
      clearInterval(tid);
    };
  }, [isStart, hours, minutes, seconds]);
  // console.warn(hours, minutes, seconds);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className=" flex flex-col items-center justify-center border shadow-xl rounded-2xl w-[800px] h-[300px]">
        <h1 className="font-bold text-6xl text-amber-300 text-center">
          CountDown Timer
        </h1>
        {!isStart && (
          <InputTimer
            handleShow={handleShow}
            handeInput={handeInput}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
          />
        )}

        {isStart && (
          <ShowTimer
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            isPaused={isPaused}
            handlePaused={handlePaused}
            handleResume={handleResume}
            handleReset={handleReset}
          />
        )}
      </div>
    </div>
  );
}

export default App;
