import React from 'react'

function EmpowerWallet() {
    const features = [
        {
            title: "Send Payments",
            description:
                "Transfer funds globally with one tap. Fast, secure, and always reliable.",
            icon: "/Images/Svg/send_payments.svg",
        },
        {
            title: "Receive Funds",
            description:
                "Transfer funds globally with one tap. Fast, secure, and always reliable.",
            icon: "/Images/Svg/receive_funds.svg",
        },
        {
            title: "Convert Currency",
            description:
                "Transfer funds globally with one tap. Fast, secure, and always reliable.",
            icon: "/Images/Svg/convert_currency.svg",
        },
    ];




    return (
        <div className='text-center mt-10    lg:mt-20 mb-10'>
            <p className='text-[18px] md:text-[32px] lg:text-[40px] font-poppins  font-semibold  text-black'>Empower your wallet</p>
            <p className='text-md  md:text-lg mt-3 m-auto font-poppins max-w-[1000px]  font-normal text-[#000000CC]'>Empower your wallet with seamless access to payments, currency management, and smart conversions, all in one easy-to-use platform.</p>
            <div className="flex relative mt-6 flex-col md:flex-row gap-6  justify-center items-start">
                <img className=" hidden lg:block absolute lg:w-[68%] xl:w-[59%] -bottom-2 lg:left-[68%] xl:left-[65%] -translate-x-1/2  z-0 " src="/Images/Png/curveline.png" alt="curveline" />
                <button className="border pointer absolute lg:right-[5%] xl:right-[10%] sm:-bottom-24 hidden  md:flex      md:-bottom-0  xl:-bottom-4  text-black border-black  md:px-2 md:py-2 lg:px-5 lg:py-3 px-5 py-3  font-poppins rounded-full sm:text-lg md:text-[10px] lg:text-sm font-medium  items-center gap-1 ">
                    Explore More Features <span>→</span>
                </button>
                {features.map((feature, index) => {

                    const staggerClass =
                        index === 0 ? "md:mt-24" : index === 1 ? "md:mt-12" : "sm:mt-0";

                    return (
                        <div
                            key={index}
                            className={`bg-[#f7f6fd] rounded-xl text-center p-6 shadow-md w-full md:w-[360px] transition-all duration-300 ${staggerClass}`}
                        >

                            <div className="bg-[#6252f1] p-4 rounded-lg inline-block mb-4">
                                <img src={feature.icon} alt={feature.title} className="w-6 h-6" />
                            </div>
                            <hr className='-mx-6 my-8 w-[calc(100%+3rem)] border-[1.22px] border-[#9797974D] bg-white  ' />
                            <h3 className="font-medium sm:text-xl md:text-xl  lg:text-2xl text-black font-poppins mt-5 mb-2">{feature.title}</h3>
                            <p className="font-normal sm:text-md  md:text-md  lg:text-lg font-poppins text-[#00000099]">{feature.description}</p>

                        </div>

                    );
                })}
            </div>

        </div>
    )
}

export default EmpowerWallet