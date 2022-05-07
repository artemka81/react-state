import { Component } from 'react';
import s from './Form.module.css';

class Form extends Component {
  state = {
    name: '',
    nickName: '',
  };

  // Обновление значений в input
  handleChange = event => {
    // console.log(event.currentTarget);
    // console.log(event.currentTarget.value);
    // console.log(event.currentTarget.name);
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  // Сабмитим данные из формы
  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);

    // Пробрасываем данные в пропс saveDate для всплытия в App
    this.props.saveDate(this.state);
    // Вызываем метод очищения формы
    this.reset();
  };
  // Очищаем форму после сабмита
  reset = () => {
    this.setState({
      name: '',
      nickName: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name{' '}
          <input
            type="text"
            name="name"
            className={s.inputStyle}
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          NickName{' '}
          <input
            type="text"
            name="nickName"
            className={s.inputStyle}
            value={this.state.nickName}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
