import { NavLink, Outlet } from "react-router-dom";

function App() {
  const setClassName = (state) => {
    return state ? "btn btn-secondary me-3" : "btn btn-primary me-3";
  };
  return (
    <>
      <header className="header">suggest me course</header>
      <h1 className="heading">select your interest:</h1>
      <NavLink
        className={({ isActive }) => setClassName(isActive)}
        to="/frontend"
      >
        FrontEnd
      </NavLink>
      <NavLink className={({ isActive }) => setClassName(isActive)} to="/backend">
        BackEnd
      </NavLink>
      <NavLink className={({ isActive }) => setClassName(isActive)} to="/fullstack">
        Full Stack
      </NavLink>

      <Outlet />
    </>
  );
}

export default App;
