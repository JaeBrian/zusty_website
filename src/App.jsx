import Main from './components/Main';
import Demo from './components/Demo';
import Team from './components/Team';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import { useState, useEffect } from 'react';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeOutDuration = 300;

    const timer = setTimeout(() => {
      setFadeOut(true);

      setTimeout(() => {
        setShowWelcome(false);
      }, fadeOutDuration);
    }, 3800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showWelcome && <Welcome fadeOut={fadeOut} />}
      {!showWelcome && (
        <div className="mainContainer">
          <NavBar />
          <div id="main" className="bg-black">
            <Main />
          </div>
          <div id="demo" className="bg-black">
            <Demo />
          </div>
          <div id="team" className="bg-black">
            <Team />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
