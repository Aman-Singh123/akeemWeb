import React from 'react'
import { countries } from '../../assets/flag'




function Hero({ activeTab }) {
    return (
        <div className=" bg-[#6061F7] mt-[25px] text-white flex flex-col items-center justify-center rounded-3xl p-6">
            <div className="text-center">
                <span className="px-4 py-2 text-[12.5px] font-medium font-poppins mt-[50px] lg:mt-[137px] bg-white text-[#112B53] rounded-full mb-4 inline-block">
                    Built for Speed. Trusted for Security
                </span>
                {activeTab === "individual" ? <h1 className=" text-[16px] md:text-[50px]  lg:text-[64px] mt-[21px] font-poppins font-normal leading-tight text-white">
                    Send & Receive Money <br />
                    <span className="flex justify-center items-center gap-2">
                        Instantly with
                        <img
                            src="/Images/Svg/logo-white.svg"
                            alt="Akeem Logo"
                            className="w-auto  h-[20px] md:h-[48px]    lg:h-[64px]"
                        />
                    </span>
                </h1> :

                    <h1 className=" text-[16px] md:text-[40px]  lg:text-[64px] mt-[21px] font-poppins font-normal leading-tight text-white">
                        Revolutionary Bill  <br />
                        <span className="flex justify-center items-center gap-2">
                            Payments With
                            <img
                                src="/Images/Svg/logo-white.svg"
                                alt="Akeem Logo"
                                className="w-auto  h-[20px] md:h-[48px]    lg:h-[64px]"
                            />
                        </span>
                    </h1>
                }
                <p className="mb-6 text-sm text-white font-normal font-poppins mt-[30px]">
                    Your secure, borderless wallet powered by the Akeem Coin. Fast. <br /> Simple. Global.
                </p>
                {activeTab === 'individual' ? <div className="space-x-4 flex items-center justify-center ">
                    <button className="text-white border  border-white px-2 py-2   md:px-6 md:py-3 rounded-full font-medium hover:bg-white hover:text-black  transition">
                        Create Wallet
                    </button>
                    <button className="border border-white px-2 py-2  md:px-6 md:py-3 rounded-full font-medium hover:bg-white hover:text-black transition">
                        Learn More
                    </button>
                </div> : <div className="space-x-4 flex items-center justify-center ">
                    <button className="text-white border  border-white px-2 py-2   md:px-6 md:py-3 rounded-full font-medium hover:bg-white hover:text-black  transition">
                        Enterprise Setup
                    </button>
                    <button className="border border-white px-2 py-2  md:px-6 md:py-3 rounded-full font-medium hover:bg-white hover:text-black transition">
                        Learn More
                    </button>
                </div>}
            </div>


            <div className=" mt-12  md:mt-28  lg:mt-48 w-full max-w-lg   md:h-64">
                <div className="relative  hidden lg:flex inset-0  justify-center items-center ">
                    <div className="lg:w-40 lg:h-40  w-24 h-24 bg-white z-3 text-black flex items-center justify-center font-bold text-xl rounded-full shadow-lg">
                        <img src="/Images/Svg/logoblue.svg" alt="bluelogo" />
                    </div>
                    <img className='absolute   right-[-32%] top-[-48%]  lg:top-[-10%] ' src="/Images/Png/linegroupright.png" alt="linegroupright" />
                    <img className='absolute left-[-32%]  top-[-48%] lg:top-[-10%]    ' src="/Images/Png/linegroupleft.png" alt="linegroupleft" />

                    <div className="w-16 h-16 bg-white right-[17%] top-[-63%]  lg:right-[12%] lg:top-[-36%] absolute z-3 text-black flex items-center justify-center font-bold text-xl rounded-full shadow-lg">
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
                <div className='lg:hidden '>
                    <img src="/Images/Png/countrygrp.png" alt="Country" />
                </div>

            </div>
        </div>
    )
}

export default Hero