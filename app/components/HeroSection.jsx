"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 lg:grid-cols-12 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className='text-white mb-4 lg:text-6xl sm:text-5xl text-4xl font-extrabold'>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from from-purple-400 to-pink-600">Hello, I am </span>
                    <br/>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Piggie',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'a Web Developer.',
                            1000,
                            'a Software Developer.',
                            1000,
                            'a Student at UNSW.',
                            1000
                        ]}
                        wrapper="span"
                        speed={10}
                        repeat={Infinity}
                    />
                </h1>
                <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                    Second year Computer Science student at UNSW, currently exploring the world.
                </p>
                {/* <div>
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-black'>Hire Me</button>
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3'>Download CV</button>
                </div> */}
            </div>
            <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[310px] lg:h-[310px] relative">
                    <Image
                        src="/images/piggie.JPG"
                        alt='hero image'
                        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full'
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
    </section>
    
  )
}

export default HeroSection