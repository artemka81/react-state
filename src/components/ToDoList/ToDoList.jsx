import React from 'react';
import s from './ToDoList.module.css';

const ToDoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul className={s.ToDoList}>
    {todos.map(({ id, text, completed }) => (
      <li key={id} className={s.ToDoListItem}>
        <input
          type="checkbox"
          className={s.TodoList__checkbox}
          checked={completed}
          onChange={() => onToggleCompleted(id)}
        />
        <p>{text}</p>
        <button onClick={() => onDeleteTodo(id)}>Удалить</button>
      </li>
    ))}
  </ul>
);
export default ToDoList;
