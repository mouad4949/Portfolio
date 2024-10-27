import React from 'react'
import { InfiniteMovingImages } from './ui/tech'
import { dep} from '@/data'

function Deployment() {
  return (
    <div className="py-20" id="projects">
        <h1 className='heading'>
            My Experience with {' '}
            <span className='text-purple'>Deployment Tech</span>

        </h1>
        <div className='flex flex-col items-center'>
          <InfiniteMovingImages
              items={dep}
              direction="left"
              speed="slow"
          />
     </div>
    </div>
  )
}

export default Deployment