import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router ,Route, Routes } from 'react-router-dom';
import FrontEnd from './components/stack/FrontEnd';
import BackEnd from './components/stack/BackEnd';
import FullStack from './components/stack/FullStack';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route path="frontend" element={<FrontEnd/>}/>
        <Route path="backend" element={<BackEnd/>}/>
        <Route path="fullstack" element={<FullStack/>}/>
      </Route>
    </Routes>
  </Router>,
  document.getElementById('root')
);

