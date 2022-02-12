import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import FrontEnd from "./components/stack/FrontEnd";
import BackEnd from "./components/stack/BackEnd";
import FullStack from "./components/stack/FullStack";
import CourseDetail from "./components/CourseDetail";
import database from "./components/data/database";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="frontend" element={<FrontEnd database={database} />} />
        <Route path="backend" element={<BackEnd database={database} />} />
        <Route path="fullstack" element={<FullStack database={database} />} />
      </Route>
      <Route
        path="/:type/:slug/:id/:type"
        element={<CourseDetail database={database} />}
      />
    </Routes>
  </Router>,
  document.getElementById("root")
);
