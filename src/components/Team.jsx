import InstallButtonTeam from './InstallButtonTeam';

let team = [
  {
    name: 'Adrian Insingo',
    github: 'https://github.com/adrianinsingo',
    linkedin: 'https://www.linkedin.com/in/adrian-insingo',
    imageUrl: '../team-pics/adrian.png',
  },
  {
    name: 'Brian Lee',
    github: 'https://github.com/JaeBrian',
    linkedin: 'http://www.linkedin.com/in/brian-jaekook-lee',
    imageUrl: '../team-pics/jaekook-lee.jpeg',
  },
  {
    name: 'Dana Kaplan',
    github: 'https://github.com/DanaKaplan944',
    linkedin: 'https://www.linkedin.com/in/danakaplan2/',
    imageUrl: '../team-pics/Dana4.png',
  },
  {
    name: 'Nancy Huang',
    github: 'https://github.com/itsnancyhuang',
    linkedin: 'https://www.linkedin.com/in/nancy-huang/',
    imageUrl: '../team-pics/nancy-huang.jpg',
  },
  {
    name: 'William Kil',
    github: 'https://github.com/shinykoin',
    linkedin: 'https://www.linkedin.com/in/william-kil-2a917110a/',
    imageUrl: '../team-pics/will.jpeg',
  },
];

export default function Team() {
  return (
    <>
      <div className="git-container">
        <a
          href="https://www.npmjs.com/package/zustymiddleware"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="npm" src="../team-pics/npm.png"></img>
        </a>
        <a
          href="https://chromewebstore.google.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="chrome" src="../team-pics/Chrome.png"></img>
        </a>

        <a href="https://medium.com/" target="_blank" rel="noopener noreferrer">
          <img className="medium" src="../team-pics/medium.png"></img>
        </a>
        <a
          href="https://github.com/oslabs-beta/Zusty"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="github" src="../team-pics/github.png"></img>
        </a>
      </div>
      <div className="install-container">
        <InstallButtonTeam className="install" />
      </div>

      <div className="meet">
        <div>MEET THE ZUSTY TEAM</div>
      </div>

      <div id="team" className="teamContainer">
        {team.map((team) => (
          <div className="person" key={team.name}>
            <img className="person-img" src={team.imageUrl} />
            <p className="person-name">{team.name}</p>
            <div className="links-section">
              <div
                className="link"
                onClick={() => {
                  window.open(team.github, '_blank', 'noreferrer');
                }}
              >
                <img
                  className="gitlink"
                  src="../team-pics/githubwhite1.png"
                ></img>
              </div>
              <div
                className="link"
                onClick={() => {
                  window.open(team.linkedin, '_blank', 'noreferrer');
                }}
              >
                <img className="link" src="../team-pics/linkedin.png"></img>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
