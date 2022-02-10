import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router ,Route, Routes } from 'react-router-dom';
const Sample = () => {
  return "HELLO"
}
ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route path="frontend" element={<Sample/>}/>
        <Route path="backend" element={<Sample/>}/>
        <Route path="fullstack" element={<Sample/>}/>
      </Route>
    </Routes>
  </Router>,
  document.getElementById('root')
);

