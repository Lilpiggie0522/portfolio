import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import GithubIcon from '@/public/github-icon.svg'
import LinkedinIcon from '@/public/linkedin-icon.svg'
import CopyToClip from './CopyToClip'

const Connect = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>

        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>

        <p className='text-[#ADB7BE] mb-4 max-w-md font-bold text-sm'>
          Please note that the following Linkedin
          Icon does not work as I have no Linkedin profile and have no intention
          to make one.
        </p>
        <div className='text-white mb-4 max-w-md text-md font-bold'>
          <CopyToClip textToCopy={'pengtuzhang@gmail.com'}/>
        </div>
      
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Lilpiggie0522">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://linkedin.com">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Connect