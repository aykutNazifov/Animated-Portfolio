"use client"
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import React, { LegacyRef, useRef } from 'react'

const items = [
    { id: 1, title: "Timeless Elegance", text: "Explore my portfolio of classic hairstyles that stand the test of time. From chic updos to sleek bobs, witness the beauty of timeless elegance.", image: "https://images.unsplash.com/photo-1482961674540-0b0e8363a005?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGNsYXNzaWMlMjBoYWlyJTIwbWFufGVufDB8fDB8fHww" },
    { id: 2, title: "Setting Trends, Defying Norms", text: "Explore my portfolio of classic hairstyles that stand the test of time. From chic updos to sleek bobs, witness the beauty of timeless elegance.", image: "https://plus.unsplash.com/premium_photo-1661377216104-2f95c81eb7fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29sb3JlZCUyMGhhaXIlMjBtYW58ZW58MHx8MHx8fDA%3D" },
    { id: 3, title: "Bridal Beauty Chronicles", text: "Explore my portfolio of classic hairstyles that stand the test of time. From chic updos to sleek bobs, witness the beauty of timeless elegance.", image: "https://images.unsplash.com/photo-1482961674540-0b0e8363a005?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGNsYXNzaWMlMjBoYWlyJTIwbWFufGVufDB8fDB8fHww" },
    { id: 4, title: "Color Symphony", text: "Explore my portfolio of classic hairstyles that stand the test of time. From chic updos to sleek bobs, witness the beauty of timeless elegance.", image: "https://plus.unsplash.com/premium_photo-1661377216104-2f95c81eb7fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29sb3JlZCUyMGhhaXIlMjBtYW58ZW58MHx8MHx8fDA%3D" },
]

const SingleSection = ({ item }: { item: any }) => {
    const ref: LegacyRef<HTMLDivElement> | undefined = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: ref })

    const y = useTransform(scrollYProgress, [0, 1], [100, -100])

    return (
        <section className='flex items-center justify-center overflow-hidden'>
            <div className="wrapper flex items-center gap-4">
                <div className='flex-1 flex justify-end' ref={ref}>
                    <Image className='rounded-lg' src={item.image} width={400} height={300} alt={item.title} />
                </div>
                <motion.div style={{ y }} className='flex-1'>
                    <h2 className='text-[28px] font-semibold mb-3'>{item.title}</h2>
                    <p>{item.text}</p>
                </motion.div>
            </div>
        </section>
    )
}

const Portfolio = () => {
    const ref: LegacyRef<HTMLDivElement> | undefined = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    })

    return (
        <div id='Portfolio' className='relative' ref={ref}>
            <div className='sticky top-0 left-0 right-0 p-12 text-center text-orange-500 text-[48px] font-semibold'>
                <h1>Featured Works</h1>
                <motion.div className='bg-white h-2 mt-2' style={{ scaleX }}></motion.div>
            </div>
            {items.map(item => <SingleSection key={item.id} item={item} />)}
        </div>
    )
}

export default Portfolio