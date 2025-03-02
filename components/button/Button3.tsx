'use client'

import React from 'react'
import { BsStars } from "react-icons/bs";

const Button = () => {
  return (
    <div className='flex'>
      <div 
        className='tracking-tight text-base cursor-pointer rounded-full flex items-center gap-2 text-white px-[48px] py-[16px] font-medium'
        style={{
          background: 'radial-gradient(circle at center, #A083F7 0%, #270090 100%)',
          boxShadow: `
            0px 11.92px 35.75px 0px #FFFFFF40 inset,
            0px -35.75px 20.41px 0px #FFFFFF38 inset,
            0px 0px 17.88px 0px #FFFFFF inset
          `
        }}
      >
        Join the Waitlist <span><BsStars width={20} height={20} /></span>
      </div>
    </div>
  )
}

export default Button