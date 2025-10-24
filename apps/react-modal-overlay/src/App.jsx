import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';

function App() {
  const [changeBg, setChangeBg] = useState(false);

  const BackgroundChange = () => setChangeBg(true);
  const BgWhite = () => setChangeBg(false);

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen transition-colors duration-500 ${changeBg ? 'bg-blue-50' : 'bg-white'}`}
    >
      <h1 className="text-gray-800 font-bold text-3xl mb-8">Exclusive Offer</h1>
      <Modal BackgroundChange={BackgroundChange} BgWhite={BgWhite} />
    </div>
  );
}

export default App;
