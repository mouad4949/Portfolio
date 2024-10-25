import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

function Grid() {
  return (
    <section id="about">
      <h1 className='heading mb-12'>
            About {' '}
            <span className='text-purple'>Me</span>

        </h1>
        <BentoGrid>
           {gridItems.map((item)=>(
            <BentoGridItem
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.className}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
            />
           ))} 
        </BentoGrid>
        
    </section>
  )
}

export default Grid