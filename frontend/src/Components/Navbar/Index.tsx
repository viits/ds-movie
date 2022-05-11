import { ReactComponent as GitHubIcon } from "assets/Img/GitHub.svg";
import "./Styles.css";
const Navbar = () => {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DSMovie</h1>
          <a href="https://github.com/viits">
            <div className="dsmovie-contact-container">
              <GitHubIcon />
              <p className="dsmovie-contact-link">/DevSuperior</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
