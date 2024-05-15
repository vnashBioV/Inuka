'use client'
import Image from 'next/image';
import React from 'react'
import { IoSearchOutline } from "react-icons/io5";

//framer motion
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

const MostPopular = () => {

  const openWhatsApp = () => {
    // Replace '1234567890' with the phone number you want to open WhatsApp chat with
    const phoneNumber = '+27655820784';
    // Construct the WhatsApp URL with the phone number
    const url = `https://wa.me/${phoneNumber}`;
    // Open WhatsApp in a new tab
    window.open(url, '_blank');
  };

  return (
    <div className='container md:px-0 px-6 mx-auto bg-white relative' id="products">
        <motion.div 
          variants={fadeIn('up', 0)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}} 
          className='w-full flex justify-center items-center'
        >
          <p className='font-bold text-center md:text-[3rem] text-[2rem]'>
            Popular Products
          </p>
        </motion.div>
        <div 
          className='w-full mt-6 md:flex-row flex-col flex justify-between items-center'
        >
          <motion.div 
            className='flex flex-col gap-2 h-[450px] md:w-[19%] md:mb-0 mb-6 w-full'
            variants={fadeIn('up', 0)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
          >
            <div className='w-full flex justify-center items-center h-[65%] rounded-xl bg-[#F6F6F6]'>
              <Image src="/perfume.png" width={258} height={515} alt="perfume" className='w-[33%] h-full object-contain'/>
            </div>
            <div className='w-full flex justify-center items-center'>
              <p className='font-[600] text-[1.4rem]'>
                Perfume
              </p>
            </div>
            <div className='w-full flex justify-center items-center'>
              <p className='font-[700] text-[1.8rem]'>
                R190
              </p>
            </div>
            <div className='w-full flex justify-center items-center'>
              <div
                className='bg-[#EB0925] cursor-pointer font-[600] text-white rounded-xl h-[2.8rem] text-[1rem] flex justify-center items-center w-[9rem]'
                onClick={() => {
                  openWhatsApp();
                }}
              > 
                Buy Now
              </div>
            </div>
          </motion.div>
          <motion.div 
            className='flex flex-col gap-2 h-[450px] md:w-[19%] md:mb-0 mb-6 w-full'
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
          >
            <div className='w-full flex justify-center items-center h-[65%] rounded-xl bg-[#F6F6F6]'>
              <Image src="/liquid.svg" width={203} height={104} alt="perfume" className='w-[80%] h-full object-contain'/>
            </div>
            <div className='w-full h-[60px] flex justify-center items-center'>
              <p className='font-[600] text-[1.4rem]'>
                Liquid Lipstick
              </p>
            </div>
            <div className='w-full flex justify-center items-center'>
              <p className='font-[700] text-[1.8rem]'>
                R125
              </p>
            </div>
            <div className='w-full flex justify-center items-center'>
              <div
                className='bg-[#EB0925] cursor-pointer font-[600] text-white rounded-xl h-[2.8rem] text-[1rem] flex justify-center items-center w-[9rem]'
                onClick={() => {
                  openWhatsApp();
                }}
              > 
                Buy Now
              </div>
            </div>
          </motion.div>
          <motion.div 
            className='flex flex-col gap-2 h-[450px] md:w-[19%] md:mb-0 mb-6 w-full'
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
          >
            <div className='w-full flex justify-center items-center h-[65%] rounded-xl bg-[#F6F6F6]'>
              <Image src="/hair.svg" width={203} height={149} alt="perfume" className='w-[90%] h-full object-contain'/>
            </div>
            <div className='w-full h-[60px] flex justify-center items-center'>
              <p className='font-[600] text-center text-[1.4rem]'>
                Hair Growth Oil and Hair food
              </p>
            </div>
            <div className='w-full flex justify-center items-center'>
              <p className='font-[700] text-[1.8rem]'>
                R220
              </p>
            </div>
            <div className='w-full flex justify-center items-center'>
              <div
                className='bg-[#8B655A] cursor-pointer font-[600] text-white rounded-xl h-[2.8rem] text-[1rem] flex justify-center items-center w-[9rem]'
                onClick={() => {
                  openWhatsApp();
                }}
              > 
                Buy Now
              </div>
            </div>
          </motion.div>
          <motion.div 
            className='flex flex-col gap-2 h-[450px] md:w-[19%] md:mb-0 mb-6 w-full'
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
          >
            <div className='w-full flex justify-center items-center h-[65%] rounded-xl bg-[#F6F6F6]'>
              <Image src="/lotion.svg" width={121} height={168} alt="perfume" className='w-[43%] h-full object-contain'/>
            </div>
            <div className='w-full h-[60px] flex justify-center items-center'>
              <p className='font-[600] text-[1.4rem]'>
                Perfume and Lotion
              </p>
            </div>
            <div className='w-full flex justify-center items-center'>
              <p className='font-[700] text-[1.8rem]'>
                R320
              </p>
            </div>
            <div className='w-full flex justify-center items-center'>
              <div
                className='bg-[#69839E] cursor-pointer font-[600] text-white rounded-xl h-[2.8rem] text-[1rem] flex justify-center items-center w-[9rem]'
                onClick={() => {
                  openWhatsApp();
                }}
              > 
                Buy Now
              </div>
            </div>
          </motion.div>
        </div>
    </div>
  )
}

export default MostPopular
