import React from 'react'

function Navbar() {
    return (
        <div className="bg-white  rounded-full shadow-lg mt-2 px-6 py-5 flex items-center justify-between  ">
          
            <div className="">
                <img src="/Images/Svg/logo.svg" alt="Mainlogo" />
            </div>
         
            <div className="flex items-center space-x-4 bg-[#6061F714] px-4 py-2 rounded-full mx-4">
                <a href="#" className="text-[#102A53] ms-[36px]  text-[18px] font-semibold font-poppins hover:text-[#6B4EFF]">
                    Home
                </a>
                <a href="#" className="text-[#102A53] mx-[50px]  text-[18px] font-semibold font-poppins hover:text-[#6B4EFF]">
                    Features
                </a>
                <a href="#" className="text-[#102A53] me-[50px]  text-[18px] font-semibold font-poppins hover:text-[#6B4EFF]">
                    Regions
                </a>
                <a href="#" className="text-[#102A53] me-[36px]  text-[18px] font-semibold font-poppins hover:text-[#6B4EFF]">
                    FAQs
                </a>
            </div>

            
            <div className="flex items-center space-x-3">
                <button className="border pointer text-black border-black   px-5 py-3 rounded-full font-poppins text-sm font-medium hover:bg-[#6061F7] hover:text-white hover:border-none">
                    Get Started
                </button>
                <button className="border text-black border-black pointer px-5 py-3 font-poppins rounded-full text-sm font-medium flex items-center gap-1 hover:bg-[#6061F7] hover:text-white hover:border-none">
                    Contact us <span>→</span>
                </button>
            </div>
        </div>

    )
}


export default Navbar