import { useParams } from "react-router-dom";

export default function CourseDetail({ database }) {
  const params = useParams();
  const paramsID = Number(params.id);

  const markup = database.map((database) => {
    if (database.id === paramsID) {
      return (
        <div>
          <h1>{database.title}</h1>
          <p>CourseType: {database.courseType}</p>
          <img src={database.src} alt="" />
        </div>
      );
    }
    return false;
  });

  return markup;
}
