import React from 'react';
import { render } from 'react-dom';
import './style.less';

const App = () => (
  <div>
    <p>Hello React!</p>
  </div>
);

render(<App />, document.getElementById('root'));
