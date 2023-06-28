import User from './User'

export default function Users ({ Users }) {
  return (
        <ul className='grid grid-cols-1 gap-10 px-2 '>
            {Users.map(user => (

                <li key={user.id} className='odd:hover:bg-slate-100 even:hover:bg-slate-100 transition-colors'>
                    <User user={user} />
                </li>

            ))}
        </ul>
  )
}
