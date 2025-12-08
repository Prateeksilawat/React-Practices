import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [todoList, setTodoList] = useState([]);

  const InputHandler = (e) => {
    setInput(e.target.value);
  };

  const addTodoHandler = () => {
    setTodoList([...todoList, input]);
    setInput('');
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-extrabold text-7xl  text-red-500">Todo App</h1>

      <div className="mt-8 outline-none flex flex-col">
        <input
          value={input}
          onChange={InputHandler}
          name="input"
          placeholder="Enter today task"
          className="border"
        />
        <button
          className="bg-blue-400 text-white rounded-xl mt-2"
          onClick={addTodoHandler}
        >
          Add
        </button>
      </div>
      <div>
        <ul className="mt-4">
          {todoList.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
