import { useState } from 'react';
import './App.css';

function App() {
  const [isStart, setIsSet] = useState(false);
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSecond] = useState('');

  function handleShow() {
    setIsSet(true);
  }

  function handleReset() {
    setIsSet(false);
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

  console.warn(hours, minutes, seconds);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center border shadow-xl rounded-2xl w-[800px] h-[300px]">
        <h1 className="font-bold text-6xl text-amber-300 text-center">
          CountDown Timer
        </h1>
        {!isStart && (
          <div className="p-4 mt-2 flex flex-col items-center gap-5">
            <div className="flex items-center gap-3">
              <input
                placeholder="HH"
                text="number"
                value={hours}
                name="hours"
                onChange={handeInput}
                className="border outline-none w-[70px] h-7 text-center rounded-md"
              />
              <span>:</span>
              <input
                placeholder="MM"
                text="number"
                value={minutes}
                name="minutes"
                onChange={handeInput}
                className="border outline-none w-[70px] h-7 text-center  rounded-md"
              />
              <span>:</span>
              <input
                placeholder="SS"
                text="number"
                value={seconds}
                name="second"
                onChange={handeInput}
                className="border outline-none w-[70px] h-7 text-center  rounded-md"
              />
            </div>
            <div>
              <button
                onClick={handleShow}
                className="border w-[100px] h-10 text-center bg-blue-500 text-white rounded-xl cursor-pointer "
              >
                Start
              </button>
            </div>
          </div>
        )}

        {isStart && (
          <div className="p-4 mt-2 flex flex-col items-center gap-5">
            <div className="flex items-center gap-3">
              <div className="border outline-none w-[70px] h-7 text-center  rounded-md">
                {hours}
              </div>
              <span>:</span>
              <div className="border outline-none w-[70px] h-7 text-center  rounded-md">
                {minutes}
              </div>
              <span>:</span>
              <div className="border outline-none w-[70px] h-7 text-center  rounded-md">
                {seconds}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="border w-[100px] h-10 text-center bg-blue-500 text-white rounded-xl cursor-pointer ">
                Pause
              </button>
              <button
                onClick={handleReset}
                className="border w-[100px] h-10 text-center bg-blue-500 text-white rounded-xl cursor-pointer "
              >
                Reset
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
