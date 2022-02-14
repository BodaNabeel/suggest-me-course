import { useParams } from "react-router-dom";
import { FaCheck, FaDotCircle } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

export default function CourseDetail({ database }) {
  const params = useParams();
  const paramsID = Number(params.id);

  const markup = database.map((database) => {
    if (database.id === paramsID) {
      return (
        <div className="detail-container" key={database.id}>
          <div className="container-top">
            <img
              src={database.src}
              alt="thumbnail-of-course"
              className="container-top_img"
            />
            <div className="container-top_detail">
              <h1 className="container-top_title">{database.title}</h1>
              {/* TODO: make tutor name dynamic */}
              <p className="container-top_author">
                Created by: {database.tutor}
              </p>
            </div>
          </div>

          <div className="content">
            <div className="learn">
              <div key={uuidv4()} className="learn-list list-1">
                {database.learnPartOne.map((learn) => {
                  return (
                    <div className="learn-item" key={uuidv4()}>
                      <span className="learn-icon">{<FaCheck />}</span>
                      {learn}
                    </div>
                  );
                })}
              </div>
              <div key={uuidv4()} className="learn-list list-2">
                {database.learnPartTwo.map((learn) => {
                  return (
                    <div className="learn-item" key={uuidv4()}>
                      <span className="learn-icon">{<FaCheck />}</span>
                      {learn}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="includes">
              <h3 className="includes-title">This course includes</h3>
              {database.includes.map((includes) => {
                return (
                  <div className="includes-item" key={uuidv4()}>
                    <span className="includes-icon">
                      <FaDotCircle />
                    </span>
                    {includes}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    }
    return false;
  });

  return markup;
}
