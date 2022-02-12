import { useParams } from "react-router-dom";
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
            <h1 className="container-top_title">{database.title}</h1>
            <p className="container-top_author">Created by: {database.tutor}</p>
          </div>

          <div className="learn">
            <ul className="learn-list list-1">
              {database.learnPartOne.map((learn) => {
                return (
                  <li className="learn-item" key={uuidv4()}>
                    {learn}
                  </li>
                );
              })}
            </ul>
            <ul className="learn-list list-2">
              {database.learnPartTwo.map((learn) => {
                return (
                  <li className="learn-item" key={uuidv4()}>
                    {learn}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="includes">
            <p className="includes-title">Incudes</p>
            <ul className="includes-list" key={database.id}>
              {database.includes.map((includes) => {
                return (
                  <li className="includes-item" key={uuidv4()}>
                    {includes}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      );
    }
    return false;
  });

  return markup;
}
