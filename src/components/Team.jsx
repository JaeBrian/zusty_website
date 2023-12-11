
let team = [
  {
    name: 'Adrian Insingo',
    github: 'https://github.com/adrianinsingo',
    linkedin: 'https://www.linkedin.com/in/adrian-insingo',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  }, 
  {
    name: 'Brian Lee',
    github: 'https://github.com/JaeBrian',
    linkedin: 'http://www.linkedin.com/in/brian-jaekook-lee',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  }, 
  {
    name: 'Dana Kaplan',
    github: 'https://github.com/DanaKaplan944',
    linkedin: 'https://www.linkedin.com/in/danakaplan2/',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
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
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  }, 
]

export default function Team() {
  return (
    <div className='teamContainer'>
        {team.map((team) => (
          <div className='person' key={team.name}>
            <img className='person-img' src={team.imageUrl} />
            <p className='person-name'>{team.name}</p>
            <div className='links-section'>
              <div className='link' onClick={() => {window.open(team.github, '_blank', 'noreferrer')}}>GitHub</div>
              <div className='link' onClick={() => {window.open(team.linkedin, '_blank', 'noreferrer')}}>LinkedIn</div>
            </div>
          </div>
        ))}
    </div>
  );
}
