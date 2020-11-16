import React, { ChangeEvent, useState } from 'react';

export const AddToDo: React.FC = () => {
  const [newTodo, setTodo] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };
  //

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
      <button type='submit'>Add todo</button>
    </form>
  );
};
