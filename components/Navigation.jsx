import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Navigation () {
  return (
    <nav className={inter.className} >
      <ul className='bg-yellow-600/60 flex gap-10 justify-end pt-2 pr-10'>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href='/users'>Users</Link></li>
      </ul>
    </nav>
  )
}
