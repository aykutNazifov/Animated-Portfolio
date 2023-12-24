"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import React from 'react'

const variants = {
    initial: {
        x: "-500px",
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 4
        }
    }
}


const Services = () => {
    return (
        <motion.div initial="initial" whileInView="animate" className="flex flex-col h-full">
            <motion.div variants={variants} className="flex-1 self-end flex gap-5 items-center">
                <p className="font-extralight text-[20px] text-gray-400 text-right">I focus on helping your confidence grow <br /> and look forward</p>
                <motion.div className="w-[500px] h-[1px] bg-gray-400"></motion.div>
            </motion.div>
            <motion.div variants={variants} className="flex-[2_2_0%] flex flex-col gap-4 items-center justify-center">
                <div className="flex gap-2 items-center">
                    <div className="w-[300px] h-[100px] relative">
                        <Image className=" rounded-full object-cover" src={"/images/people2.avif"} fill alt="People" />
                    </div>
                    <h1 className="text-[84px] font-thin"><motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas</h1>
                </div>
                <div className="flex gap-2 items-center">
                    <h1 className="text-[84px] font-thin"><motion.b whileHover={{ color: "orange" }}>for your</motion.b> charisma</h1>
                    <button className="w-[300px] h-[100px] rounded-full bg-orange-500 text-white text-[24px]">Wat we do</button>
                </div>
            </motion.div>
            <motion.div variants={variants} className="flex-[2_2_0%] flex wrapper">
                <motion.div whileHover={{ backgroundColor: "lightgray", color: "black" }} className="p-5 border-[0.5px] flex flex-col justify-between border-solid border-gray-400">
                    <h2>Branding</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, inventore.</p>
                    <button className="bg-orange-500 text-white w-full py-2">Go</button>
                </motion.div>
                <motion.div whileHover={{ backgroundColor: "lightgray", color: "black" }} className="p-5 border-[0.5px] flex flex-col justify-between border-solid border-gray-400">
                    <h2>Branding</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, inventore.</p>
                    <button className="bg-orange-500 text-white w-full py-2">Go</button>
                </motion.div>
                <motion.div whileHover={{ backgroundColor: "lightgray", color: "black" }} className="p-5 border-[0.5px] flex flex-col justify-between border-solid border-gray-400">
                    <h2>Branding</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, inventore.</p>
                    <button className="bg-orange-500 text-white w-full py-2">Go</button>
                </motion.div>
                <motion.div whileHover={{ backgroundColor: "lightgray", color: "black" }} className="p-5 border-[0.5px] flex flex-col justify-between border-solid border-gray-400">
                    <h2>Branding</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, inventore.</p>
                    <button className="bg-orange-500 text-white w-full py-2">Go</button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Services