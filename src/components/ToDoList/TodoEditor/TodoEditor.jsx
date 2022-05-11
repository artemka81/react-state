import React, { Component } from 'react';
import s from './TodoEditor.module.css';
class TodoEditor extends Component {
  state = {
    message: '',
  };
  // Добавить новую таску
  handleChange = e => {
    this.setState({ message: e.currentTarget.value });
  };
  // Передаем текст такси из формы в App как props
  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.onSubmit(this.state.message);
    // Очищаем форму
    this.setState({ message: '' });
  };

  render() {
    return (
      <form className={s.TodoEditor} onSubmit={this.handleSubmit}>
        <textarea
          value={this.state.message}
          onChange={this.handleChange}
          className={s.TodoEditor__textarea}
        ></textarea>
        <button type="submit" className={s.TodoEditor__button}>
          Add Task
        </button>
      </form>
    );
  }
}

export default TodoEditor;
