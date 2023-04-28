import React from 'react'
import Paragraph from './Paragraph'
import Image, { StaticImageData } from 'next/image'

type CardProps = {
  name: string,
  image: string | StaticImageData;
  content: string
}

const Card: React.FunctionComponent<CardProps> = ({ image, name, content}) => {
  return (
    <div className='mt-12'>
      <div className="w-[332.47px] h-[306.23px] bg-[#0C0E3F] rounded-[20px] relative flex items-center justify-center">
        <div className="w-[128.17px] h-[136.21px] rounded-full overflow-hidden absolute top-[-25%]">
          <Image src={image} alt="face" width={128.17} height={136.21} className="rounded-full grayscale"/>
        </div>
        <div className="flex flex-col items-center justify-center mt-20">
          <Paragraph size={'lg'}>{name}</Paragraph>
          <div className="mt-4 w-[332px] h-[105px] text-center px-1">
            <Paragraph>{content}</Paragraph>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card