import React from 'react';
import Typed from "react-typed";

const Hero = () => {
    return (
        <div className='text-white flex flex-col justify-center items-center text-center w-full h-screen'>
            <div className='max-w-[800px] mt-[-96px] mx-auto text-[#00df9a] font-bold'>
                <p>GROWING WITH DATA ANALYTICS</p>
            </div>
            <h1 className='md:text-7xl sm:text-6xl text-4xl mt-2 font-bold'>Grow with data.</h1>
            <div className='flex '>
                <h2 className='font-bold mt-3 md:text-5xl sm:text-4xl text-xl'>Fast, flexible financing for</h2>
                <Typed
                    className='font-bold mt-3 md:text-5xl sm:text-4xl text-xl pl-2 md:pl-4 text-gray-500'
                    strings={["BTB", "BTC", "SASS"]}
                    typeSpeed={120}
                    backSpeed={140}
                    loop
                />
            </div>
            <p className='pt-4 text-gray-500 font-bold md:text-2xl text-xl md:max-w-[720px] px-[1rem] '>
                Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms.
            </p>
            <button className='bg-[#00df9a] px-6 py-2 mt-8 rounded-md text-black font-bold '>Get Started</button>
        </div>
    )
}

export default Hero