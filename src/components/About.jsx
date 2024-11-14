import React from 'react'

function About() {
  return (
    <div className='w-full p-5 md:p-20 bg-[#CDEA68] text-black'>
        <h1 className='font-[Neue Montreal] text-3xl md:text-5xl'>Ochi is a strategic partner for fast-growing tech</h1>
            <h1 className='font-[Neue Montreal] text-3xl md:text-5xl'> businesses that need to raise funds, sell products,</h1>
            <h1 className='font-[Neue Montreal] text-3xl md:text-5xl'>explain complex ideas, and hire great people.</h1> 

            <div className="w-full flex flex-col md:flex-row gap-5 border-t-2 pt-10 mt-20 border-[#a1b562]">
                <div className="w-full md:w-1/2 ">
                <h1 className='text-4xl md:text-7xl'>Our approach :</h1>
                <button className='flex text-white items-center uppercase gap-10 px-10 mt-10 py-6 rounded-full bg-zinc-900'>Read more
                </button>
                
                </div>
                <div className="w-full md:w-1/2 h-[60vh] rounded-3xl bg-[#667a1a] overflow-hidden relative">
                <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="Image" className='w-full h-full object-cover' />
                </div>
            </div>
    </div>
    
  )
}

export default About