import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function FullStack(database) {
  const navigate = useNavigate()
  const markupSkeleton = database.database.map((detail) => {
    if (detail.courseType === "FS") {
      return (
        <div key={uuidv4()} className="card">
          <img src={detail.cardSrc} alt="" className="card-img" />
          <p className="card-title">{detail.cardTitle}</p>
          <button
            onClick={() =>
              navigate(
                `${detail.cardTitle.replaceAll(" ", "-")}/${detail.id}/${
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
