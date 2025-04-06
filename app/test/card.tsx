"use client"

import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { IoMdClose } from "react-icons/io";
import { IconArrowLeft } from '@tabler/icons-react';
import {AnimatePresence, motion} from "motion/react"

const card = () => {
    const [open, setOpen] = useState(true)
  return (
    <>
    <AnimatePresence >
    {open && ( <motion.div
    initial={{
        opacity:0,
        scale:0,
        filter:"blur(10px)",
    }}
animate={{
    opacity:1,
    scale:1,
    filter:"blur(0px)", 
   
}}

    exit={{
        opacity:0,
        scale:0.98,
        filter:"blur(10px)",
    }}
    transition={{
        duration:0.4,
        ease:"easeInOut",
    }}
    className={cn(
  "w-72 min-h-[25rem] rounded-xl",
  "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
  "p-6 flex flex-col"
    )}
    >
<h2 className='font-bold text-[10px] text-black'> Hemanth</h2>
<p className='text-neutral-600 mt-2 text-[10px] '> a collection of beautiful UI compoennts , lets go dive in the video </p>
<div className='flex justify-center items-center'>
<button 
onClick={()=>setOpen(false)}
className="flex text-black items-center justify-center shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
    aceternity 
<IoMdClose color='black'/>
</button>
</div>
<div className='flex-1 bg-gray-100 border border-dashed border-neutral-200 mt-4 relative rounded-lg'>


    <motion.div 
    initial={{
        opacity:0,
        scale:0.98,
        filter:"blur(10px)"
    }}
    whileHover={{
        opacity:1,
        scale:1.05,
        filter:"blur(0px)"
    }}

    transition={{
        // duration:0.3,
        // ease:"easeInOut"
        type:"spring",
        stiffness:100,
        damping:15,
        
    }}
    className='absolute inset-0 h-full w-full divide-y border border-neutral-200 divide-neutral-200 bg-white rounded-lg'>
       
        <div>
            Thunderly
        </div>
        <div>
        <IconArrowLeft />
            CuratedProducts
        </div>
        
    </motion.div>
</div>
    </motion.div>)}
    </AnimatePresence>
    </>
  )
}

export default card