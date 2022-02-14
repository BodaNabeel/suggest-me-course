import { NavLink, Outlet } from "react-router-dom";
function App() {
  const setClassNameBtn = (state) => {
    return state ? "btn btn-active" : "btn btn-inActive";
  };
  return (
    <>
      <div className="main">
        <header className="header">suggest me a course 👀</header>
        <h3 className="heading">select your interest:</h3>
        <div className="toggle-btn">
          <NavLink
            className={({ isActive }) => setClassNameBtn(isActive)}
            to="/frontend"
          >
            FrontEnd
          </NavLink>
          <NavLink
            className={({ isActive }) => setClassNameBtn(isActive)}
            to="/backend"
          >
            BackEnd
          </NavLink>
          <NavLink
            className={({ isActive }) => setClassNameBtn(isActive)}
            to="/fullstack"
          >
            Full Stack
          </NavLink>
        </div>
      </div>

      <div className="courses-container">
        <Outlet />
      </div>
    </>
  );
}

export default App;
