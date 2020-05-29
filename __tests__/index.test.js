import React from 'react';
import ReactDOM from 'react-dom';
import { Content } from '../src/components/Content';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Content />, div);
});
