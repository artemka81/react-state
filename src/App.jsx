import React, { Component } from 'react';
import shortId from 'shortid';
import ToDoList from './components/ToDoList';
import todosJson from './todos.json';
import TodoEditor from 'components/ToDoList/TodoEditor';
import TodoFilter from 'components/ToDoList/TodoFilter';

class App extends Component {
  state = {
    todos: [],
    filter: '',
  };

  // Создание Todo
  addTodo = text => {
    // 1. Получаем текст для Todo
    // console.log(text);
    // 2. Делаем Todo
    const todo = {
      id: shortId.generate(),
      text,
      completed: false,
    };
    // 3. Добавляем в state
    // this.setState(preState => ({
    //   todos: [todo, ...preState.todos],
    // }))
    // Этот же метод через деструктуризацию
    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };

  // Удаляем таску
  deleteTodo = todoId => {
    this.setState(preTodoState => ({
      todos: preTodoState.todos.filter(todoItem => todoItem.id !== todoId),
    }));
  };

  // Задача выполнена, если чекбокс === true
  toggleCompleted = todoId => {
    // console.log(todoId);
    // this.setState(preState => ({
    //   todos: preState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       console.log('Нашли todo ID по котором кликнули');
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       }
    //     }
    //     return todo;
    //   })
    // }));

    /* Короткая запись через тернарное выражение*/
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  // Фильтрация тасков по тексту
  changeFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };
  // Отображение найденых Todos
  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const noralizeFilter = filter.toLowerCase();
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(noralizeFilter)
    );
  };

  calcCompletedTodos = () => {
    const { todos } = this.state;
    return todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
  };

  // componentDidUpdate
  componentDidUpdate(prevProps, prevState) {
    console.log('App componentDidUpdate');
    if (this.state.todos !== prevState.todos) {
      console.log('Обновился массив todos');
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }
  // componentDidMount
  componentDidMount() {
    console.log('App componentDidMount');
    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);
    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
    console.log(todos);
    console.log(parsedTodos);
  }

  render() {
    const { todos, filter } = this.state;
    const completedTodos = this.calcCompletedTodos();
    const visibleTodos = this.getVisibleTodos();

    return (
      <>
        <h1>Состояние компонента </h1>
        <div>
          <h2>Кол-во задач: {todos.length} </h2>
          <p>Кол-во выполненных задач: {completedTodos}</p>
        </div>
        <TodoEditor onSubmit={this.addTodo} />
        <TodoFilter value={filter} onChangeFilter={this.changeFilter} />

        <ToDoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </>
    );
  }
}

export default App;
