import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function CourseDetail({ database }) {
  const params = useParams();
  const paramsID = Number(params.id);

  const markup = database.map((database) => {
    if (database.id === paramsID) {
      return (
        <div key={database.id}>
          <h1>{database.title}</h1>
          <p>CourseType: {database.courseType}</p>
          <img src={database.src} alt="" />
          <ul key={database.id}>
            Includes
            {database.includes.map((includes) => {
              return <li key={uuidv4()}>{includes}</li>;
            })}
          </ul>

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
        </div>
      );
    }
    return false;
  });

  return markup;
}
