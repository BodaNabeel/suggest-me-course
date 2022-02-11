import React from "react";
import { Link } from "react-router-dom";

export default function BackEnd() {
  const backendDetail = [
    {
      cardSrc: "https://img-c.udemycdn.com/course/240x135/1672410_9ff1_5.jpg",
      cardTitle: "Node.js, Express, MongoDB & More: The Complete Bootcamp 2022",
    },
    {
      cardSrc: "https://img-c.udemycdn.com/course/240x135/1879018_95b6_3.jpg",
      cardTitle: "NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)",
    },
    {
      cardSrc: "https://img-c.udemycdn.com/course/240x135/684824_3626_3.jpg",
      cardTitle: "Spring Framework Master Class - Java Spring the Modern Way",
    },
    {
      cardSrc: "https://img-c.udemycdn.com/course/240x135/1699208_604f_3.jpg",
      cardTitle: "The Flask Mega-Tutorial (Python Web Development)",
    },
  ];
  return (
    <>
      {backendDetail.map((detail) => {
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
