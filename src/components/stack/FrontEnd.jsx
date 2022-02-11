import React from "react";

export default function FrontEnd() {
  const frontendDetail = [
    {
      cardSrc: "https://img-c.udemycdn.com/course/240x135/2153774_bef0_4.jpg",
      cardTitle: "Modern HTML & CSS From The Beginning (Including Sass)",
      cardPath: "",
    },
    {
      cardSrc: "https://img-c.udemycdn.com/course/240x135/1463348_52a4_2.jpg",
      cardTitle: "Modern JavaScript From The Beginning",
      cardPath: "",
    },
    {
      cardSrc: "https://img-c.udemycdn.com/course/240x135/1362070_b9a1_2.jpg",
      cardTitle: "React - The Complete Guide (incl Hooks, React Router, Redux)",
      cardPath: "",
    },
    {
      cardSrc:
        "https://res.cloudinary.com/wesbos/image/fetch/w_700,q_auto,f_auto/https://courses.wesbos.com/images/JS3-social-share.png",
      cardTitle: "JavaScript30",
      cardPath: "",
    },
    {
      cardSrc: "https://img-c.udemycdn.com/course/240x135/4427730_5388.jpg",
      cardTitle: "React Front To Back 2022",
      cardPath: "",
    },
    {
      cardSrc: "https://img-c.udemycdn.com/course/240x135/995016_ebf4_3.jpg",
      cardTitle: "Vue - The Complete Guide (incl. Router & Composition API)",
      cardPath: "",
    },
  ];
  return (
    <>
      {frontendDetail.map((detail) => {
        return (
          <div className="card">
            <img src={detail.cardSrc} alt="" className="card-img" />
            <p className="card-title">{detail.cardTitle}</p>
            <button className="card-btn btn-primary">check out</button>
          </div>
        );
      })}
    </>
  );
}
