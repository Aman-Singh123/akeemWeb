import React from 'react'
import { countries } from '../../assets/flag'




function Hero() {
    return (
        <div className=" bg-[#6061F7] mt-[25px] text-white flex flex-col items-center justify-center rounded-3xl p-6">
            <div className="text-center">
                <span className="px-4 py-2 text-[12.5px] font-medium font-poppins mt-[137px] bg-white text-[#112B53] rounded-full mb-4 inline-block">
                    Built for Speed. Trusted for Security
                </span>
                <h1 className="text-[40px] md:text-[64px] mt-[21px] font-poppins font-normal leading-tight text-white">
                    Send & Receive Money <br />
                    <span className="flex items-center gap-2">
                        Instantly with
                        <img
                            src="/Images/Svg/logo-white.svg"
                            alt="Akeem Logo"
                            className="w-auto h-[48px] md:h-[64px]"
                        />
                    </span>
                </h1>
                <p className="mb-6 text-sm text-white font-normal font-poppins mt-[30px]">
                    Your secure, borderless wallet powered by the Akeem Coin. Fast. <br /> Simple. Global.
                </p>
                <div className="space-x-4">
                    <button className="text-white border border-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-black  transition">
                        Create Wallet
                    </button>
                    <button className="border border-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-black transition">
                        Learn More
                    </button>
                </div>
            </div>


            <div className="mt-48 w-full max-w-lg h-64">
                <div className="relative inset-0 flex justify-center items-center">
                    <div className="w-40 h-40 bg-white z-3 text-black flex items-center justify-center font-bold text-xl rounded-full shadow-lg">
                        <img src="/Images/Svg/logoblue.svg" alt="bluelogo" />
                    </div>
                    <img className='absolute right-[-32%] top-[-10%]' src="/Images/Png/linegroupright.png" alt="linegroupright" />
                    <img className='absolute left-[-32%] top-[-10%]' src="/Images/Png/linegroupleft.png" alt="linegroupleft" />

                    <div className="w-16 h-16 bg-white right-[12%] top-[-36%] absolute z-3 text-black flex items-center justify-center font-bold text-xl rounded-full shadow-lg">
                        <img src="/Images/Svg/nigeria.svg" alt="nigeriaFlag" />
                    </div>
                    <div className="w-16 h-16 bg-white right-[-4%] top-[66%] absolute z-3 text-black flex items-center justify-center font-bold text-xl rounded-full shadow-lg">
                        <img src="/Images/Svg/africa.svg" alt="africaFlag" />
                    </div>
                    <div className="w-16 h-16 bg-white right-[-30%] absolute top-[-26%] z-3 text-black flex items-center justify-center font-bold text-xl rounded-full shadow-lg">
                        <img src="/Images/Svg/canada.svg" alt="canadaFlag" />
                    </div>
                    <div className="w-16 h-16 absolute right-[-38%] bg-white z-3 text-black flex items-center justify-center font-bold text-xl rounded-full shadow-lg">
                        <img src="/Images/Svg/pak.svg" alt="pakistanflag" />
                    </div>

                    <div className="w-16 h-16 absolute left-[-38%] bg-white z-3 text-black flex items-center justify-center font-bold text-xl rounded-full shadow-lg">
                        <img src="/Images/Svg/canada.svg" alt="canadaflag" />
                    </div>

                    <div className="w-16 h-16 bg-white left-[-4%] top-[66%] absolute z-3 text-black flex items-center justify-center font-bold text-xl rounded-full shadow-lg">
                        <img src="/Images/Svg/australia.svg" alt="australiaFlag" />
                    </div>

                    <div className="w-16 h-16 bg-white left-[12%] top-[-36%] absolute z-3 text-black flex items-center justify-center font-bold text-xl rounded-full shadow-lg">
                        <img src="/Images/Svg/africa.svg" alt="africaFlag" />
                    </div>


                    <div className="w-16 h-16 bg-white left-[-30%] absolute top-[-26%] z-3 text-black flex items-center justify-center font-bold text-xl rounded-full shadow-lg">
                        <img src="/Images/Svg/india.svg" alt="indiaFlag" />
                    </div>
                    
                    


                </div>

            </div>
        </div>
    )
}

export default Hero