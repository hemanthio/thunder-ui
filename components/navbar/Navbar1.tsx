

"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'

const navLinks = [
  { label: 'components', path: '#home' },
  { label: 'templates', path: '#about' },
  { label: 'sections', path: '#section' },
  { label: 'pricing', path: '#contact' },
]

const NavItem = ({ label, path, isMobile = false }: { label: string; path: string; isMobile?: boolean }) => {
  const [isHovered, setIsHovered] = useState(false)
    
  return (
    <div
      className={`font-medium relative h-6 overflow-hidden ${isMobile ? 'my-4' : 'mx-2'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="popLayout">
        {!isHovered ? (
          <motion.div
            key="default"
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="block"
          >
            <Link href={path}>
              {label}
            </Link>
          </motion.div>
        ) : (
          <motion.div
            key="hovered"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="block"
          >
            <Link href={path}>
              {label}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.div 
    // fixed top-2 left-0 right-0 z-50 remove (w-full and add these)
      className='w-full  flex flex-col tracking-tight rounded-4xl md:rounded-full px-3 py-2 mx-4 bg-[#A9A9A9]/20'
      animate={{
        height: isMenuOpen ? "auto" : "auto"
      }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex justify-between items-center w-full">
        {/* company name */}
        <Link href="#">
          <h1 className='text-base font-semibold'>
            Thunderly
          </h1>
        </Link>
        
        {/* desktop navbar */}
        <nav className='hidden md:block'>
          <div className='flex gap-1 text-gray-600'>
            {navLinks.map((link) => (
              <NavItem key={link.label} label={link.label} path={link.path} />
            ))}
          </div>
        </nav>
        
        {/* desktop button */}
        <button 
          className="hidden md:block bg-black text-white font-medium py-2 px-5 rounded-full transition-all duration-300"
          style={{
            boxShadow: "0px 0px 8px 2px #8B7D7D inset"
          }}
        >
          Join Waitlist
        </button>
        
        {/* mobile menu button */}
        <button 
          className="md:hidden font-medium py-2 px-5 rounded-full transition-all duration-300"
          style={{
            backgroundColor: isMenuOpen ? "#737780" : "black",
            color: "white",
            boxShadow: "0px 0px 8px 2px #8B7D7D inset"
          }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>
      
      {/* mobile menu within navbar */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ 
              duration: 0.4,
              height: {
                duration: 0.4,
              },
              opacity: {
                duration: 0.2,
              }
            }}
            className="md:hidden w-full overflow-hidden"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ 
                duration: 0.3,
                delay: 0.05
              }}
              className="w-full flex flex-col items-center pt-4"
            >
              <div className='flex flex-col items-center w-full'>
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 10, opacity: 0 }}
                    transition={{ 
                      duration: 0.2,
                      delay: 0.05 + (index * 0.05)
                    }}
                  >
                    <NavItem label={link.label} path={link.path} isMobile={true} />
                  </motion.div>
                ))}
              </div>
              <motion.button 
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 10, opacity: 0 }}
                transition={{ 
                  duration: 0.2,
                  delay: 0.25
                }}
                className="mt-4 w-full mb-2 bg-black text-white font-medium py-2 px-5 rounded-full transition-all duration-300"
                style={{
                  boxShadow: "0px 0px 8px 2px #8B7D7D inset"
                }}
              >
                Join Waitlist
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Navbar