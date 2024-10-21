

import Image from 'next/image'
 
import React from 'react'

const About = () => {
  return (
    <div id='about'>
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded-full w-[350px] h-[400px]   ml-4"
        alt="about"
        height={300}
        width={300}
        src={require('../../public/assets/pictures/pic1.jpeg')
          
        }
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        About Me
      
      </h1>
      <p className="mb-8 leading-relaxed">
       I have done my scholing from my home land Gilgit Baltistan, then move towards Karachi for higher education .In Karachi I have done my intermediate in commputer sciense .After completing my intermediate I took admission in Bs mathematics program then  about in the end of 2023 I stated to learn programming.
      </p>
      <p className="mb-8 leading-relaxed">
        Now I am persuing GenAi course from Governor Sindh Initiative for Artificial intelligence program .Where we covere the modern webdevelopment frameworks Nextjs,for frontend development and generative Intelligence where we learn python for api making.
        I have also completed a modern webdevelopment course from Aptech Learning 
      </p>
      <div className="flex justify-center">
        <a href ="/assets/cv/Cv.pdf"target='_blank' >
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          View CV
        </button>
        </a>
       
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About