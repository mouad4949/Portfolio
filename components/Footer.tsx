import React from 'react'
import Contact from './ui/contact'



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
</footer>


  )
}

export default Footer