import React from 'react';
import { ToDoListItem } from './ToDoListItem';

interface ToDoListProps {
  todos: Array<Todo>;
}

export const ToDoList: React.FC<ToDoListProps> = ({ todos }) => {
  return (
    <div>
      <ul>
        {todos.map((todo, idx) => {
          return <ToDoListItem key={idx} todo={todo} />;
        })}
      </ul>
    </div>
  );
};
