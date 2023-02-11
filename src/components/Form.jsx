import React from 'react'

const Form = () => {
    return (
        <div className='md:max-w-[1240px] mx-auto md:mt-12 text-white grid md:grid-cols-2 md:h-[16rem] h-[20rem] items-center '>
            <div className='my-4 md:max-w-[1240px] mx-auto'>
                <h3 className='font-bold text-xl md:text-4xl'>
                    Want tips & tricks to optimize your flow?
                </h3>
                <p>
                    Signup to our newsletter and stay upto date.
                </p>
            </div>
            <div className='md:max-w-[1240px] mx-auto mb-4'>
                <input className='px-6 py-2 rounded-md mr-2 w-full' type="text" placeholder='Enter you email' name="" id="" />
                <button className='w-[9rem] bg-[#00df9a] px-6 py-2 my-6 rounded-md text-black font-bold'>Notify me</button>
                <p>
                    We care about protection of your data. Read our <a className='text-[#00df9a] underline' href=''>Privacy Policy</a>
                </p>
            </div>
        </div>

    )
}

export default Form