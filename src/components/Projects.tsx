
 
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { FaLocationArrow } from "react-icons/fa6";
const Projects = () => {
  return (
    <div id='projects' className='-mt-8'>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto group">
    <div className="flex flex-col text-center w-full mb-10">
      <h1 className="sm:text-3xl text-3xl font-bold title-font mb-4 text-black">
        Projects
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed  text-lg font-medium capitalize">
      All projects build on modern ui framework ,nextjs ,tailwind Css,ShadCn, DaisyUi and typescript.Fast and secure and user friendly side  is main motive.
      </p>
    </div>
     
    <div className="flex flex-wrap -m-4  group-hover:bg-slate-100">
        {/* projcts */}
        <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../public/assets/pictures/pic1.jpeg')}
            height={300}
            width={300}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              MODERN PORTFOLIO WEB PROJECT
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              PORTFOLIO 
            </h1>
            <p className="leading-relaxed line-clamp-2">
                Modern portfolio web to showcase your skills and projects .
            </p>
            <Link href={"https://portfolio-clone-seven.vercel.app/" } target='_blank'>
            <p className="leading-relaxed flex mt-2 text-indigo-500 cursor-pointer hover:underline">
             view project..<FaLocationArrow/>
            </p>
            </Link>
          </div>
        </div>
      </div>
        {/* projcts */}
        <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../public/assets/pictures/pic1.jpeg')}
            height={300}
            width={300}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              E-COMMERCE WEB PROJECT
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              E-COMMERCE WEBSITE 
            </h1>
            <p className="leading-relaxed line-clamp-2">
                E-commerce  web with all functionalities like a real world e-commerce web .
            </p>
            <Link href={""}>
            <p className="leading-relaxed flex mt-2 text-indigo-500 cursor-pointer hover:underline">
             view project..<FaLocationArrow/>
            </p>
            </Link>
          </div>
        </div>
      </div>
        {/* projcts pomodoro app */}
        <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../public/assets/pictures/pic1.jpeg')}
            height={300}
            width={300}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              POMODORO TIMER APP  PROJECT
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              POMODORO TIMER 
            </h1>
            <p className="leading-relaxed line-clamp-2">
              A pomodoro timer is a technique which is use to perform any certain task in a certain duration of time .Where you can pause ,set new time duration and resume from previous.
            </p>
            <Link target='_blank' href={"https://pomodoro-timer-app-mu.vercel.app/"}>
            <p className="leading-relaxed flex mt-2 text-indigo-500 cursor-pointer hover:underline">
             view project..<FaLocationArrow/>
            </p>
            </Link>
          </div>
        </div>
      </div>
        {/* projcts  unit todo app*/}
        <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../public/assets/pictures/pic1.jpeg')}
            height={300}
            width={300}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              TODO APP PROJECT
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              TODO APP 
            </h1>
            <p className="leading-relaxed line-clamp-2">
             A todo app with crud operations create, read, update and delete functionalities . Where using local storage to save data .
            </p>
            <Link target='_blank' href={"https://pomodoro-timer-app-mu.vercel.app/"}>
            <p className="leading-relaxed flex mt-2 text-indigo-500 cursor-pointer hover:underline">
             view project..<FaLocationArrow/>
            </p>
            </Link>
          </div>
        </div>
      </div>
        {/* projcts unit convertor */}
        <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../public/assets/pictures/pic1.jpeg')}
            height={300}
            width={300}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              UNIT CONVERTOR APP 
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              UNIT CONVERTOR  
            </h1>
            <p className="leading-relaxed line-clamp-2">
              A unit convertor app with all units conversion possible in one app.
            </p>
            <Link target='_blank' href={"https://pomodoro-timer-app-mu.vercel.app/"}>
            <p className="leading-relaxed flex mt-2 text-indigo-500 cursor-pointer hover:underline">
             view project..<FaLocationArrow/>
            </p>
            </Link>
          </div>
        </div>
      </div>
        {/* projcts Assword weather gadget*/}
        <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../public/assets/pictures/pic1.jpeg')}
            height={300}
            width={300}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              PASSWORD GENERATOR  PROJECT
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              PASSWORD GENERATOR APP 
            </h1>
            <p className="leading-relaxed line-clamp-2">
             A password generator app with fully functional with all choices like only lenght of password,numbers, characters, special characters , and all merge in one . 
            </p>
            <Link target='_blank' href={"https://pomodoro-timer-app-mu.vercel.app/"}>
            <p className="leading-relaxed flex mt-2 text-indigo-500 cursor-pointer hover:underline">
             view project..<FaLocationArrow/>
            </p>
            </Link>
          </div>
        </div>
      </div>
        {/* projcts Assword generator*/}
        <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../public/assets/pictures/pic1.jpeg')}
            height={300}
            width={300}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              WEATHER UPDATE APP PROJECT
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              WEATHER  APP 
            </h1>
            <p className="leading-relaxed line-clamp-2">
             A poroject with functionalities like updating about temperature , wind speed ,and humidity by citise all over the world. 
            </p>
            <Link target='_blank' href={"https://pomodoro-timer-app-mu.vercel.app/"}>
            <p className="leading-relaxed flex mt-2 text-indigo-500 cursor-pointer hover:underline">
             view project..<FaLocationArrow/>
            </p>
            </Link>
          </div>
        </div>
      </div>
        {/* projcts Assword html previewer*/}
        <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../public/assets/pictures/pic1.jpeg')}
            height={300}
            width={300}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              HTML CODE PREVIEWER  PROJECT
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
               HTML PREVIEWER APP 
            </h1>
            <p className="leading-relaxed line-clamp-2">
             A project which takes html tags as input and  transpile them and show the results. 
            </p>
            <Link target='_blank' href={"https://pomodoro-timer-app-mu.vercel.app/"}>
            <p className="leading-relaxed flex mt-2 text-indigo-500 cursor-pointer hover:underline">
             view project..<FaLocationArrow/>
            </p>
            </Link>
          </div>
        </div>
      </div>
        {/* projcts Assword BMI calculator*/}
        <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../public/assets/pictures/pic1.jpeg')}
            height={300}
            width={300}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              BMI CALCULATOR APP  PROJECT
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              BMI CALCULATOR APP 
            </h1>
            <p className="leading-relaxed line-clamp-2">
             A BMI calculator app with functionalities to calculating your bmi and showing result in case of overweight and underweight. 
            </p>
            <Link target='_blank' href={"https://pomodoro-timer-app-mu.vercel.app/"}>
            <p className="leading-relaxed flex mt-2 text-indigo-500 cursor-pointer hover:underline">
             view project..<FaLocationArrow/>
            </p>
            </Link>
          </div>
        </div>
      </div>
        {/* projcts Assword  Expense tracker app*/}
        <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../public/assets/pictures/pic1.jpeg')}
            height={300}
            width={300}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              EXPENSE TRACKER  APP  PROJECT
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              EXPENSE TRACKER APP 
            </h1>
            <p className="leading-relaxed line-clamp-2">
             A project which records your expenses and calculate the total expense you have done. 
            </p>
            <Link target='_blank' href={"https://pomodoro-timer-app-mu.vercel.app/"}>
            <p className="leading-relaxed flex mt-2 text-indigo-500 cursor-pointer hover:underline">
             view project..<FaLocationArrow/>
            </p>
            </Link>
          </div>
        </div>
      </div>
        {/* projcts Assword Random joke generator*/}
        <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../public/assets/pictures/pic1.jpeg')}
            height={300}
            width={300}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              A RANDOM JOKE APP  PROJECT
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              JOKE GENERATOR APP 
            </h1>
            <p className="leading-relaxed line-clamp-2">
             A project which generates random jokes every time you get a new joke. 
            </p>
            <Link target='_blank' href={"https://pomodoro-timer-app-mu.vercel.app/"}>
            <p className="leading-relaxed flex mt-2 text-indigo-500 cursor-pointer hover:underline">
             view project..<FaLocationArrow/>
            </p>
            </Link>
          </div>
        </div>
      </div>
        {/* projcts Assword BMI calculator*/}
        <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../public/assets/pictures/pic1.jpeg')}
            height={300}
            width={300}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              CALCULATOR APP  PROJECT
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
             CALCULATOR APP 
            </h1>
            <p className="leading-relaxed line-clamp-2">
             A project which operates simple operations like addition, multiplication, subtraction and division precisely. 
            </p>
            <Link target='_blank' href={"https://pomodoro-timer-app-mu.vercel.app/"}>
            <p className="leading-relaxed flex mt-2 text-indigo-500 cursor-pointer hover:underline">
             view project..<FaLocationArrow/>
            </p>
            </Link>
          </div>
        </div>
      </div>
     
    </div>
  </div>
</section>


    </div>
  )
}

export default Projects