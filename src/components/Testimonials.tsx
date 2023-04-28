import React from 'react'
import Paragraph from '@/ui/Paragraph'
import Heading from '@/ui/LargeHeading'
import Card from '@/ui/Card'
import { face,face2 } from '@/assets'
import { testimonials } from '@/constants'


const Testimonials = () => {
  return (
    <div className="mt-24 flex flex-1 flex-col items-center justify-center">
        <Paragraph className='uppercase text-xl'>Testimonials</Paragraph>
        <Heading className="capitalize mt-3 mobile:w-[528px] h-[124px] w-[358px] text-center">read what others have to say</Heading>
        <div className="flex flex-1 mobile:flex-row flex-col gap-8 mobile:mt-12 mt-20">
          {testimonials.map((item) => (
            <Card image={face} name={item.name} content={item.content} key={item.id} />
          ))}
        </div>
    </div>
  )
}

export default Testimonials