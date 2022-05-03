import styles from '../../styles/Home.module.css'

export default function Header()
{
    return(
        <header class="text-gray-400 bg-gray-900 body-font">
  <div class="container mx-auto flex flex-wrap p-4 flex-col justify-between md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0" href='/'>
      <span class="ml-3 text-xl">ETXHeal</span>
    </a>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-white" href="/menu">Menu</a>
    </nav>

    <a href="/login">
    <button class="rounded-full inline-flex items-center hover:bg-amber-600 hover:text-white bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Login
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
    </a>

    <a href="/register">
    <button class="rounded-full inline-flex items-center hover:bg-red-600 hover:text-white bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">SignUp
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
    </a>
  </div>
</header>
    )
}