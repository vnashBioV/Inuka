'use client'
import React from 'react';
import { Link } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';
import NextLink  from 'next/link';
import { FaWhatsapp } from "react-icons/fa";

import { useRouter } from 'next/navigation'
import Image from 'next/image';

// Array of link items
const links = [
    {
        path: 'home',
        name: 'Home',
    },
    {
        path: 'products',
        name: 'Products',
    },
];


const Nav = ({containerStyles, linkStyles}) => {
    // Media query hook to determine if it's desktop or not
    const isDesktop = useMediaQuery({
        query: '(min-width: 1310px)',
    });

    const openWhatsApp = () => {
      // Replace '1234567890' with the phone number you want to open WhatsApp chat with
      const phoneNumber = '+27655820784';
      // Construct the WhatsApp URL with the phone number
      const url = `https://wa.me/${phoneNumber}`;
      // Open WhatsApp in a new tab
      window.open(url, '_blank');
    };

    const router = useRouter()

    return (
      <nav className={`${containerStyles}`}>
        <div className='flex justify-between items-center gap-3'>
          {links.map((link, index) => {
            return (
                <Link
                    to={link.path} 
                    className={`${linkStyles} cursor-pointer ml-[1rem] font-[400] text-black hover:tracking-wide text-[.9rem] hover:text-[#ff0187] hover:font-bold transition-all duration-300`}
                    key={index}
                    smooth={!isDesktop ? false : true}
                    spy
                    offset={-50}
                    activeClass='active'
                >
                  {link.name}
                </Link>
            )
          })}
        </div>

        <div 
          className='ml-[2.5rem] w-fit cursor-pointer flex justify-center items-center overflow-hidden bg-transparent'
          onClick={() => {
            openWhatsApp()
          }}
        >
            <FaWhatsapp className='text-[#ff0187] text-[3rem]'/>
        </div>
      </nav>
    );
  };

export default Nav;
