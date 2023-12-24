"use client"

import React, { LegacyRef, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface IParallax {
    type: string
}

const Parallax: React.FC<IParallax> = ({ type }) => {
    const ref: LegacyRef<HTMLDivElement> | undefined = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])


    return (
        <div ref={ref} className='w-full h-full flex items-center justify-center relative overflow-hidden' style={{
            background:
                type === "services"
                    ? "linear-gradient(180deg, #111132, #0c0c1d)"
                    : "linear-gradient(180deg, #111132, #505064)",
        }}>
            <motion.h1 style={{ y: yText }} className='text-[100px]'>{type === "services" ? "What We Do?" : "What We Did?"}</motion.h1>
            <div className='absolute w-full h-full bottom-0 bg-cover bg-bottom z-30' style={{ backgroundImage: 'url("/images/mountains.png")' }}></div>
            <motion.div className='absolute w-full h-full bottom-0 bg-cover bg-bottom z-20' style={{ backgroundImage: `url(${type === "services" ? "/images/planets.png" : "/images/sun.png"})`, y: yBg }}></motion.div>
            <motion.div className='absolute w-full h-full bottom-0 bg-cover bg-bottom z-10' style={{ backgroundImage: 'url("/images/stars.png")', x: yBg }}></motion.div>
        </div>
    )
}

export default Parallax