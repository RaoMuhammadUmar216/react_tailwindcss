import React from 'react';
import { FaGithubSquare, FaInstagramSquare, FaFacebookSquare, FaTwitterSquare, FaDribbbleSquare } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='md:max-w-[1240px] mx-auto text-white grid md:grid-cols-2 items-center'>
            <div className='my-16'>
                <h1 className='font-bold text-[#00df9a] text-3xl px-5 py-1'>REACT.</h1>
                <p className='px-5 py-1 md:w-[30rem] '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad facere dolores et soluta, reiciendis perspiciatis repudiandae fugit dicta neque maiores.</p>
                <div className='flex gap-8 px-5 py-3'>
                    <FaGithubSquare className='cursor-pointer' size={40} />
                    <FaInstagramSquare className='cursor-pointer' size={40} />
                    <FaFacebookSquare className='cursor-pointer' size={40} />
                    <FaTwitterSquare className='cursor-pointer' size={40} />
                    <FaDribbbleSquare className='cursor-pointer' size={40} />
                </div>
            </div>
            <div className='flex justify-between -mt-10 md:mt-10' >
                <div className='px-5'>
                    <h6 className='font-bold text-lg'>Solutions</h6>
                    <ul className='cursor-pointer'>
                        <li className='py-2'>Analytics</li>
                        <li className='py-2'>Marketing</li>
                        <li className='py-2'>Commerce</li>
                        <li className='py-2'>Insights</li>
                    </ul>
                </div>
                <div className='px-5'>
                    <h6 className='font-bold text-lg'>Support</h6>
                    <ul className='cursor-pointer'>
                        <li className='py-2'>Pricing</li>
                        <li className='py-2'>Documentation</li>
                        <li className='py-2'>Guides</li>
                        <li className='py-2'>API Status</li>
                    </ul>
                </div>
                <div className='px-5'>
                    <h6 className='font-bold text-lg'>Company</h6>
                    <ul className='cursor-pointer'>
                        <li className='py-2'>About</li>
                        <li className='py-2'>Blog</li>
                        <li className='py-2'>Jobs</li>
                        <li className='py-2'>Press</li>
                        <li className='py-2'>Careers</li>
                    </ul>
                </div>
                <div className='px-5'>
                    <h6 className='font-bold text-lg'>Legal</h6>
                    <ul className='cursor-pointer'>
                        <li className='py-2'>Claim</li>
                        <li className='py-2'>Policy</li>
                        <li className='py-2'>Terms</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer