"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const textVariant = {
    initial: {
        x: -500,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.3
        }
    }
}

const sliderVariant = {
    initial: { x: 0 },
    animate: {
        x: "-280%", transition: {
            duration: 10, repeatType: "mirror", repeat: Infinity
        }
    }
}

const Hero = () => {
    return (
        <div className='relative overflow-hidden h-[calc(100vh-100px)]'>
            <motion.div variants={sliderVariant} initial="initial" animate="animate" className='absolute text-[50vh] right-0 left-0 bottom-[-120px] whitespace-nowrap text-black opacity-20 -z-10'>Barber Content Creator Influencer</motion.div>
            <div className='wrapper flex items-center justify-center'>
                <motion.div className='flex-1' variants={textVariant} initial="initial" animate="animate">
                    <motion.div variants={textVariant} className='flex flex-col gap-5'>
                        <motion.h2 variants={textVariant} className='uppercase tracking-[10px] text-[30px] text-purple-500'>Jack Grealish</motion.h2>
                        <motion.h1 variants={textVariant} className='text-[60px] font-bold'>Innovative Hair Design <br /> A Visual Journey</motion.h1>
                        <motion.div variants={textVariant} className='flex items-center gap-5'>
                            <button className='p-5 bg-transparent text-white border border-solid border-gray-400 rounded-xl font-light'>See the Latest Works</button>
                            <button className='p-5 text-primary border border-solid bg-white rounded-xl font-light'>Contact Me</button>
                        </motion.div>
                        <motion.img animate={{
                            y: [0, 10], opacity: [0, 1], transition: {
                                duration: 1, delay: 2, repeat: Infinity
                            }
                        }} className='w-10' src='/images/scroll.png' />
                    </motion.div>

                </motion.div>
                <div className='flex-1 flex items-center justify-center'>
                    <motion.div className='bg-red-500 overflow-hidden' animate={{
                        scale: [1, 1.2, 1.2, 1, 1],
                        rotate: [0, 0, 180, 180, 0],
                        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                    }}
                        transition={{
                            duration: 3,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatDelay: 3
                        }}>
                        <Image className='object-cover' src={"/images/hero1.avif"} width={400} height={600} alt='Hero Img' />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Hero