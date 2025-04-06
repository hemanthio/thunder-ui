"use client"


import React from 'react'
import {easeInOut, motion} from "motion/react"

const page = () => {
  return (
    <div className='[perspective::1000px] [transform-style:preserve-3d] h-screen w-full bg-neutral-950 flex justify-center items-center'
    style={{
      backgroundImage : `radial-gradient(circle at 0.5px 0.5px , rgba(255,255,255,0.1) 0.5px, transparent 1px)`,
      backgroundSize:"8px 8px",
      backgroundRepeat :"repeat"
      
    }}
    >

    <motion.button 
    whileHover={{
      rotateX:25,
      rotateY:10,
      boxShadow:"0px 20px 50px rgba(8,112,184,0.7)"
    }}
    style={{
      translateZ:(100)
    }}
    transition={{
      ease:easeInOut,
      duration:0.3
    }}
    
    className='relative group text-neutral-500 px-12 py-4 rounded-lg bg-black shadow-[0px_1px_4px_0px_rgba(255,255,255,0.1)_inset, 0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]'>
      <span className="group-hover:text-cyan-500">Subscribe</span>

      <span className='absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto '></span>
      <span className='absolute blur-sm opacity-0 group-hover:opacity-100 
      transition-opacity duration-300 inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[4px] w-3/4 mx-auto '></span>
    </motion.button>
    </div>
  )
}

export default page