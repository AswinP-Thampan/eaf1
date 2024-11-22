import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
<header className="relative flex flex-wrap md:justify-start md:flex-nowrap w-full bg-black text-sm py-3 font-F1R">
      <nav className="max-w-[85rem] w-full mx-auto px-4 md:flex md:items-center md:justify-between">
    <div className="flex items-center justify-between">
      <Link className="flex-none text-xl text-site_text font-F1W " href="#">
        eaf1
      </Link>
      <div className="md:hidden">
        <button type="button" className="hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 rounded-lg bg-site_text text-gray-800 focus:outline-none disabled:opacity-50 disabled:pointer-events-none" id="hs-navbar-example-collapse" aria-expanded="false" aria-controls="hs-navbar-example" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-example">
          <svg className="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
          <svg className="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>
    </div>
    <div id="hs-navbar-example" className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow md:block" aria-labelledby="hs-navbar-example-collapse">
      <div className="flex flex-col gap-3 mt-5 md:flex-row md:items-center md:justify-end md:mt-0 md:ps-5">
        <Link className="md:p-4 py-2 block text-white hover:text-site_text font-semibold" href="/">Home</Link>
        <Link className="md:p-4 py-2 block text-white hover:text-site_text font-semibold" href="/f1car">Know More</Link>
        <Link className="md:p-4 py-2 block text-white hover:text-site_text font-semibold" href="/mclaren">McLaren</Link>
        <Link className="md:p-4 py-2 block text-white hover:text-site_text font-semibold" href="#">Red Bull</Link>
        <Link className="md:p-4 py-2 block text-white hover:text-site_text font-semibold" href="/mercedes">Mercedes</Link>
        <Link className="md:p-4 py-2 block text-white hover:text-site_text font-semibold" href="#">Aston Martin</Link>
        <Link className="md:p-4 py-2 block text-white hover:text-site_text font-semibold" href="/ferrari">Ferrari</Link>
      </div>
    </div>
  </nav>
</header>
  )
}

{/* <div className="hidden w-full md:flex md:items-center md:w-auto" >
<ul className="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0" >
  <li>
    
  </li>
  <li>

  </li>
  <li>

  </li>
  <li>

  </li>
  <li>

  </li>
  <li>

  </li>
</ul>
</div> */}
