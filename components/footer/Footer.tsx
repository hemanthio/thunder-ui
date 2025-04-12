"use client"

import React from 'react';
import {motion} from "motion/react"

export default function ContactSection() {

  const tiltVariant = {
    initial: { rotate: Math.random() * 8 - 5 }, // random between -2 and +2 degrees
    whileHover: { rotate: 0, scale: 1.05 },
    transition: { type: "spring", stiffness: 200 },
  };
  

  return (
    <div className="flex flex-col items-center justify-between min-h-screen py-12 px-4">
      {/* Center content vertically */}
      <div className="flex-grow flex items-center [perspective::1000px] [transform-style:preserve-3d] justify-center w-full">
        {/* Gradient Button with increased scale */}
        <div className="relative scale-150 max-md:scale-110">
          <motion.div 
            whileHover={{
              scale: 1.05,
              rotateX:25,
              rotateY:5,
              boxShadow:"0px 20px 50px rgb(255, 248, 42)",
             
            }} 
            style={{
              translateZ:(20)
            }}
            
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="relative"
          >
            {/* Border gradient using pseudo-element */}
            <span 
              className="absolute inset-0 rounded-3xl -z-10"
              style={{
                padding: "8px",
                background: "linear-gradient(180deg, #A089FF 0%, #8C70FF 100.04%)",
                margin: "-6px"
              }}
            />
            <motion.button 
            whileHover={{
              color:"#FFF82A"
            }}
              className="relative px-8 py-4 rounded-2xl tracking-tighter text-white text-2xl font-medium"
              style={{
                background: "linear-gradient(174.93deg, #7F5EFF 3.52%, #997FFF 102.96%)",
                boxShadow: "0px 0px 2px 0px rgba(110, 80, 224, 0.25), 0px 4px 4px 0px rgba(0, 10, 31, 0.2), 0px 2px 4px 0px rgba(108, 80, 224, 0.25)"
              }}
            >
              Book Discovery Call
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Email and Social Icons Container positioned at bottom */}
      <div className="flex items-center max-md:flex-col max-md:gap-4 justify-between w-full max-w-4xl bg-gray-100 rounded-2xl px-6 py-4 mb-6">
        {/* Email with Icon */}
        <div className="flex items-center space-x-3">
          <svg viewBox="0 0 24 24" className="w-6 h-6  rotate-45" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
          </svg>
          <span className="text-black/90 text-lg font-medium">aryawebwork@gmail.com</span>
        </div>

        {/* Divider line visible only on mobile */}
        <div className="hidden max-md:block w-full h-[1px] bg-gray-300"></div>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-4">
          {/* X (Twitter) Icon */}
          <motion.a 
           variants={tiltVariant}
           initial="initial"
           whileHover="whileHover"
           transition={tiltVariant.transition}
          href="#" className="bg-black   text-white rounded-md p-2">
            <svg className="w-6 h-6  " viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </svg>
          </motion.a>

          {/* LinkedIn Icon */}
          <motion.a 
           variants={tiltVariant}
           initial="initial"
           whileHover="whileHover"
           transition={tiltVariant.transition}
          href="#" className="bg-blue-600 text-white rounded-md p-2">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
            </svg>
          </motion.a>

          {/* Instagram Icon */}
          <motion.a
           variants={tiltVariant}
           initial="initial"
           whileHover="whileHover"
           transition={tiltVariant.transition}
          href="#" className="bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400 text-white rounded-md p-2">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
            </svg>
          </motion.a>
        </div>
      </div>
    </div>
  );
}