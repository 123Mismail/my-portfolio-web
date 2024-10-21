
import React from 'react'
import Link from 'next/link'
import { LuDownload } from "react-icons/lu";
import Image from 'next/image';
const Navbar = () => {
  return (
    <div className=' bg-white sticky z-50 top-0'>
       <header className="text-gray-600 body-font ">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
       <Image src={"/assets/logo/download.png"} height={50} className='rounded-full' width={50} alt='logo'></Image>
      <span className="ml-3 text-xl">M-Ismail</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} className="mr-5 hover:text-gray-900 scroll-m-20 text-lg font-medium tracking-tight">Home</Link>
      <Link href={"#about"} className="mr-5 hover:text-gray-900  scroll-m-20 text-lg font-medium tracking-tight">About</Link>
      <Link href={"#skills"} className="mr-5 hover:text-gray-900  scroll-m-20 text-lg font-medium tracking-tight">Skills</Link>
      <Link href={"#projects"} className="mr-5 hover:text-gray-900  scroll-m-20 text-lg font-medium tracking-tight">Projects</Link>
      <Link href={"#contact"} className="mr-5 hover:text-gray-900  scroll-m-20 text-lg font-medium tracking-tight">Contact</Link>
 
    </nav>
    <a  href='/assets/cv/Cv.pdf' download>
    <button className="inline-flex  items-center group bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
    <LuDownload className='mr-2 text-lg group-active:text-blue-500'/>
     Download CV
       
    </button>
    </a>
  </div>
</header>



    </div>
  )
}

export default Navbar