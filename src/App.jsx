import React, { Component } from 'react';
import ToDoList from './components/ToDoList';
import Form from './components/Form';
import todosJson from './todos.json';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

class App extends Component {
  state = {
    todos: todosJson,
  };
  // Удаляем таску
  deleteTodo = todoId => {
    this.setState(preTodoState => ({
      todos: preTodoState.todos.filter(todoItem => todoItem.id !== todoId),
    }));
  };
  // Сохраняем данные формы
  formSubmitHandler = date => {
    console.log(date);
  };

  render() {
    const { todos } = this.state;
    const completedTodos = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );

    return (
      <>
        <h1>Состояние компонента </h1>
        <div>
          <h2>Кол-во задач: {todos.length} </h2>
          <p>Кол-во выполненных задач: {completedTodos}</p>
        </div>
        <Form saveDate={this.formSubmitHandler} />

        <ToDoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}

export default App;
