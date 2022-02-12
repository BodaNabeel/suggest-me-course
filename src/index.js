import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import FrontEnd from "./components/stack/FrontEnd";
import BackEnd from "./components/stack/BackEnd";
import FullStack from "./components/stack/FullStack";
import CourseDetail from "./components/CourseDetail";

const database = [
  {
    src: "https://img-c.udemycdn.com/course/240x135/2153774_bef0_4.jpg",
    title: "Modern HTML & CSS From The Beginning (Including Sass)",
    id: 1,
    courseType: "FE",
  },
  {
    src: "https://img-c.udemycdn.com/course/240x135/1463348_52a4_2.jpg",
    title: "Modern JavaScript From The Beginning",
    id: 2,
    courseType: "FE",
  },
  {
    src: "https://img-c.udemycdn.com/course/240x135/1362070_b9a1_2.jpg",
    title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
    id: 3,
    courseType: "FE",
  },
  {
    src: "https://res.cloudinary.com/wesbos/image/fetch/w_700,q_auto,f_auto/https://courses.wesbos.com/images/JS3-social-share.png",
    title: "JavaScript30",
    id: 4,
    courseType: "FE",
  },
  {
    src: "https://img-c.udemycdn.com/course/240x135/4427730_5388.jpg",
    title: "React Front To Back 2022",
    id: 5,
    courseType: "FE",
  },
  {
    src: "https://img-c.udemycdn.com/course/240x135/995016_ebf4_3.jpg",
    title: "Vue - The Complete Guide (incl. Router & Composition API)",
    id: 6,
    courseType: "FE",
  },
  {
    src: "https://img-c.udemycdn.com/course/240x135/1672410_9ff1_5.jpg",
    title: "Node.js, Express, MongoDB & More: The Complete Bootcamp 2022",
    id: 7,
    courseType: "BE",
  },
  {
    src: "https://img-c.udemycdn.com/course/240x135/1879018_95b6_3.jpg",
    title: "NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)",
    id: 8,
    courseType: "BE",
  },
  {
    src: "https://img-c.udemycdn.com/course/240x135/684824_3626_3.jpg",
    title: "Spring Framework Master Class - Java Spring the Modern Way",
    id: 9,
    courseType: "BE",
  },
  {
    src: "https://img-c.udemycdn.com/course/240x135/1699208_604f_3.jpg",
    title: "The Flask Mega-Tutorial (Python Web Development)",
    id: 10,
    courseType: "BE",
  },
  {
    src: "https://img-b.udemycdn.com/course/240x135/2640372_5b44_5.jpg?secure=wDfQpdLWRAfsMOZCAav5Dw%3D%3D%2C1644566660",
    title: "React, NodeJS, Express & MongoDB - The MERN Fullstack Guide",
    id: 11,
    courseType: "FS",
  },
  {
    src: "https://img-c.udemycdn.com/course/240x135/3655840_1c3c.jpg",
    title: "The Ultimate 2022 Fullstack Web Development Bootcamp",
    id: 12,
    courseType: "FS",
  },
  {
    src: "https://img-c.udemycdn.com/course/240x135/1646980_23f7_2.jpg",
    title: "  MERN Stack Front To Back: Full Stack React, Redux & Node.js",
    id: 13,
    courseType: "FS",
  },
  {
    src: "https://img-c.udemycdn.com/course/240x135/822444_a6db.jpg",
    title: "Python and Django Full Stack Web Developer Bootcamp",
    id: 14,
    courseType: "FS",
  },
  {
    src: "https://img-b.udemycdn.com/course/240x135/1042110_ffc3_4.jpg?secure=EkF9z2_XaXJoeaQGLaokSg%3D%3D%2C1644564995",
    title: " Beginner Full Stack Web Development: HTML, CSS, React & Node",
    id: 15,
    courseType: "FS",
  },
];

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
      {/* <Route
        path="/frontend/Modern-HTML-&-CSS-From-The-Beginning-(Including-Sass)"
        element={<FrontEndCourse />}
      /> */}
    </Routes>
  </Router>,
  document.getElementById("root")
);
