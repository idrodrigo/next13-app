import User from '@/components/User'

async function getUserId (id) {
  return fetch(`https://reqres.in/api/users/${id}`)
    .then(response => response.json())
    .then(({ data }) => data)
}

export default async function UserIdPage ({ params }) {
  const user = await getUserId(params.userId)
  return (
    <div>
      <h1>User</h1>
      <User user={user} />
      <h2 className='pt-20 text-center'>{JSON.stringify(user)}</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit excepturi officia maxime ad nobis, aperiam in expedita. Molestias mollitia adipisci quos laboriosam quod! Ut distinctio inventore aperiam harum placeat molestias aliquam dolorum neque quod. At aspernatur officiis eveniet ipsa numquam perferendis sed! Ad hic, maiores soluta cum culpa molestias reiciendis tempora ipsa, modi nulla aspernatur iste amet suscipit ex inventore iure reprehenderit. Architecto, facilis! Sed nostrum corporis, quae nihil cumque saepe maxime vero tenetur excepturi atque sit accusamus eos minima fugiat impedit quam quaerat provident! Expedita, laboriosam aliquam deserunt reprehenderit quod debitis, in voluptatem repellat odit autem aut sed impedit?</p>
    </div>
  )
}
