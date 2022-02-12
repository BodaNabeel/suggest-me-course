import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function BackEnd(database) {
  const navigate = useNavigate();
  const markupSkeleton = database.database.map((detail) => {
    if (detail.courseType === "BE") {
      return (
        <div key={uuidv4()} className="card">
          <img src={detail.src} alt="" className="card-img" />
          <p className="card-title">{detail.title}</p>
          <button
            onClick={() =>
              navigate(
                `${detail.title.replaceAll(" ", "-")}/${detail.id}/${
                  detail.courseType
                }`,
                { state: detail.id }
              )
            }
            className="card-btn"
          >
            checkout
          </button>
        </div>
      );
    }
    return false;
  });
  return <>{markupSkeleton}</>;
}
