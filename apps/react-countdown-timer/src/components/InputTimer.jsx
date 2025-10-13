import React from 'react'

const InputTimer = ({hours,minutes,seconds,handeInput,handleShow}) => {
  return (
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
  )
}

export default InputTimer