import React from 'react';
import s from './ToDoList.module.css';

const ToDoList = ({ todos, onDeleteTodo }) => (
  <ul className={s.ToDoList}>
    {todos.map(({ id, text }) => (
      <li key={id} className={s.ToDoListItem}>
        <p>{text}</p>
        <button onClick={() => onDeleteTodo(id)}>Удалить</button>
      </li>
    ))}
  </ul>
);
export default ToDoList;
