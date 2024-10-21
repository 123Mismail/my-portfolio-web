import Image from "next/image";
import React from "react";
import { IoLogoGithub } from "react-icons/io5";
import { FaFacebook,FaLinkedinIn } from "react-icons/fa";
 
const Footer = () => {
  return (
    <div className="pt-[50px] pb-[50px] bg-gray-100 ">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <Image src={"/assets/logo/download.png"} height={50} className='rounded-full' width={50} alt='logo'></Image>
            <span className="ml-3 text-xl">M-Ismail</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 Ismail —
            Portfolio
             
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 space-x-2 justify-center sm:justify-start">
             <a href="https://www.linkedin.com/in/muhammad-ismail-2a42822ba/" target="_blank"><FaLinkedinIn className="text-2xl"/></a>
             <a href="https://github.com/123Mismail" target="_blank"><IoLogoGithub className="text-2xl"/></a>
             <a href="#"><FaFacebook className="text-2xl"/></a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
