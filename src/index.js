import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let app = (
    <div id="main">
        <App name="Matt" age ="25" day="13"/>
        <App name="Mdb" age ="15" day="14"/>
        <App name="matt" age ="35" day="18"/>
    </div>
);



ReactDOM.render(
  <React.StrictMode>
        {app}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
