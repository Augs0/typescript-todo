import React from 'react';
import { ToDoList } from './components/ToDoList';
import { AddToDo } from './components/AddToDo';

function App() {
  const todos: Array<Todo> = [
    { text: 'Learn how to use TypeScript' },
    { text: 'Finish Node website' },
  ];

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>ToDo with TS</h1>
      </header>
      <main>
        <section>
          <AddToDo />
          <ToDoList todos={todos} />
        </section>
      </main>
    </div>
  );
}

export default App;
