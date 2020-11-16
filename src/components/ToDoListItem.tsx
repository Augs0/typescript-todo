import React, { useState } from 'react';
import '../styles/todolist.css';

interface ToDoProps {
  todo: Todo;
}

export const ToDoListItem: React.FC<ToDoProps> = ({ todo }) => {
  const [checkedStatus, setCheckStatus] = useState(false);
  return (
    <li>
      <input
        type='checkbox'
        defaultChecked={checkedStatus}
        onChange={() => setCheckStatus(!checkedStatus)}
        name='todoCheckbox'
        id='todoCheckbox'
      />
      <label
        className={checkedStatus ? 'complete' : undefined}
        htmlFor='todoCheckbox'
      >
        {todo.text}
      </label>
    </li>
  );
};
