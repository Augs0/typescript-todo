import React, { ChangeEvent, FormEvent, useState } from 'react';
interface AddToDoProps {
  addTodo: AddTodo;
}

export const AddToDo: React.FC<AddToDoProps> = ({ addTodo }) => {
  const [newTodo, setTodo] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setTodo('');
  };

  return (
    <form>
      <input
        type='text'
        value={newTodo}
        onChange={handleChange}
        name='newTodo'
        id='newTodo'
        aria-label='Enter a new to do to add the list'
      />
      <button onClick={handleSubmit} type='submit'>
        Add todo
      </button>
    </form>
  );
};
