import { Outlet, Link } from "react-router-dom";
import './app.css';

function App() {
  return (
    <>
      <nav className="navbar">
        <h1 className="logo">Image Gallery</h1>
        <div className="nav-links">
          <Link to={"/form"} className="nav-link">Upload</Link>
          <Link to={"/images"} className="nav-link">Gallery</Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
