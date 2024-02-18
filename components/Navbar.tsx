import Image from 'next/image'
import React from 'react'
import Logo from '@/public/images/The-cinema-fans-logo.png'
import Link from 'next/link'

const Navbar = () => {

  const navbarLinks = [
    {
      path: "",
      text: "Movies"
    },
    {
      path: "",
      text: "Series"
    },
    {
      path: "",
      text: "Reviews"
    },
    {
      path: "",
      text: "News"
    },
    {
      path: "",
      text: "Contact"
    },
    
  ]
  return (
    <nav className='flex justify-between items-center p-4 bg-[#111111]'>
        <Image src={Logo} alt='logo' width={400} height={200} />

        <ul className='flex gap-8 text-white font-bold [&>li]:px-2 [&>li]:py-2 [&>li]:rounded-xl'>
         {navbarLinks.map((link, i) => {
          return <li key={i} className='hover:bg-white/20'><Link href={link.path}>{link.text}</Link></li>
        })}
        </ul>
        <div className='flex gap-2 px-5 text-white'>
          <Link href={'/login'}><button className='px-6 py-2 rounded bg-slate-500'>login</button></Link>
          <Link href={'/register'}><button className='px-6 py-2 rounded bg-slate-500'>Register</button></Link>
        </div>
    </nav>
  )
}

export default Navbar