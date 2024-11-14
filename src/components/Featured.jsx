import React from 'react'

function Featured() {
  return (
    <div className='w-full py-20'>
      <div className="w-full px-4 md:px-20 border-b-[1px] border-zinc-700 pb-10">
        <h1 className='text-4xl md:text-6xl font-["Neue Montreal"] text-center tracking-tight'>
          Featured Project
        </h1>
      </div>
      <div className='px-4 md:px-20 mt-10'>
        <div className="cards w-full flex flex-col md:flex-row gap-10">
          <div className="cardcontainer relative w-full md:w-1/2 h-[40vh] md:h-[60vh]">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 leading-none tracking-tighter text-5xl md:text-7xl hidden">
              <h1 className='text-[#CDEA68]'>
                {"FYDE".split("").map((item, index) => (
                  <span key={index}>{item}</span>
                ))}
              </h1>
            </div>
            <div className="card w-full rounded-xl h-full overflow-hidden shadow-lg">
              <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" alt="FYDE" />
            </div>
          </div>
          <div className="cardcontainer relative w-full md:w-1/2 h-[40vh] md:h-[60vh]">
            <div className="card w-full rounded-xl h-full overflow-hidden shadow-lg">
              <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" alt="VISE" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured