'use client'
import React from 'react'
import Link from 'next/link'
import { FaBagShopping } from "react-icons/fa6";
import Image from 'next/image';

//framer motion
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

const Hero = () => {
  const openWhatsApp = () => {
    // Replace '1234567890' with the phone number you want to open WhatsApp chat with
    const phoneNumber = '+27655820784';
    // Construct the WhatsApp URL with the phone number
    const url = `https://wa.me/${phoneNumber}`;
    // Open WhatsApp in a new tab
    window.open(url, '_blank');
  };
  return (
    <div 
      className='container md:px-0 px-6 md:flex-row flex-col flex justify-between md:h-[690px] h-fit mx-auto'
      id='home'
    >
      <motion.div 
        className='md:w-[50%] w-full md:pb-[5rem] flex md:mt-0 mt-16 md:items-end justify-center flex-col h-full'
        variants={fadeIn('right', 0)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}} 
      >
        <div className='flex flex-col gap-7 justify-end w-[90%]'>
          <h3 className='md:text-[4rem] text-[3rem] font-[600] leading-[71px]'>Inuka Products brought <br  className='xl:flex hidden'/> <span className='text-[#ff0187]'>to you by Priscilla</span></h3>
          <p className='text-[1.4rem] mt-6'>
            Nothing grabs attention like scent... <br className='xl:flex hidden'/> Smell amazing with Inuka Perfumes for <b>R195</b> each
          </p>
          <Link
            href="#"
            alt=""
            className='bg-[#ff0187] hover:bg-[#dd7eb1] transition-all duration-300 font-[700] text-white rounded-xl h-[3.7rem] mt-4 text-[1.1rem] flex justify-center items-center w-[12rem]'
            onClick={() => {
              openWhatsApp();
            }}
          > 
            Order Now
          </Link>
        </div>
      </motion.div>

      <motion.div 
        className='md:w-[50%] w-full flex justify-center items-center md:h-full h-[500px]'
        variants={fadeIn('left', 0)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}} 
      >
          <div className='
                h-full 
                flex 
                relative
                justify-center 
                items-center 
                w-[100%] 
                mx-w-[50%]
                
              '
          >
              <Image 
                src="/hero.svg" 
                width={568} 
                height={528} 
                alt="hero -image" 
                className='w-[80%] h-[100%] object-contain'
              />
          </div>
      </motion.div>
    </div>
  )
}

export default Hero
