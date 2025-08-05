import React from 'react'
import { useState , useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi"; 

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);

            // Auto-close mobile menu if user resizes to desktop
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };
    })
    return (
        <div className="bg-white  rounded-3xl  md:rounded-full shadow-lg mt-2 px-6 py-5 flex items-center justify-between relative">
            {/* Logo */}
            <div>
                <img src="/Images/Svg/logo.svg" alt="Mainlogo" className="h-8" />
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4 bg-[#6061F714] px-4 py-2 rounded-full  md:mx-1 lg:mx-4">
                {["Home", "Features", "Regions", "FAQs"].map((item, idx) => (
                    <a
                        key={idx}
                        href="#"
                        className="text-[#102A53]  text-[18px]  md:text-[14px] xl:text-[18px] font-semibold font-poppins hover:text-[#6B4EFF] mx-4"
                    >
                        {item}
                    </a>
                ))}
            </div>

            {/* Buttons */}
            <div className="hidden md:flex items-center space-x-3">
                <button className="border text-black border-black  md:px-2 md:py-2 px-5 py-3   lg:px-5 lg:py-3  rounded-full font-poppins sm:text-lg md:text-[10px] lg:text-sm font-medium hover:bg-[#6061F7] hover:text-white hover:border-none">
                    Get Started
                </button>
                <button className="border text-black border-black  md:px-2 md:py-2 lg:px-5 lg:py-3 px-5 py-3  font-poppins rounded-full sm:text-lg md:text-[10px] lg:text-sm font-medium flex items-center gap-1 hover:bg-[#6061F7] hover:text-white hover:border-none">
                    Contact us <span>→</span>
                </button>
            </div>

            {/* Mobile Hamburger Icon */}
            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? (
                        <HiX className="text-3xl text-black" />
                    ) : (
                        <HiMenuAlt3 className="text-3xl text-black" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute md:hidden top-[72%] left-0 w-full bg-white shadow-lg rounded-b-3xl z-50 py-6 transition-all duration-300">
                    <nav className="flex flex-col items-center space-y-4">
                        {["Home", "Features", "Regions", "FAQs"].map((item, idx) => (
                            <a
                                key={idx}
                                href="#"
                                className="text-[#102A53] text-[18px] font-semibold font-poppins hover:text-[#6B4EFF]"
                            >
                                {item}
                            </a>
                        ))}
                        <button className="mt-4 w-[80%] border text-black border-black px-5 py-3 rounded-full font-poppins text-sm font-medium hover:bg-[#6061F7] hover:text-white hover:border-none">
                            Get Started
                        </button>
                        <button className="w-[80%] border text-black border-black px-5 py-3 font-poppins rounded-full text-sm font-medium flex items-center justify-center gap-1 hover:bg-[#6061F7] hover:text-white hover:border-none">
                            Contact us <span>→</span>
                        </button>
                    </nav>
                </div>
            )}
           
        </div>
    )
}


export default Navbar