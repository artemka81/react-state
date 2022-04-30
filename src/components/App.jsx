import React from 'react';
import Counter from './Counter/Counter';

export const App = () => (
  <>
    <h1>Состояние компонента </h1>
    <Counter initialValue={10} />
  </>
);
