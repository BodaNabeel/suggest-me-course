import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import FrontEndCourse from "../FrontEndCourse";

export default function FrontEnd() {
  const frontendDetail = [
    {
      cardSrc: "https://img-c.udemycdn.com/course/240x135/2153774_bef0_4.jpg",
      cardTitle: "Modern HTML & CSS From The Beginning (Including Sass)"
    },
    {
      cardSrc: "https://img-c.udemycdn.com/course/240x135/1463348_52a4_2.jpg",
      cardTitle: "Modern JavaScript From The Beginning"
    },
    {
      cardSrc: "https://img-c.udemycdn.com/course/240x135/1362070_b9a1_2.jpg",
      cardTitle: "React - The Complete Guide (incl Hooks, React Router, Redux)"
    },
    {
      cardSrc:
        "https://res.cloudinary.com/wesbos/image/fetch/w_700,q_auto,f_auto/https://courses.wesbos.com/images/JS3-social-share.png",
      cardTitle: "JavaScript30"
    },
    {
      cardSrc: "https://img-c.udemycdn.com/course/240x135/4427730_5388.jpg",
      cardTitle: "React Front To Back 2022"
    },
    {
      cardSrc: "https://img-c.udemycdn.com/course/240x135/995016_ebf4_3.jpg",
      cardTitle: "Vue - The Complete Guide (incl. Router & Composition API)"
    },
  ];
  return (
    <>
      {frontendDetail.map((detail) => {
        
        return (
          <div key={uuidv4()} className="card">
            <img src={detail.cardSrc} alt="" className="card-img" />
            <p className="card-title">{detail.cardTitle}</p>
            {/* <button className="card-btn btn-primary">check out</button> */}
            <Link to={detail.cardTitle.replaceAll(" ", '-')} className="card-btn">checkout</Link>
          </div>
        );
      })}
      <Outlet/>
    </>
  );
}
