import React from 'react'
import single from '../assests/single.png';
import double from '../assests/double.png';
import triple from '../assests/triple.png';

const Cards = () => {

    return (
        <div className='bg-white grid md:grid-cols-3 my-6 mt-12 gap-y-[3rem] font-semibold p-12'>
            <div className='px-[6rem] py-[1rem] mx-auto mt-[2rem] rounded-md shadow-xl flex flex-col items-center hover:scale-105 ease-in-out duration-200'>
                <div className='my-6'>
                    <img className='max-w-[85px]' src={single} alt="" />
                </div>
                <h2 className='font-bold text-xl'>Single User</h2>
                <h1 className='font-bold text-4xl my-8'>$149</h1>
                <ul className=''>
                    <li className='border-b border-b-gray-300 mb-3'>500 GB Storage</li>
                    <li className='border-b border-b-gray-300 mb-3'>1 User Allowed</li>
                    <li className='border-b border-b-gray-300 mb-3'>Send up to 2 GB</li>
                </ul>
                <button className='w-[9rem] bg-[#00df9a] px-6 py-2 my-6 rounded-md text-black font-bold'>Start Trial</button>
            </div>

            <div className=' px-[6rem] bg-gray-200  py-[1rem]  max-h-420 mx-auto mt-[2rem] rounded-md shadow-xl flex flex-col items-center hover:scale-105 ease-in-out duration-200'>
                <div className='my-6'>
                    <img className='max-w-[85px]' src={double} alt="" />
                </div>
                <h2 className='font-bold text-xl'>PartnerShip</h2>
                <h1 className='font-bold text-4xl my-8'>$199</h1>
                <ul className=''>
                    <li className='border-b border-b-gray-300 mb-3'>1 TB Storage</li>
                    <li className='border-b border-b-gray-300 mb-3'>3 User Allowed</li>
                    <li className='border-b border-b-gray-300 mb-3'>Send up to 10 GB</li>
                </ul>
                <button className='w-[9rem] bg-[#000300] text-[#00df9a] px-6 py-2 my-6 rounded-md font-bold'>Start Trial</button>
            </div>
            <div className='px-[6rem]   py-[1rem]  max-h-420 mx-auto mt-[2rem] rounded-md shadow-xl flex flex-col items-center hover:scale-105 ease-in-out duration-200'>
                <div className='my-6'>
                    <img className='max-w-[85px]' src={triple} alt="" />
                </div>
                <h2 className='font-bold text-xl'>Group Account</h2>
                <h1 className='font-bold text-4xl my-8'>$299</h1>
                <ul className=''>
                    <li className='border-b border-b-gray-300 mb-3'>5 TB Storage</li>
                    <li className='border-b border-b-gray-300 mb-3'>10 User Allowed</li>
                    <li className='border-b border-b-gray-300 mb-3'>Send up to 20 GB</li>
                </ul>
                <button className='w-[9rem] bg-[#00df9a] px-6 py-2 my-6 rounded-md text-black font-bold'>Start Trial</button>
            </div>
        </div>
    )
}

export default Cards