import React from 'react'
import laptop from '../assests/laptop.jpg';

const Analytics = () => {
    return (
        <div className=" bg-white w-full mx-auto grid md:grid-cols-2">
            <div className='mt-12 md:max-w-[1240px] mx-auto'>
                <img className='md:w-[500px]' src={laptop} alt="" />
            </div>
            <div className='md:max-w-[1240px] mx-auto flex flex-col justify-center px-8'>
                <p className='font-bold text-lg text-[#00df9a]'>DATA ANALYTICS DASHBOARD</p>
                <h3 className='font-bold text-2xl'>Manage Data Analytics Center</h3>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dignissimos, quas magnam sint ab praesentium impedit harum voluptas veniam sit. Officia amet laudantium laboriosam provident distinctio odit. Maxime, accusamus voluptatibus.
                </p>
                <button className='w-[9rem] bg-[#00df9a] px-6 py-2 mt-8 rounded-md text-black font-bold mb-12'>Get Started</button>
            </div>
        </div>

    )
}

export default Analytics