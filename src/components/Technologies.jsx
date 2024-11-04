import React from 'react'
import { SiArduino, SiRaspberrypi, SiCplusplus, SiLinux, SiVisualstudiocode } from 'react-icons/si'; 
import { FaMicrochip } from 'react-icons/fa';
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  },
});

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className='my-20 text-center text-4xl'>Technologies</motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className='flex flex-wrap items-center justify-center gap-4'>
        
        {/* <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-1'>
          <SiMatlab className='text-7xl text-orange-500' /> 
        </motion.div> */}

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-1'>
          <SiCplusplus className='text-7xl text-blue-600' /> {/* C++ */}
        </motion.div>

        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-1'>
          <FaMicrochip className='text-7xl text-gray-700' /> {/* Microcontrollers */}
        </motion.div>

        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-1'>
          <SiArduino className='text-7xl text-blue-500' /> {/* Arduino */}
        </motion.div>

        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-1'>
          <SiLinux className='text-7xl text-gray-500' /> {/* Linux */}
        </motion.div>

        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-1'>
          <SiVisualstudiocode className='text-7xl text-blue-400' /> {/* VS Code */}
        </motion.div>
        
      </motion.div>
    </div>
  )
}

export default Technologies;
