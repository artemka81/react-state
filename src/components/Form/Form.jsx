import { Component } from 'react';
import s from './Form.module.css';

class Form extends Component {
  state = {
    name: '',
    nickName: '',
    experience: 'junior',
    subscription: false,
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

  handleSubscriptionChange = e => {
    console.log(e.currentTarget.checked);
    this.setState({ subscription: e.currentTarget.checked });
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
        <p>Your level:</p>
        <label>
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.handleChange}
            checked={this.state.experience === 'junior'}
          />
          Junior
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={this.handleChange}
            checked={this.state.experience === 'middle'}
          />
          Middle
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={this.handleChange}
            checked={this.state.experience === 'senior'}
          />
          Senior
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="subscription"
            checked={this.state.subscription}
            onChange={this.handleSubscriptionChange}
          />
          Да, я хочу подписаться на рассылку
        </label>
        <br />
        <br />
        <button type="submit" disabled={!this.state.subscription}>
          Submit
        </button>
        <br />
        <br />
      </form>
    );
  }
}

export default Form;
