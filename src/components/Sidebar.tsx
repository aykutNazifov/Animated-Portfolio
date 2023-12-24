"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const variants = {
    open: {
        clipPath: "circle(1200px at 50px 50px)",
        transition: {
            duration: 1
        }
    },
    closed: {
        clipPath: "circle(30px at 50px 50px)",
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
}

const links = ["Home", "Services", "Portfolio", "Contact"]

const Sidebar = () => {
    const [open, setOpen] = useState(false)


    return (
        <motion.div animate={open ? "open" : "closed"} className='flex items-center justify-center bg-white text-black'>
            <motion.div variants={variants} className='fixed top-0 left-0 bottom-0 w-[400px] h-full bg-white z-[9999]'>
                <div className='absolute w-full h-full flex justify-center items-center flex-col gap-5'>{links.map(link => (
                    <Link className='text-[36px] hover:scale-110 transition-all duration-300' href={`#${link}`} key={link}>{link}</Link>
                ))}</div>
            </motion.div>
            <button onClick={() => setOpen(!open)} className='z-[9999] w-[50px] h-[50px] rounded-full fixed top-[25px] left-[25px] flex items-center justify-center'> <svg width="23" height="23" viewBox="0 0 23 23">
                <motion.path
                    strokeWidth="3"
                    stroke="black"
                    strokeLinecap="round"
                    variants={{
                        closed: { d: "M 2 2.5 L 20 2.5" },
                        open: { d: "M 3 16.5 L 17 2.5" },
                    }}
                />
                <motion.path
                    strokeWidth="3"
                    stroke="black"
                    strokeLinecap="round"
                    d="M 2 9.423 L 20 9.423"
                    variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 },
                    }}
                />
                <motion.path
                    strokeWidth="3"
                    stroke="black"
                    strokeLinecap="round"
                    variants={{
                        closed: { d: "M 2 16.346 L 20 16.346" },
                        open: { d: "M 3 2.5 L 17 16.346" },
                    }}
                />
            </svg></button>
        </motion.div>

    )
}

export default Sidebar