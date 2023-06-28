// async function fetchUsers () {
//   const response = await fetch('https://reqres.in/api/users')
//   const { data } = await response.json()
//   return data
// }

import Users from '@/components/Users'

async function fetchUsers () {
  return fetch('https://reqres.in/api/users', { cache: 'no-store' })
    .then(response => response.json())
    .then(({ data }) => data)
}

export default async function IndexPage () {
  const users = await fetchUsers()
  return (
    <div className=''>
      <h1 className='py-6 text-center'>Home</h1>
      <Users Users={users} />
    </div>
  )
}
