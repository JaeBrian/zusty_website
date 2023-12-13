import './MainNav.css';
import { Link } from 'react-scroll';

const NavBar = () => {
  return (
    <div className="button-container">
      <div className="nav-logo"></div>
      <Link
        to="main"
        smooth={true}
        duration={500}
        className="button"
        spy={true}
        exact="true"
        offset={-100}
      >
        ABOUT
      </Link>
      <Link
        to="demo"
        smooth={true}
        duration={500}
        className="button"
        spy={true}
        exact="true"
        offset={-100}
      >
        DEMO
      </Link>
      <Link
        to="team"
        smooth={true}
        duration={500}
        className="button"
        spy={true}
        exact="true"
        offset={400}
      >
        TEAM
      </Link>
      <div className="gg-link"></div>
      <a
        className="buttons"
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
        target="_blank"
        rel="noopener noreferrer"
      >
        CHROME STORE
      </a>
      <a
        className="buttons"
        href="https://www.npmjs.com/package/zustymiddleware"
        target="_blank"
        rel="noopener noreferrer"
      >
        NPM
      </a>
      <a
        className="buttons"
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
        target="_blank"
        rel="noopener noreferrer"
      >
        MEDIUM
      </a>
      <a
        className="buttons"
        href="https://github.com/oslabs-beta/Zusty"
        target="_blank"
        rel="noopener noreferrer"
      >
        GITHUB
      </a>
    </div>
  );
};

export default NavBar;
