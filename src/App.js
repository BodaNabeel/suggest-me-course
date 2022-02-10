import { NavLink } from "react-router-dom";

function App() {
  return(
    <>
    
    <header className="header">suggest me course</header>
    <h1 className="heading">select your interest:</h1>
    <NavLink to="/">FrontEnd</NavLink>
    <NavLink to="/">BackEnd</NavLink>
    <NavLink to="/">Full Stack</NavLink>
    </>
  );
}

export default App;
