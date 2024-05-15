'use client'
import React from 'react'
import { MdMarkEmailRead } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import Image from 'next/image';

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className='w-full rounded-tl-[45px] rounded-tr-[45px] bg-[#9A2F67] mt-[10rem]'>
      <div className='w-full md:px-0 px-6 container mx-auto flex md:flex-row flex-col justify-between py-10 items-center'>
        <div className='md:w-[50%] md:mt-0 mt-12 w-full relative'>
          <Image src="/quote-left.svg" alt='' width={43} height={43} className='absolute md:left-[-7%] left-[-3%] right-0 bottom-0 top-[-20%]'/>
          <p className='text-[1.5rem] text-white font-[300]'>
              Stay beautiful and glowing with Inuka products, 
              crafted to enhance your natural radiance and boost 
              your confidence. Our range of exquisite perfumes 
              captures your unique essence, while our nourishing 
              skincare line keeps your skin healthy and vibrant. 
          </p>
        </div>
        <div className='md:w-[40%] md:mt-0 mt-6 w-full h-[350px]'>
          <Image src="/footer.png" alt='' width={650} height={433} className='w-full h-full object-contain'/>
        </div>
      </div>
      <div className='container mx-auto h-[50px] flex flex-col xl:flex-row xl:mb-0 mb-4 justify-between gap-4 items-center'>
        <p className='text-white text-[.85rem]'>Copyright © {date} inukapriscilla All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer
