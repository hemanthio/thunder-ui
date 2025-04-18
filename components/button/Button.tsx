
'use client'
import { MoveRight } from 'lucide-react';
import { motion, AnimatePresence } from "motion/react";
import { useState } from 'react';

const Button = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='flex'>
    <div
      className='flex gap-2 cursor-pointer text-white items-center py-2 pr-2 pl-4 bg-[#F15024] rounded-full'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1 className='text-base font-medium'>Register Now</h1>
      <div className='p-2 rounded-full flex bg-white overflow-hidden relative '>
        <AnimatePresence mode="popLayout">
          {!isHovered ? (
            <motion.div
              key="first"
              initial={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 31 }}
              transition={{ duration: 0.3 }}
            >
              <MoveRight color='#F15024' />
            </motion.div>
          ) : (
            <motion.div
              key="second"
              initial={{ opacity: 0, x: -31 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <MoveRight color='#F15024' />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
    </div>
  );
};

export default Button;