import React from 'react'
import Paragraph from '@/ui/Paragraph'
import { featuredOn } from '@/constants'
import Image from 'next/image'
import { fastCompany, techCrunch, forbes, cnbc } from '@/assets';

const Featured = () => {
  return (
    <div>
        <div className="mt-4">
            <Paragraph className="text-xl font-semibold">Featured On</Paragraph>
        </div>
        <div className="flex flex-1 mt-6 mobile:h-[120px] h-[622px] py-2 rounded-[7px] bg-featuredBg">
            <div className="flex flex-1 flex-wrap item-center justify-between px-8 py-1">
                <Image src={techCrunch} alt="techcrunch's logo"  width={259} height={81} />
                <Image src={fastCompany} alt="fast company's logo" width={231} height={35} />
                <Image src={forbes} alt="forbes' logo" width={176} height={36} />
                <Image src={cnbc} alt="business insider's logo" width={126} height={1} />
            </div>
        </div>
    </div>
  )
}

export default Featured