import React from 'react';
import ColorPicker from './ColorPicker';
import Counter from './Counter';
import Dropdown from './Dropdown';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

export const App = () => (
  <>
    <h1>Состояние компонента </h1>
    <Counter initialValue={10} />
    <Dropdown />
    <ColorPicker options={colorPickerOptions} />
  </>
);
