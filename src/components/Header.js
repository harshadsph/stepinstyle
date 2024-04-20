import React from 'react'
import { bag, cart, logoDark } from '../assets'
import Search from './Search'

function Header() {
  return (
    <div className="w-full h-[70px] bg-white border-b-[1px] border-b-gray-800 font-bodyFont">
        <div className='max-w-screen-2xl h-full mx-auto flex items-center justify-between'>
            <div>
                {/* <img className='w-28' src={logoDark} alt="logo Dark" /> */}
                <p className='text-black font-bold text-2xl tracking-wide font-titleFont'> STEP IN STYLE</p>
            </div>
            {/* <div className='flex justify-between'>
                <Search/>
            </div> */}
            <div className='flex items-center gap-8'>
                <ul className='flex items-center gap-8'>
                    <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Home</li>
                    <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Design Now</li>
                    <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Shop</li>   
                </ul>
                <div className='relative'>
                    <img className='w-6' src={bag} alt="Shopping Bag" />
                    <span className='absolute w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold '>0</span>
                </div>
                <img className='w-10 h-10 rounded-full' src={cart} alt='userLogo' />
            </div>
        </div>
        
    </div>
  )
}

export default Header