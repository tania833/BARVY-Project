import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ScrollToTop from './components/ScrollToTop';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ScrollToTop />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
