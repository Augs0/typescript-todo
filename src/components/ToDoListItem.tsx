import React, { useState } from 'react';
import '../styles/todolist.css';
import { v4 as uuidv4 } from 'uuid';

interface ToDoProps {
  todo: Todo;
}
// dealing with repeated ids - https://hjnilsson.com/2015/09/24/doing-ids-in-react/

export const ToDoListItem: React.FC<ToDoProps> = ({ todo }) => {
  const [checkedStatus, setCheckStatus] = useState(false);
  const randomId = uuidv4();
  return (
    <li className='checkItem'>
      <input
        type='checkbox'
        defaultChecked={checkedStatus}
        onChange={() => setCheckStatus(!checkedStatus)}
        name='todoCheckbox'
        id={randomId}
      />
      <label
        className={checkedStatus ? 'complete' : undefined}
        htmlFor={randomId}
      >
        {todo.text}
      </label>
    </li>
  );
};
