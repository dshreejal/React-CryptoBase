import React from 'react'
import { AiFillLock, AiOutlineMail } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div>
            <div className='max-w-[400px] mx-auto min-h-[600px] px-4 py-20 mt-20 md:mt-16'>
                <h1 className='text-2xl font-bold mb-12'>Sign Up</h1>
                <form >
                    <div className='my-4'>
                        <label>Email</label>
                        <div className='my-2 w-full relative rounded-2xl shadow-xl'>
                            <input className='w-full p-2 bg-primary border-input border rounded-2xl' type="email" />
                            <AiOutlineMail className='absolute right-2 top-3 text-gray-400' />
                        </div>
                    </div>
                    <div className='my-4'>
                        <label>Password</label>
                        <div className='my-2 w-full relative rounded-2xl shadow-xl'>
                            <input className='w-full p-2 bg-primary border-input border rounded-2xl' type="password" />
                            <AiFillLock className='absolute right-2 top-3 text-gray-400' />
                        </div>
                    </div>
                    <button className='w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl'>Sign Up</button>
                </form>
                <p>Already have an account? <Link to='/signin' className='text-accent'>Sign In</Link></p>
            </div>
        </div>
    )
}

export default Signup