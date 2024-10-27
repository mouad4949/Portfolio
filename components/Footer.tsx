import React from 'react'
import Contact from './ui/contact'
import { socialMedia } from '@/data'




const Footer = () => {
  return (
    <footer className='w-full pt-8' id="contact">
    <div className='w-full absolute left-0'>
        <img src="/footer-grid.svg" alt="grid" className='w-full h-full opacity-50'/>
    </div>
    <div className='flex flex-col items-center gap-y-4'>
        <h1 className='heading lg:max-w-[45vw] mb-0'>
            Ready to take <span className='text-purple'>your</span> digital presence to the next level?
        </h1>
        <p className='text-white-100 md:mt-0 text-center mb-0'>
            Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
        </p>
    </div>

    <div className='mt-4 mb-0'>
        <Contact />
    </div>
    <div className='flex mt-16 md:flex-row flex-col justify-between items-center my-32'>
        <p className='md:text-base text-sm md:font-normal '>Copyright © 2024 MMR</p>
        <div className='flex items-center md:gap-3 gap-6 '>
            {socialMedia.map((profile)=>
                <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 my-6 '>
                   <a href={profile.link} target="_blank" rel="noopener noreferrer">
                    <img src={profile.img} alt={profile.link} width={20} height={20}/>
                    </a>
                </div>
            )}

        </div>
    </div>
</footer>


  )
}

export default Footer