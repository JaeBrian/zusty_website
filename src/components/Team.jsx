import InstallButtonTeam from './InstallButtonTeam';

let team = [
  {
    name: 'Adrian Insingo',
    github: 'https://github.com/adrianinsingo',
    linkedin: 'https://www.linkedin.com/in/adrian-insingo',
    imageUrl: '../public/team-pics/adrian.png',
  },
  {
    name: 'Brian Lee',
    github: 'https://github.com/JaeBrian',
    linkedin: 'http://www.linkedin.com/in/brian-jaekook-lee',
    imageUrl: '../public/team-pics/jaekook-lee.jpeg',
  },
  {
    name: 'Dana Kaplan',
    github: 'https://github.com/DanaKaplan944',
    linkedin: 'https://www.linkedin.com/in/danakaplan2/',
    imageUrl: '../public/team-pics/Dana4.png',
  },
  {
    name: 'Nancy Huang',
    github: 'https://github.com/itsnancyhuang',
    linkedin: 'https://www.linkedin.com/in/nancy-huang/',
    imageUrl: '../public/team-pics/nancy-huang.jpg',
  },
  {
    name: 'William Kil',
    github: 'https://github.com/shinykoin',
    linkedin: 'https://www.linkedin.com/in/adrian-insingo',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

export default function Team() {
  return (
    <>
      <div className="git-container">
        <img className="npm" src="../public/team-pics/npm.png"></img>
        <img className="chrome" src="../public/team-pics/Chrome.png"></img>
        <img className="medium" src="../public/team-pics/medium.png"></img>
        <img className="github" src="../public/team-pics/github.png"></img>
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
                  src="../public/team-pics/githubwhite1.png"
                ></img>
              </div>
              <div
                className="link"
                onClick={() => {
                  window.open(team.linkedin, '_blank', 'noreferrer');
                }}
              >
                <img
                  className="link"
                  src="../public/team-pics/linkedin.png"
                ></img>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
