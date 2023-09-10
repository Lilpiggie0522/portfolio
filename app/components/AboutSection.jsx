'use client'
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const AboutSection = () => {
    const [tab, setTab] = useState("skills")
    const [isPending, startTransition] = useTransition()
    const languages = ["C", "Java", "React.js", "Node.js", "Mysql"]
    const educations = ["UNSW", "RMIT"]
    const certificates = ["Accredited Engineer", "Bachelor in Engineering"]
    const TAB_DATA = [
        {
            title: "Skills",
            id: "skills",
            content: (
                <ul className='list-disc pl-2'>
                    {languages.map((language, index) => (
                        <li key={index}>{language}</li>
                    ))}
                </ul>
            )
        },

        {
            title: "Education",
            id: "education",
            content: (
                <ul className='list-disc pl-2'>
                    {educations.map((education, index) => (
                        <li key={index}>{education}</li>
                    ))}
                </ul>
            )
        },

        {
            title: "Experience",
            id: "experience",
            content: (
                <ul className='list-disc pl-2'>
                    {certificates.map((certificate, index) => (
                        <li key={index}>{certificate}</li>
                    ))}
                </ul>
            )
        },
    ]

    const HandleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }

  return (
    <section className='text-white' id='about'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src={'/images/about-image.png'} height={500} width={500}/>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About me</h2>
                <p className='text-base lg:text-lg'>
                    I am a full stack developer with a passion for web applications.
                </p>
                <div className='flex flex-row mt-8 justify-start'>
                    <TabButton selectTab={() => HandleTabChange('skills')} active={tab === 'skills'}>Skills</TabButton>
                    <TabButton selectTab={() => HandleTabChange('education')} active={tab === 'education'}>Education</TabButton>
                    <TabButton selectTab={() => HandleTabChange('experience')} active={tab === 'experience'}>Experience</TabButton>
                    {/* <span className='mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500'>Skills</span>
                    <span>Education</span>
                    <span>Experience</span> */}
                </div>

                <div className='mt-8'>
                    {TAB_DATA.find((t) => t.id === tab).content}
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection