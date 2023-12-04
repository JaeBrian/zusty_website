import Main from './components/Main';
import Demo from './components/Demo';
import Team from './components/Team';
import './App.css';

function App() {
  return (
    <>
      <div className="bg-black">
        <Main />
      </div>
      <div className="bg-black">
        <Demo />
      </div>
      <div className="bg-black">
        <Team />
      </div>
    </>
  );
}

export default App;
