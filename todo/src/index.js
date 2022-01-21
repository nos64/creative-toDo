import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { BrowserRouter } from "react-router-dom";
import App from './App';
import Preview from '../src/components/Preview/Preview';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

ReactDOM.render(
    // <React.StrictMode>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Preview/>} />
        <Route path="myTodo" element={<App />} />
        </Routes>
      </BrowserRouter>,
    // </React.StrictMode>,
  document.getElementById('root')
);

