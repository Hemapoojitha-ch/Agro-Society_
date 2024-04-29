// import React from 'react'
import {FaSearch} from 'react-icons/fa';
import {Link} from 'react-router-dom';
export default function Header() {
  return (
    <div>
    <header className='bg-green-800 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <h1 className='fon-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-200'>Agro </span>
            <span className='text-slate-300'>Society</span>

        </h1>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
            <input type='text' placeholder='Search..' 
            className='bg-transparent focus:outline-none w-24 sm:w-64'></input>
            <FaSearch className='text-slate-600'/>
        </form>
        <ul className='flex gap-4'>
            <Link to='/'>
            <li
            className='hidden sm:inline text-slate-200 hover:underline'>Home
            </li>
            </Link>
            <Link to='/About'>
            <li 
            className='hidden sm:inline text-slate-200 hover:underline'>About
            </li>
            </Link>
            <Link to='/SignIn'>
            <li 
            className='sm:inline text-slate-200 hover:underline'>Sign in
            </li>
            </Link>
        </ul>
        </div>
    </header>
    </div>

  )
}