import { useEffect, useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm ">
      <div className="container-fluid">

        {/* Brand */}
        <a className="navbar-brand fw-bold" href="#">
          Chrispin
        </a>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible content */}
        <div className="collapse navbar-collapse" id="navbarText">

       
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {["about", "projects", "contact"].map((section) => (
              <li className="nav-item cursor-pointer" key={section}>
                <Link
                  className="nav-link cursor-pointer"
                  to={section}
                  smooth={true}
                  duration={500}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
          </ul>

          
          <span className="navbar-text d-flex align-items-center gap-2">
            <button
              className="btn btn-outline-dark px-3 py-1 cursor-pointer"
              onClick={() => setDark(!dark)}
            >
              {dark ? "Light" : "Dark"}
            </button>
          </span>


        </div>
      </div>
    </nav>
  );
}
