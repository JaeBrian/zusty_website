const people = [
  {
    name: 'Dana Kaplan',
    role: (
      <>
        <a href='https://github.com/DanaKaplan944'>GitHub</a>,{' '}
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
        <a href='https://github.com/nancy-huang'>GitHub</a>,{' '}
        <a href='https://www.linkedin.com/in/nancy-huang/'>LinkedIn</a>
      </>
    ),
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Brian Lee',
    role: (
      <>
        <a href='https://github.com/brian-lee'>GitHub</a>,{' '}
        <a href='https://www.linkedin.com/in/brian-lee/'>LinkedIn</a>
      </>
    ),
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Adrian Insingo',
    role: (
      <>
        <a href='https://github.com/adrian-insingo'>GitHub</a>,{' '}
        <a href='https://www.linkedin.com/in/adrian-insingo/'>LinkedIn</a>
      </>
    ),
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'William Kill',
    role: (
      <>
        <a href='https://github.com/william-kill'>GitHub</a>,{' '}
        <a href='https://www.linkedin.com/in/william-kill/'>LinkedIn</a>
      </>
    ),
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

export default function Team() {
  return (
    <>
      <div className='bg-white py-24 sm:py-32'>
        <div className='mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3'>
          <div className='max-w-2xl xl:col-span-2'>
            <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              Meet our team:
            </h2>
            <p className='mt-6 text-lg leading-8 text-gray-600'>
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio
              vitae elementum enim vitae ullamcorper suspendisse.
            </p>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2'>
        {people.map((person) => (
          <div key={person.name} className='flex items-center gap-x-6'>
            <img
              className='max-h-12 rounded-full'
              src={person.imageUrl}
              alt=''
            />
            <div>
              <h3 className='text-base font-semibold leading-7 tracking-tight text-gray-900'>
                {person.name}
              </h3>
              <p className='text-sm font-semibold leading-6 text-indigo-600'>
                {person.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
