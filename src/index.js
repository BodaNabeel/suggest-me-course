import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FrontEnd from "./components/stack/FrontEnd";
import BackEnd from "./components/stack/BackEnd";
import FullStack from "./components/stack/FullStack";
import FrontEndCourse from "./components/FrontEndCourse";

const database = [
  {
    cardSrc: "https://img-c.udemycdn.com/course/240x135/2153774_bef0_4.jpg",
    cardTitle: "Modern HTML & CSS From The Beginning (Including Sass)",
    id: 1,
    courseType: "FE",
  },
  {
    cardSrc: "https://img-c.udemycdn.com/course/240x135/1463348_52a4_2.jpg",
    cardTitle: "Modern JavaScript From The Beginning",
    id: 2,
    courseType: "FE",
  },
  {
    cardSrc: "https://img-c.udemycdn.com/course/240x135/1362070_b9a1_2.jpg",
    cardTitle: "React - The Complete Guide (incl Hooks, React Router, Redux)",
    id: 3,
    courseType: "FE",
  },
  {
    cardSrc:
      "https://res.cloudinary.com/wesbos/image/fetch/w_700,q_auto,f_auto/https://courses.wesbos.com/images/JS3-social-share.png",
    cardTitle: "JavaScript30",
    id: 4,
    courseType: "FE",
  },
  {
    cardSrc: "https://img-c.udemycdn.com/course/240x135/4427730_5388.jpg",
    cardTitle: "React Front To Back 2022",
    id: 5,
    courseType: "FE",
  },
  {
    cardSrc: "https://img-c.udemycdn.com/course/240x135/995016_ebf4_3.jpg",
    cardTitle: "Vue - The Complete Guide (incl. Router & Composition API)",
    id: 6,
    courseType: "FE",
  },
  {
    cardSrc: "https://img-c.udemycdn.com/course/240x135/1672410_9ff1_5.jpg",
    cardTitle: "Node.js, Express, MongoDB & More: The Complete Bootcamp 2022",
    id: 7,
    courseType: "BE",
  },
  {
    cardSrc: "https://img-c.udemycdn.com/course/240x135/1879018_95b6_3.jpg",
    cardTitle: "NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)",
    id: 8,
    courseType: "BE",
  },
  {
    cardSrc: "https://img-c.udemycdn.com/course/240x135/684824_3626_3.jpg",
    cardTitle: "Spring Framework Master Class - Java Spring the Modern Way",
    id: 9,
    courseType: "BE",
  },
  {
    cardSrc: "https://img-c.udemycdn.com/course/240x135/1699208_604f_3.jpg",
    cardTitle: "The Flask Mega-Tutorial (Python Web Development)",
    id: 10,
    courseType: "BE",
  },
  {
    cardSrc:
      "https://img-b.udemycdn.com/course/240x135/2640372_5b44_5.jpg?secure=wDfQpdLWRAfsMOZCAav5Dw%3D%3D%2C1644566660",
    cardTitle: "React, NodeJS, Express & MongoDB - The MERN Fullstack Guide",
    id: 11,
    courseType: "FS",
  },
  {
    cardSrc: "https://img-c.udemycdn.com/course/240x135/3655840_1c3c.jpg",
    cardTitle: "The Ultimate 2022 Fullstack Web Development Bootcamp",
    id: 12,
    courseType: "FS",
  },
  {
    cardSrc: "https://img-c.udemycdn.com/course/240x135/1646980_23f7_2.jpg",
    cardTitle: "  MERN Stack Front To Back: Full Stack React, Redux & Node.js",
    id: 13,
    courseType: "FS",
  },
  {
    cardSrc: "https://img-c.udemycdn.com/course/240x135/822444_a6db.jpg",
    cardTitle: "Python and Django Full Stack Web Developer Bootcamp",
    id: 14,
    courseType: "FS",
  },
  {
    cardSrc:
      "https://img-b.udemycdn.com/course/240x135/1042110_ffc3_4.jpg?secure=EkF9z2_XaXJoeaQGLaokSg%3D%3D%2C1644564995",
    cardTitle: " Beginner Full Stack Web Development: HTML, CSS, React & Node",
    id: 15,
    courseType: "FS",
  },
];

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="frontend" element={<FrontEnd database={database} />} />
        <Route path="backend" element={<BackEnd database={database}/>} />
        <Route path="fullstack" element={<FullStack database={database}/>} />
      </Route>
      <Route path="/:type/:slug/:id/:type" element={<FrontEndCourse />} />
      {/* <Route
        path="/frontend/Modern-HTML-&-CSS-From-The-Beginning-(Including-Sass)"
        element={<FrontEndCourse />}
      /> */}
    </Routes>
  </Router>,
  document.getElementById("root")
);
