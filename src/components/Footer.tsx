import React from 'react'
import { footerLinks } from '@/constants'
import Paragraph from './ui/Paragraph'
import { Button } from './ui/Button'

const Footer = () => {
  return (
    <div className="mt-24 flex mobile:flex-row flex-col px-2 gap-24 mb-8">
        <h1 className="text-xl font-bold uppercase mobile:order-1 order-2">Krypto</h1>
        <div className="flex flex-1 items-center justify-between mobile:order-2 order-3">
          <ul className="flex flex-1 flex-row justify-between">
            {footerLinks.map((link, index) => (
              <li key={index}>
                <Paragraph size={'lg'}>{link.title}</Paragraph>
                <ul className="mt-8">
                  {link.links.map((link, index) => (
                    <li key={index} className="mt-2">
                      <a href={link.link}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div className="mobile:order-3 order-1">
          <Paragraph className="capitalize font-semibold text-2xl px-4">join our newsletter</Paragraph>
          <div className="w-[345px] h-[64px] bg-[#0C0E3F] rounded-[31px] flex mobile:flex-1 mobile:flex-row flex-col items-center justify-between px-2 mt-6">
            <input type="text" placeholder="Email address" className="flex mobile:flex-1 py-2 px-4 rounded-l-[31px] mobile:rounded-r-[0] rounded-r-[31px] w-full mobile:mt-0 mt-3 bg-transparent border-none" />
            <Button variant={'dark'} size={'sm'} className="text-lg font-normal w-[115px] mobile:h-[45.84px] h-[60px] rounded-[31px] hover:rounded-r-[31px] hover:rounded-l-none mobile:mt-0 mt-12">Submit</Button>
          </div>
        </div>
    </div>
  )
}

export default Footer