import React from 'react'

function Cards() {
  return (
    <div className='pt-20 pb-20 w-full h-full px-4 md:px-32 bg-zinc-900 flex flex-col md:flex-row items-center gap-5'>
        <div className="cardcontainer h-[50vh] w-full md:w-1/2">
            <div className="card relative rounded-xl w-full h-full flex items-center justify-center bg-[#004D43]">
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute border-2 border-[#CDEA68] px-5 py-1 rounded-full text-[#CDEA68] bottom-5'>&copy; 2019-2022</button>
            </div>
        </div>
        <div className="cardcontainer flex flex-col md:flex-row gap-5 h-[50vh] w-full md:w-1/2">
            <div className="card relative rounded-xl w-full md:w-1/2 h-full flex items-center justify-center bg-[#212121]">
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    <button className='absolute border-2 border-[#CDEA68] px-5 py-1 rounded-full text-[#CDEA68] bottom-5'>RATING 5.0 ON CLUTCH</button>
            </div>
            <div className="card relative rounded-xl w-full md:w-1/2 h-full flex flex-col items-center justify-center bg-[#212121]">
                    <img className='w-32 mb-4' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                    <button className='border-2 border-[#CDEA68] px-5 py-1 rounded-full text-[#CDEA68]'>BUSINESS BOOTCAMP ALUMNI</button>
            </div>
        </div>
    </div>
  )
}

export default Cards