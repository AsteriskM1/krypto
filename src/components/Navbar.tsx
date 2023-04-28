"use client"

import { navLinks } from '@/constants'
import Image from 'next/image'
import React, { useState } from 'react'
import { close, menu } from '@/assets'

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false)
  return (
    <nav className="flex flex-1 flex-row items-center justify-between">
        <h1 className="text-xl font-bold uppercase">Krypto</h1>
        <div className="sm:flex hidden">
          <ul className="flex flex-row items-center justify-center px-4">
            {navLinks.map((item, index) => (
              <li
                key={item.id}
                className={`text-xl ml-12`}
              >
                <a href={`#${item.id}`}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="sm:hidden flex flex-1 justify-end items-center">
            <Image 
              src={toggle ? close : menu}
              alt="menu"
              width={28}
              height={28}
              className="object-contain"
              onClick={() => setToggle((prev) => !prev)}
            />

            <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
              <ul className="list-none flex flex-col justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mb-0' : 'mb-10'}`}
                  >
                    <a href={`#${nav.id}`}>
                      {nav.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar