import React from 'react'
import { Link } from 'react-scroll';
import { FaWhatsapp } from "react-icons/fa";

const MobileNav = ({setIsActive}) => {
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

    const openWhatsApp = () => {
        // Replace '1234567890' with the phone number you want to open WhatsApp chat with
        const phoneNumber = '+27655820784';
        // Construct the WhatsApp URL with the phone number
        const url = `https://wa.me/${phoneNumber}`;
        // Open WhatsApp in a new tab
        window.open(url, '_blank');
    };

    return (
        <nav className='flex flex-col  gap-3 border-t-[1px] pt-6'>
            {links.map((link, index) => {
            return (
                <Link 
                    to={link.path} 
                    className='text-white pointer-events-auto text-[1.3rem] w-fit'
                    key={index}
                    smooth={true}
                    spy
                    offset={-50}
                    activeClass='active'
                    onClick={() => {
                        
                        setTimeout(() => {
                            setIsActive(false)
                        }, 2000)
                    }}
                >
                    {link.name}
                </Link>
            )
            })}
            <div 
                className='w-fit cursor-pointer flex pointer-events-auto items-center overflow-hidden bg-transparent'
                onClick={() => {
                    openWhatsApp()
                }}
            >
                    <FaWhatsapp className='text-[#ff0187] text-[3rem]'/>
            </div>
        </nav>
    )
}

export default MobileNav
