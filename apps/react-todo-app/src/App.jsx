import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [todoList, setTodoList] = useState(()=>{
    return JSON.parse(localStorage.getItem("todo")) || []
  });

  useEffect(()=>{
  localStorage.setItem("todo", JSON.stringify(todoList));
  },[todoList])


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
      <div className='mt-4 border flex flex-col items-center justify-center w-3xs rounded-3xl'>
       <h2>Task for today</h2>
       <hr className="w-full border-t border-gray-300" />
        <ol>
          {todoList.map((todo, index,) => (
           <div className='flex gap-1'>
            {index+1} <li key={index}>{todo}</li>
           </div>
          ))}
       </ol>
      </div>
    </div>
  );
}

export default App;
