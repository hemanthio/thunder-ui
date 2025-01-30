'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MoveRight } from 'lucide-react';

const Button = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className='flex gap-2 cursor-pointer text-white items-center py-2 pr-2 pl-4 bg-[#F15024] rounded-full'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1 className='text-base font-medium'>Register Now</h1>
      <div className='p-2 rounded-full bg-white relative overflow-hidden'>
        {/* First Arrow */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: isHovered ? '100%' : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          style={{ position: 'absolute', left: 0 }}
        >
          <MoveRight color='#F15024' />
        </motion.div>

        {/* Second Arrow (hidden initially) */}
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: isHovered ? 0 : '-100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          style={{ position: 'absolute', left: 0 }}
        >
          <MoveRight color='#F15024' />
        </motion.div>
      </div>
    </div>
  );
};

export default Button;