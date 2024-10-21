"use client"
import React from 'react'
 
import Image from 'next/image'
import Typewriter from 'typewriter-effect';
import Link from 'next/link';
 

const HeroSection = () => {
  return (
    <div className='bg-slate-50 bg-fixed bg-cover bg-center  '>
        <section className="text-gray-600 body-font  ">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
    I am <Typewriter
  options={{
    strings: ['A Frontend Developer',' Experties In Modern UI Frameworks',' nextjs ,TailwindCss, ShadCn'],
    autoStart: true,
    loop: true,
  }}
/>

      <div className='h-1 w-[120px] bg-blue-600 mt-3 mb-3'></div>
        Frontend Developer Overview
      </h1>
      <p className="mb-8 leading-relaxed">
      A frontend developer is a crucial player in the web development process, responsible for creating the visual and interactive aspects of websites and web applications. Their primary focus is on the user interface (UI) and user experience (UX), ensuring that users have a smooth and enjoyable interaction with digital products.
      </p>
      <Link href={"#contact"}>
      <div className="flex justify-center">
         <button className='py-2 px-6 rounded-lg bg-blue-500 text-white w-full text-xl mt-3 font-semibold'>Contact</button>
      </div>
      </Link>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6  ">
      <Image src={"/assets/pictures/pic1.jpeg"} height={360} width={360} alt='picture' className='rounded-tr-3xl rounded-bl-3xl'>

      </Image>
      {/* <Animate3D /> */}
    </div>
  </div>
</section>

    </div>
  )
}

export default HeroSection