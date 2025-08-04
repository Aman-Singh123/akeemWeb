import React from 'react'
import { PieChart, Pie, Cell } from "recharts";

const data = [
    { name: "United States", value: 28.4 },
    { name: "Canada", value: 16.7 },
    { name: "Mexico", value: 37.9 },
    { name: "Other", value: 17.0 },
];

const COLORS = ["#2b2b2b", "#98c1ff", "#a3e4bb", "#dce1f9"];

function Ourfeatures() {
    return (
        <div className='mt-20 text-center'>
            <p className='text-[40px] font-poppins  font-semibold  text-black'>Our Features</p>
            <p className='text-lg font-poppins  font-normal   text-black'>Built for Real Life. Trusted in Every Transaction. Your money, your terms, no friction, just precision.</p>
            <div className="flex flex-col md:flex-row gap-6 p-20">

                <div className="md:w-1/2 relative">
                    <img src="Images/Png/card.png" alt="User Talking" className="rounded-xl object-cover w-full h-full" />
                    {/* <div className="absolute top-6 right-6 bg-white shadow-lg rounded-xl p-4 w-60">
                        <p className="text-gray-400 text-sm">Capital advance</p>
                        <p className="text-2xl font-bold">$75,000</p>
                        <p className="text-green-500 text-sm font-semibold">✓ Approved</p>
                        <div className="mt-2 text-sm text-gray-500">
                            <p>Settlement date<br/><span className="text-black font-medium">12 Aug 2025</span></p>
                            <p className="mt-2">Fixed fee<br/><span className="text-black font-medium">$18,750</span></p>
                            <p className="mt-2 text-blue-600">+ 3.00</p>
                        </div>
                    </div>
                    <div className="absolute bottom-6 left-6 bg-white shadow-lg rounded-xl p-4 w-60">
                        <p className="text-sm text-gray-500">Payment volume</p>
                        <p className="text-xl font-semibold">$20,450</p>
                        <p className="text-green-600 font-semibold mt-1">▲ Increase 10%</p>
                    </div> */}
                </div>


                <div className="md:w-1/2 flex flex-col gap-4">
                    <div className="shadow-[0px_4px_27.8px_0px_#00000026] bg-[#6061F714] rounded-xl p-6">
                        <h3 className="text-2xl ms-0 text-left mt-3  me-0 font-semibold font-inter text-black mb-2">Global Personal Payout Dashboard</h3>
                        <p className="text-lg text-left ms-0 me-0 font-light font-inter text-black mb-4">Send money anywhere in seconds using our easy-to-use  dashboard, built-in ID verification.</p>

                        <div className="bg-white p-3 rounded-xl shadow-md w-full flex flex-col md:flex-row items-start gap-6">
                            <div className="flex items-center gap-2 w-full md:w-1/3">
                                <img src="/Images/Svg/tick.svg" alt="rightSign" />
                                <p className="text-sm text-left font-medium text-gray-700">Your Payments are Sent</p>
                            </div>
                            <div className="flex items-center justify-between w-full md:w-2/3">

                                <PieChart width={120} height={120}>
                                    <Pie
                                        data={data}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={30}
                                        outerRadius={50}
                                        paddingAngle={3}
                                        dataKey="value"
                                    >
                                        {data.map((entry, index) => (
                                            <Cell key={index} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                </PieChart>


                                <ul className="text-sm space-y-1 text-gray-600">
                                    <li className="flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[0] }}></span>
                                        United States - 28.4%
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[1] }}></span>
                                        Canada - 16.7%
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[2] }}></span>
                                        Mexico - 37.9%
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[3] }}></span>
                                        Other - 17.0%
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="shadow-[0px_4px_27.8px_0px_#00000026]  bg-[#6061F714] rounded-xl p-6">

                        <div className='bg-white rounded-xl p-5'>
                            <div className="flex items-center gap-4">
                                <img src="/Images/Png/profile.png" alt="Profile" />
                                <div>
                                    <p className="font-semibold text-lg">John Doe</p>
                                </div>
                            </div>
                            <div className='flex gap-28 items-center '>
                                <div className="flex items-center gap-4 mt-4 min-w-[140px] ">
                                    <img src="/Images/Svg/bluecircle.svg" alt="BlueCircle" />
                                    <div className='text-left'>
                                        <p className='font-poppins font-normal text-sm text-[#AEAEAE]'>US Tax ID</p>
                                        <p className='font-poppins font-medium  text-sm text-black'>00+0000000</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 mt-4 ">
                                    <img src="/Images/Svg/bluecircle.svg" alt="BlueCircle" />
                                    <div className='text-left'>
                                        <p className='font-poppins font-normal text-sm text-[#AEAEAE]'>Payments</p>
                                        <p className='font-poppins font-medium  text-sm text-black'>Enabled</p>
                                    </div>
                                </div>

                            </div>

                            <div className='flex gap-28 items-center '>
                                <div className="flex items-center gap-4 mt-4 min-w-[140px] ">
                                    <img src="/Images/Svg/bluecircle.svg" alt="BlueCircle" />
                                    <div className='text-left'>
                                        <p className='font-poppins font-normal text-sm text-[#AEAEAE]'>Payouts</p>
                                        <p className='font-poppins font-medium  text-sm text-black'>Enabled</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 mt-4 ">
                                    <img src="/Images/Svg/bluecircle.svg" alt="BlueCircle" />
                                    <div className='text-left'>
                                        <p className='font-poppins font-normal text-sm text-[#AEAEAE]'>SSN</p>
                                        <p className='font-poppins font-medium  text-sm text-black'>Verified</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className='text-left mt-5'>
                            <h3 className="text-2xl font-poppins  font-semibold  text-black">Personal Stablecoin Exchange</h3>
                            <p className="text-lg font-light font-inter text-black ">Effortlessly swap USD-pegged tokens in seconds with sub-cent slippage and best-rate routing.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ourfeatures