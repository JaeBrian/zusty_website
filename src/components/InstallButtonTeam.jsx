const InstallButtonTeam = () => {
  const handleClick = (e) => {
    e.preventDefault();
    window.open('https://chromewebstore.google.com/search/zusty', '_blank', 'noreferrer');
  };
  return (
    <div className="hero-btn">
      <button
        id="teaminstall"
        className="install-btn"
        type="button"
        onClick={handleClick}
      >
        Install Extension
      </button>
    </div>
  );
};

export default InstallButtonTeam;
