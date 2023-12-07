import './MainNav.css';

const Welcome = ({ fadeOut }) => {
  const message = 'WELCOME TO ZUSTY';
  return (
    <div className={`welcome-screen ${fadeOut ? 'fade-out' : ''}`}>
      <h1 className="fade-to-orange">
        {message.split('').map((char, index) => (
          <span
            key={index}
            style={{ animationDelay: `${index * 0.1}s` }}
            className="fade-in"
          >
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default Welcome;
