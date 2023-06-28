import Link from 'next/link'

export default function User ({ user }) {
  return (
        <Link href={`/users/${user.id}`}>
            <div className='grid grid-rows-3 grid-flow-col border-2 border-gray-300 text-center rounded-lg group/item'>
                <div className='row-span-3 border-r-2 border-r-gray-300 flex justify-center'>
                    <img src={user.avatar} alt={user.first_name} className='rounded-full' />
                </div>
                <h2 className='col-span-2 b text-yellow-600/60 flex justify-center items-center'>{user.first_name} {user.last_name}</h2>
                <blockquote className="row-span-2 col-span-2 group-hover/item: flex justify-center items-center text-2xl font-semibold italic text-center text-slate-900">
                    <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 group-hover/item:scale-75 before:bg-yellow-600/60 relative inline-block">
                        <span className="relative text-white">{user.email}</span>
                    </span>
                </blockquote>
            </div>

        </Link>
  )
}
