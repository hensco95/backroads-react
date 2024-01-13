import logo from "../images/logo.svg";

import { pageLinks, socialLinks } from "../data";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className="nav-links" id="nav-links">
          {pageLinks.map(({ href, id, text }) => {
            return (
              <li>
                <a href={href} className="nav-link" key={id}>
                  {" "}
                  {text}{" "}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map(({ id, href, className }) => {
            return (
              <li>
                <a
                  href={href}
                  target="_blank"
                  className="nav-icon"
                  key={id}
                  rel="noreferrer"
                >
                  <i className={className}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
