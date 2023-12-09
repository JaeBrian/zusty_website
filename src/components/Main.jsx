import './MainNav.css';
import InstallButton from './InstallButton.jsx';

const Main = () => {
  return (
    <div className='page-x'>
      <div className='logo-container'>
        <div className='logo'></div>
        <div className='intro'>
          <container className='hero-text'>
            <h1 className='hero-h1'>A ZUSTAND DEV TOOL</h1>
            <p className='hero-paragraph-1'>Designed for Zustand web apps</p>
            <p className='hero-paragraph-2'>Featuring time-traveling capabilities & action snapshots</p>
            <InstallButton />
          </container>
        </div>
      </div>
    </div>
  );
}

export default Main;