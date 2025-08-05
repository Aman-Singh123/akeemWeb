import React from 'react'

function Everyregion() {
    return (
        <div className=" bg-[#6061F714] mt-[25px]  rounded-3xl pt-5 px-5  lg:pt-20  pb-0 lg:px-28">
            <p className=' text-[18px] md:text-[32px] lg:text-[40px] font-poppins  font-semibold  text-black'>Akeem in Every Region</p>
            <p className='text-md  md:text-lg font-poppins  font-normal   text-black'>Akeem brings secure money movement to every active region, with fast access, local currency, and no compromises.</p>
            <div className="w-full overflow-auto  mt-16">
                <img
                    src="/Images/Png/everyregion.png"
                    alt="everyregionmap"
                    className="w-full  h-auto object-cover"
                />
            </div>
        </div>
    )
}

export default Everyregion