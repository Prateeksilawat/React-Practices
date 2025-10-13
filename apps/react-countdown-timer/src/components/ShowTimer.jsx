
const ShowTimer = ({hours,minutes,seconds,isPaused,handlePaused,handleResume,handleReset}) => {
  return (
   <div className="p-4 mt-2 flex flex-col items-center gap-5">
            <div className="flex items-center gap-3">
              <div className="border outline-none w-[70px] h-7 text-center  rounded-md">
                {hours < 10 ? `0${hours}` : hours}
              </div>
              <span>:</span>
              <div className="border outline-none w-[70px] h-7 text-center  rounded-md">
                {minutes < 10 ? `0${minutes}`: minutes}
              </div>
              <span>:</span>
              <div className="border outline-none w-[70px] h-7 text-center  rounded-md">
                {seconds < 10 ? `0${seconds}`:seconds}
              </div>
            </div>
            <div className="flex items-center gap-2">
              {
                !isPaused && (
                  <button
                   onClick={handlePaused}
                   className="border w-[100px] h-10 text-center bg-blue-500 text-white rounded-xl cursor-pointer ">
                Pause
              </button>)
              }
              {
                isPaused && (
                  <button 
                  onClick={handleResume}
                  className="border w-[100px] h-10 text-center bg-blue-500 text-white rounded-xl cursor-pointer ">
                  Resume
              </button>
                )
              }
              <button
                onClick={handleReset}
                className="border w-[100px] h-10 text-center bg-blue-500 text-white rounded-xl cursor-pointer "
              >
                Reset
              </button>
            </div>
          </div>
  )
}

export default ShowTimer