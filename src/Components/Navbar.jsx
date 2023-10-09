// import React from 'react'

const Navbar = () => {
  return (
    <header className=' bg-[#1A1AFF] w-[100%]'>
    <div className=' flex bg-[#1A1AFF] justify-between items-center text-white mx-[7%]'>
        <div className='flex items-center justify-between py-[3%]'>
            <div className="flex justify-between items-center">
                <h1 className='text-2xl font-bold '>Cry</h1>
                <p className='text-l font-bold'>CryptoTrade</p>
            </div>
            <p className="px-[20%] text-xl">Contact</p>
        </div>
        <div className='flex items-center space-x-[40px]'>
            <ul className="flex justify-center] items-enter ">
                <li >
                    <a href="#" className="text-xl">Login</a>
                </li>
            </ul>
            <button className="bg-[red] px-[22px] py-[14px]">
                <a>Get Started</a>
            </button>
        </div>
    </div>
</header>
  )
}

export default Navbar