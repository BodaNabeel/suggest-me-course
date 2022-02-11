import React from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function FrontEnd(database) {
  const navigate = useNavigate();
  const markupSkeleton = database.database.map((detail) => {
    if (detail.courseType === "FE") {
      return (
        <div key={uuidv4()} className="card">
          <img src={detail.cardSrc} alt="" className="card-img" />
          {/* <p className="card-title">{detail.cardTitle}</p>
          <Link
            to={`${detail.cardTitle.replaceAll(" ", "-")}/${detail.id}/${
              detail.courseType
            }`}
            className="card-btn"
          >
            checkout
          </Link> */}
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
