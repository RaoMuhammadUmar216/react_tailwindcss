import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';



const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    return (
        <div className='text-white flex justify-between items-center h-24 px-4 max-w-[1240px] mx-auto'>
            <h1 className='font-bold text-[#00df9a] text-3xl'>
                React.
            </h1>
            <ul className='hidden md:flex'>
                <li className='cursor-pointer p-4'>Home</li>
                <li className='cursor-pointer p-4'>Company</li>
                <li className='cursor-pointer p-4'>Resources</li>
                <li className='cursor-pointer p-4'>About</li>
                <li className='cursor-pointer p-4'>Contact</li>
            </ul>

            <div className='block md:hidden'>
                {toggle ? <AiOutlineClose size={22} onClick={() => setToggle(false)} /> : <AiOutlineMenu size={22} onClick={() => setToggle(true)} />}
            </div>

            <div className={toggle ? 'fixed left-0 top-0 p-4 bg-[#000300] border-r w-[60%] border-gray-800 h-full ease-in-out duration-300 block md:hidden' : "fixed left-[-100%]"}>
                <h1 className='font-bold text-[#00df9a] text-3xl p-4'>
                    React.
                </h1>
                <ul className='p-4 uppercase '>
                    <li className='cursor-pointer p-4 border-b border-gray-800'>Home</li>
                    <li className='cursor-pointer p-4 border-b border-gray-800'>Company</li>
                    <li className='cursor-pointer p-4 border-b border-gray-800'>Resources</li>
                    <li className='cursor-pointer p-4 border-b border-gray-800'>About</li>
                    <li className='cursor-pointer p-4'>Contact</li>
                </ul>
            </div>

        </div>


    )
}

export default Navbar