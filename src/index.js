// React
import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import './styles/font.css';
import './styles/default.css';
import './styles/global.css';

// Components
import { App } from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
