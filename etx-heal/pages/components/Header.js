import styles from '../../styles/Home.module.css'
import Link from 'next/link'

export default function Header()
{
    return(
        <header className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex flex-wrap p-4 flex-col justify-between md:flex-row items-center">
    <Link className="flex title-font font-medium items-center text-white mb-4 md:mb-0" href='/'>
      <span className="ml-3 text-xl">ETXHeal</span>
    </Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link className="mr-5 hover:text-white" href="/menu">Menu</Link>
    </nav>

    <Link href="/login">
    <button className="rounded-full inline-flex items-center hover:bg-amber-600 hover:text-white bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Login
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
    </Link>

    <Link href="/register">
    <button className="rounded-full inline-flex items-center hover:bg-red-600 hover:text-white bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">SignUp
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
    </Link>
  </div>
</header>
    )
}