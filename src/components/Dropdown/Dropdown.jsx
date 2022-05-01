import React, { Component } from 'react';
import './Dropdown.css';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(preState => ({
      visible: !preState.visible,
    }));
  };

  render() {
    return (
      <div className="Dropdown">
        <button type="button" className="Dropown__toggle" onClick={this.toggle}>
          {this.state.visible ? 'Скрыть' : 'Показать'}
        </button>

        {this.state.visible && (
          <div className="Dropdown__menu">Выпадающее меню</div>
        )}
      </div>
    );
  }
}

export default Dropdown;
