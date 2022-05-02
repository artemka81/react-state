import { Component } from 'react';
import './ColorPicker.css';

class ColorPicker extends Component {
  state = {
    activeColorInd: 2,
  };

  setActiveIdx = index => {
    this.setState({ activeColorInd: index });
  };

  makeOptionClassName = index => {
    const optionClasses = ['ColorPicker__option'];
    if (index === this.state.activeColorInd) {
      optionClasses.push('ColorPicker__option--active');
    }
    return optionClasses.join(' ');
  };

  render() {
    const { activeColorInd } = this.state;
    const { options } = this.props;
    const { label, color } = options[activeColorInd];

    return (
      <div className="ColorPicker" style={{ backgroundColor: color }}>
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Выбран цвет: {label} </p>
        <div>
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeOptionClassName(index)}
              style={{ backgroundColor: color }}
              onClick={() => this.setActiveIdx(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
