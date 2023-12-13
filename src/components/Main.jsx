import './MainNav.scss';
import InstallButton from './InstallButton.jsx';
import Glow from './Glow.jsx';

const Main = () => {
  return (
    <div className="page-x">
      <div className="logo-container">
        <div className="logo"></div>
        <div className="intro">
          <Glow />
          <container className="hero-text">
            <h1 className="hero-h1">A ZUSTAND DEV TOOL</h1>
            <p className="hero-paragraph-1">
              Designed for easy debugging of Zustand applications
            </p>
            <p className="hero-paragraph-2">
              Featuring state-snaptshots, actionlog, metrics, time-traveling
              capabilities, and a component tree
            </p>
            <InstallButton />
            <Glow />
          </container>
        </div>
      </div>
    </div>
  );
};

export default Main;
