import React from 'react'
import { InfiniteMovingImages } from './ui/tech'
import { tech } from '@/data'

function Technologies() {
  return (
    <div className="py-20" id="projects">
        <h1 className='heading'>
              My Mastery of  {' '}
            <span className='text-purple'>Development Tools</span>

        </h1>
        <div className='flex flex-col items-center'>
          <InfiniteMovingImages
              items={tech}
              direction="right"
              speed="normal"
          />
     </div>
    </div>
  )
}

export default Technologies