import React, { useState } from 'react';
import './styles/app.css';
import { ToDoList } from './components/ToDoList';
import { AddToDo } from './components/AddToDo';

function App() {
  const initialTodos: Array<Todo> = [
    { text: 'Learn how to use TypeScript' },
    { text: 'Finish Node website' },
  ];
  const [todos, setTodos] = useState(initialTodos);

  const addTodo: AddTodo = (newTodo) => {
    newTodo.trim() !== '' && setTodos([...todos, { text: newTodo }]);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Todo list with Typescript</h1>
      </header>
      <main>
        <section>
          <AddToDo addTodo={addTodo} />
          <ToDoList todos={todos} />
        </section>
      </main>
    </div>
  );
}

export default App;
