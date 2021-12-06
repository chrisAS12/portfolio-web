import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Welcome from '../welcome/Welcome';
import reportWebVitals from '../../reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Welcome />
  </React.StrictMode>,
  document.getElementById('root')
);

// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
