import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-800 text-white flex flex-col justify-center items-center  w-full'>
            <div className="logo font-bold text-white text-2xl items-center text-center justify-center">
                <span className='text-green-500'> &lt;</span>

                <span>Lock</span><span className='text-green-500'>Box&gt;</span>
                <p className="text-sm">&copy; 2024 LockBox. All rights reserved.</p>


            </div>
        </div>
    )
}

export default Footer
