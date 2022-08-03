import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('main'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
