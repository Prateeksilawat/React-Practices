import React, { useState } from 'react';

const EmiCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [emi, setEmi] = useState(null);

  const handlerChange = (e) => {
    const { name, value } = e.target;
    if (name === 'principal') setPrincipal(value);
    else if (name === 'rate') setRate(value);
    else if (name === 'time') setTime(value);
  };

  const submitHandle = () => {
    const P = parseFloat(principal);
    const annualRate = parseFloat(rate);
    const year = parseFloat(time);

    if (!P || !annualRate || !year) {
      alert('Please enter valid values for all fields!');
      return;
    }

    const r = annualRate / 12 / 100;
    const n = year * 12;
    const emiValue = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmi(emiValue.toFixed(2));
  };

  return (
    <div className="min-h-screen  flex justify-center items-center">
      <div className="bg-white rounded-3xl shadow-2xl p-10 w-[400px] flex flex-col items-center">
        <h1 className="text-3xl font-bold text-blue-700 mb-8 text-center">
          💰 React EMI Calculator
        </h1>

        {/* Inputs */}
        <div className="flex flex-col gap-4 w-full">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Principal Loan Amount
            </label>
            <input
              type="number"
              value={principal}
              name="principal"
              onChange={handlerChange}
              placeholder="Enter Principal Amount"
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Interest Rate (annual %)
            </label>
            <input
              type="number"
              value={rate}
              name="rate"
              onChange={handlerChange}
              placeholder="Enter Interest Rate"
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Loan Duration (years)
            </label>
            <input
              type="number"
              value={time}
              name="time"
              onChange={handlerChange}
              placeholder="Enter Years"
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>

        {/* Button */}
        <button
          onClick={submitHandle}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 mt-6 rounded-xl transition duration-300 w-full"
        >
          Calculate
        </button>

        {/* Result */}
        {emi && (
          <div className="mt-8 bg-blue-50 p-4 rounded-xl text-center w-full shadow-inner">
            <h2 className="text-xl font-semibold text-blue-700">
              Monthly EMI:
            </h2>
            <p className="text-3xl font-bold text-green-600 mt-1">₹{emi}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmiCalculator;
