import Image from 'next/image'
import React from 'react'
import Sidebar from './Sidebar'

const Navbar = () => {
    return (
        <div>
            <Sidebar />
            <div className='wrapper flex items-center justify-between h-[100px]'>
                <span className='font-bold'>Contrast & Harmony</span>
                <div className='flex items-center gap-3'>
                    <a href='#'>
                        <Image src="/images/facebook.png" width={18} height={18} alt='Facebook Icon' />
                    </a>
                    <a href='#'>
                        <Image src="/images/instagram.png" width={18} height={18} alt='Instagram Icon' />
                    </a>
                    <a href='#'>
                        <Image src="/images/youtube.png" width={18} height={18} alt='Youtube Icon' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar