import React from 'react';
import "./style.css";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  return (
    <BrowserRouter>
      <div className="md:grid md:grid-cols-2">
        
        <nav className='nav1 fixed md:items-center md:place-self-center z-10 md:bg-slate-800 md:m-0 md:p-2 md:h-[80px] md:w-[1300px] md:self-auto md:backdrop-filter md:backdrop-blur-lg md:bg-opacity-10 md:border-b md:border-inherit md:border-gray-200'></nav>

        <div className='md:fixed md:z-20 md:flex md:flex-row md:place-self-center max-md:pt-2'>
            
            <ul className='md:flex md:flex-row md:items-center pt-16'>
              <li className='px-2 text-end md:m-2 md:cursor-pointer md:hover:text-red-600 font-bold md:text-2xl md:px-7 md:duration-500'><Link to='#home' smooth>Home</Link></li>
              <li className='px-2 text-end md:m-2 md:cursor-pointer md:hover:text-red-600 font-bold md:text-2xl md:px-7 md:duration-500'><Link to='#education' smooth>Education</Link></li>
              <li className='px-2 text-end md:m-2 md:cursor-pointer md:hover:text-red-600 font-bold md:text-2xl md:px-7 md:duration-500'><Link to='#achievements' smooth>Achievements</Link></li>
              <li className='px-2 text-end md:m-2 md:cursor-pointer md:hover:text-red-600 font-bold md:text-2xl md:px-7 md:duration-500'><Link to='#hobbies' smooth>Hobbies</Link></li>
              <li className='px-2 text-end md:m-2 md:cursor-pointer md:hover:text-red-600 font-bold md:text-2xl md:px-7 md:duration-500'><Link to='#contacts' smooth>Contacts</Link></li>
              <li className='px-2 text-end md:m-2 md:cursor-pointer md:hover:text-red-600 font-bold md:text-2xl md:px-7 md:duration-500'><Link to='#contacts' smooth>Solution Form</Link></li>
            </ul>

        </div>

      </div>
    </BrowserRouter>
  )
}

export default Navbar