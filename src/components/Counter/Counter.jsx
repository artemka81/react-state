import React from 'react';
import Controls from './Controls';
import CounterValue from './CounterValue';
import './Counter.css';

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 123,
  };
  static propsTypes = {};

  state = {
    value: this.props.initialValue,
  };
  handleIncrement = () => {
    this.setState(currentState => ({
      value: currentState.value + 1,
    }));
  };

  handleDecrement = () => {
    this.setState(currentState => ({
      value: currentState.value - 1,
    }));
  };

  render() {
    return (
      <div className="Counter">
        <CounterValue value={this.state.value} />
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
