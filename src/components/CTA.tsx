import React from 'react'
import Paragraph from './ui/Paragraph'
import { cta } from '@/constants';
import Heading from './ui/LargeHeading';
import { Button } from './ui/Button';

const CTA = () => {
    const [{prompt, title, button}] = cta
  return (
    <div className="mt-28">
        <div className="flex flex-1 flex-col h-[350px] bg-cta-gradient rounded-[30px] items-center justify-center" style={{ marginLeft: 0, marginRight: 0 }}>
            <Paragraph className="text-black uppercase font-semibold mb-6">{prompt}</Paragraph>
            <Heading className="capitalize mobile:w-[475px] w-[320px] text-center mobile:mt-2 mt-1">{title}</Heading>
            <Button variant={'dark'} className='mt-8 w-[244.49px] h-[66.66px]'>{button}</Button>
        </div>
    </div>
  )
}

export default CTA