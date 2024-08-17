import React from 'react'

const Navbar = () => {
    return (
        <nav className='sticky top-0 bg-slate-800 text-white '>
            <div className="mycontainer flex justify-between items-center px-4 py-5 h-20">

                <div className="logo font-bold text-white text-3xl px-3 top-5 my-3.5 hover: cursor-pointer">
                    <span className='text-green-500 '> &lt;</span>
                   
                    <span>Lock</span><span className='text-green-500'>Box&gt;</span>
                </div>
                
                <div className='flex items-center justify-center gap-7'>
                <ul>
                    <li className='flex gap-6 font-semibold '>
                        <a className='hover:font-bold ' href='/'>Home</a>
                        <a className='hover:font-bold' href='#'>About</a>
                        <a className='hover:font-bold' href='#'>Contact Us</a>
                    </li>
                </ul>
                <button className='text-white bg-green-700 my-5 mx-1 rounded-full flex justify-between items-center ring-slate-400 ring-1 '> 
                    <img className='invert  w-10 p-1' src="/icons/github.svg" alt="github logo" />
                    <span className='font-bold px-2'>GitHub</span>
                    
                </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
