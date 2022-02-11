import React from "react";
import { Link } from "react-router-dom";

export default function FullStack() {
  const fullstackDetail = [
    {
      cardSrc:
        "https://img-b.udemycdn.com/course/240x135/2640372_5b44_5.jpg?secure=wDfQpdLWRAfsMOZCAav5Dw%3D%3D%2C1644566660",
      cardTitle: "React, NodeJS, Express & MongoDB - The MERN Fullstack Guide",
    },
    {
      cardSrc: "https://img-c.udemycdn.com/course/240x135/3655840_1c3c.jpg",
      cardTitle: "The Ultimate 2022 Fullstack Web Development Bootcamp",
    },
    {
      cardSrc: "https://img-c.udemycdn.com/course/240x135/1646980_23f7_2.jpg",
      cardTitle:
        "  MERN Stack Front To Back: Full Stack React, Redux & Node.js",
    },
    {
      cardSrc: "https://img-c.udemycdn.com/course/240x135/822444_a6db.jpg",
      cardTitle: "Python and Django Full Stack Web Developer Bootcamp",
    },
    {
      cardSrc:
        "https://img-b.udemycdn.com/course/240x135/1042110_ffc3_4.jpg?secure=EkF9z2_XaXJoeaQGLaokSg%3D%3D%2C1644564995",
      cardTitle:
        " Beginner Full Stack Web Development: HTML, CSS, React & Node",
    },
  ];
  return (
    <>
      {fullstackDetail.map((detail) => {
        return (
          <div className="card">
            <img src={detail.cardSrc} alt="" className="card-img" />
            <p className="card-title">{detail.cardTitle}</p>
            {/* <button className="card-btn btn-primary">check out</button> */}
            <Link
              to={detail.cardTitle.replaceAll(" ", "-")}
              className="card-btn"
            >
              checkout
            </Link>
          </div>
        );
      })}
    </>
  );
}
