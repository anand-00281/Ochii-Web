import { motion } from 'framer-motion'
import React from 'react'

function Marque() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-20 rounded-3xl bg-[#004D43] overflow-hidden'>
      <div className="flex items-center whitespace-nowrap">
        <motion.h1 
          initial={{ x: "100%" }} 
          animate={{ x: "-100%" }} 
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}  
          className='text-[24vw] md:text-[10vw] uppercase tracking-tight font-semibold leading-none font-["Founders Grotesk, Roboto, sans-serif"]'>
          We are ochii
        </motion.h1>
        <motion.h1 
          initial={{ x: "100%" }} 
          animate={{ x: "-100%" }} 
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}  
          className='text-[24vw] md:text-[10vw] uppercase tracking-tight font-semibold leading-none font-["Founders Grotesk, Roboto, sans-serif"]'>
          We are ochii
        </motion.h1>
      </div>
    </div>
  )
}

export default Marque