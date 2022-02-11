import { NavLink, Outlet } from "react-router-dom";
function App() {
  const setClassNameBtn = (state) => {
  
    return state ? "btn btn-active" : "btn btn-inActive";
  };
  return (
    <>
      <header className="header">suggest me course</header>
      <h1 className="heading">select your interest:</h1>
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

      <div className="courses-container">
        <Outlet />
      </div>
    </>
  );
}

export default App;
