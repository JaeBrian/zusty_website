const people = [
  {
    name: 'Adrian Insingo',
    role: (
      <>
        <a href='https://github.com/adrian-insingo'>GitHub</a> {' | '}
        <a href='https://www.linkedin.com/in/adrian-insingo/'>LinkedIn</a>
      </>
    ),
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Brian Lee',
    role: (
      <>
        <a href='https://github.com/brian-lee'>GitHub</a> {' | '}
        <a href='https://www.linkedin.com/in/brian-lee/'>LinkedIn</a>
      </>
    ),
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Dana Kaplan',
    role: (
      <>
        <a href='https://github.com/DanaKaplan944'>GitHub</a> {' | '}
        <a href='https://www.linkedin.com/in/danakaplan2/'>LinkedIn</a>
      </>
    ),
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Nancy Huang',
    role: (
      <>
        <a href='https://github.com/nancy-huang'>GitHub</a> {' | '}
        <a href='https://www.linkedin.com/in/nancy-huang/'>LinkedIn</a>
      </>
    ),
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'William Kil',
    role: (
      <>
        <a href='https://github.com/william-kill'>GitHub</a> {' | '}
        <a href='https://www.linkedin.com/in/william-kill/'>LinkedIn</a>
      </>
    ),
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

export default function Team() {
  return (
    <div className='teamContainer'>
      <div className='peopleTeam'>
        {people.map((person) => (
          <div key={person.name}>
            <img className='personImg' src={person.imageUrl} />
            <p>{person.name}</p>
            <p>{person.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
