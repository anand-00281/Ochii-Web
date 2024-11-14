import React from 'react'

function Footer() {
  return (
    <div className='w-full bg-gray-100 p-7 md:p-20'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
        <div className='flex flex-col mb-10 md:mb-0'>
          <h1 className='text-5xl text-slate-900 font-bold tracking-tight'>EYE-<br />OPENING</h1>
          <h2 className='text-3xl text-slate-900 font-semibold mt-2'>PRESENTATIONS</h2>
        </div>
        <div className='flex flex-col'>
          <h3 className='text-slate-900 font-semibold'>M:</h3>
          <ul className='list-none p-0'>
            <li><a href="#" className='text-gray-700 hover:text-[#68d0ea]'>Home</a></li>
            <li><a href="#" className='text-gray-700 hover:text-[#68d0ea]'>Services</a></li>
            <li><a href="#" className='text-gray-700 hover:text-[#68d0ea]'>Our work</a></li>
            <li><a href="#" className='text-gray-700 hover:text-[#68d0ea]'>About us</a></li>
            <li><a href="#" className='text-gray-700 hover:text-[#68d0ea]'>Insights</a></li>
            <li><a href="#" className='text-gray-700 hover:text-[#68d0ea]'>Contact us</a></li>
          </ul>
        </div>
        <div className='flex flex-col'>
          <h3 className='text-slate-900  font-semibold'>S:</h3>
          <ul className='list-none p-0'>
            <li><a href="#" className='text-gray-700 hover:text-[#68d0ea]'>Instagram</a></li>
            <li><a href="#" className='text-gray-700 hover:text-[#68d0ea]'>Behance</a></li>
            <li><a href="#" className='text-gray-700 hover:text-[#68d0ea]'>Facebook</a></li>
            <li><a href="#" className='text-gray-700 hover:text-[#68d0ea]'>LinkedIn</a></li>
          </ul>
        </div>
        <div className='flex flex-col'>
          <h3 className='font-semibold text-black'>L:</h3>
          <p className='text-black'>202-1965 W 4th Ave<br />Vancouver, Canada</p>
          <p className='text-black'>30 Chukarina St<br />Lviv, Ukraine</p>
        </div>
        <div className='flex flex-col'>
          <h3 className='font-semibold text-black'>E:</h3>
          <p className='text-black'>hello@ochi.design</p>
        </div>
      </div>
      <div className='w-full text-center text-gray-600 mt-10'>
        <p className='text-black'>&copy; 2024 Ochi design. <a href="#" className='text-gray-700 hover:text-[#68d0ea]'>Legal Terms</a></p>
        <p className='mt-2 text-black'>Website by Obys</p>
      </div>
    </div>
  )
}

export default Footer