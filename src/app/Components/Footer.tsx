import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaLinkedin } from "react-icons/fa6";

const Footer = () =>  {
  return (
    <div className='bg-blue-50'>
  <footer className="text-gray-600 body-font">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <Image
            src={require("../../../public/assests/profile/profile pic.jpg")}
            alt='gulzaman'
            width={70}
            height={70}
            className='w-100'
        />
        <span className="ml-3 text-xl">LinkedIn</span>
      </a>
      <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
        © 2024 LinkedIn -
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <Link
        target='_blank' 
        href={"https://www.linkedin.com/in/gulzaman-arain-5308b32b4"}
        className="text-gray-500">
        <FaLinkedin className="text-4xl hover:text-[#0000FF]"/>
        </Link>
    </span>
    </div>
  </footer>
   </div>
  )
}

export default Footer
