import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          Chrispin
        </a>

        <ul className="navbar-nav ms-auto gap-3">
          {["about", "projects", "contact"].map((section) => (
            <li className="nav-item" key={section}>
              <Link
                className="nav-link"
                to={section}
                smooth={true}
                duration={500}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
