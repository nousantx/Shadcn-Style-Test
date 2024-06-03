import { useStyler } from "../styles/styler";
import { NavLink, Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  useStyler(location.pathname);
  // useStyler();
  return (
    <nav className="w-full fixed flex space t-0 backdrop-[blur(8px)] bg-#0a0a0a30 p-1rem px-2rem">
      <header>
        <Link to="/" className="text-base font-medium">
          <h1 className="text-base font-medium">SOcalledUI</h1>
        </Link>
      </header>
      <div className="flex center gap-1rem nav-links">
        <NavLink to="/" className="text-sm">
          Overview
        </NavLink>
        <NavLink to="/components" className="text-sm">
          Components
        </NavLink>
        <a href="https://github.com/tenoxui/css" className="text-sm flex center" aria-label="github icon">
          <i className="txi ti-github_square"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
