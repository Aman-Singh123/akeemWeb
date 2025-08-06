// Install these libraries before using:
// npm install react-circular-progressbar recharts

import React from "react";
import {
    CircularProgressbarWithChildren,
    CircularProgressbar,
    buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "react-circular-progressbar/dist/styles.css";
import {
    BarChart,
    Bar,
    XAxis,
    Tooltip,
    ResponsiveContainer
} from "recharts";

const assetData = [
    {
        name: "Bitcoin",
        value: 2300,
        percent: 71.68,
        color: "#F5504E",
        icon: "/Images/Svg/bitcoin.svg"
    },
    {
        name: "Ethereum",
        value: 2300,
        percent: 61.68,
        color: "#36D98E",
        icon: "/Images/Svg/etherum.svg"
    }
];

const chartData = [
    { name: "Mon", value: 60 },
    { name: "Tue", value: 80 },
    { name: "Wed", value: 50 },
    { name: "Thu", value: 90 },
    { name: "Fri", value: 40 }
];

const MultiStat = [
    { title: "Average Confirmation", value: 0, unit: "%" },
    { title: "Transactions Processed", value: 490 },
    { title: "Capacity Used", value: 65, unit: "%" }
];

const OurBusinessFeatures = () => {
    return (
        <section className="px-4 sm:px-6  xl:px-26 py-12">
            <div className="text-center mb-10">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">Our Features</h2>
                <p className="text-gray-600 max-w-xl mx-auto">
                    Built for Real Life. Trusted in Every Transaction. Your money, your terms,
                    no friction, just precision.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Assets Card */}
                <div className="bg-[#F5F6FF] rounded-2xl p-6 shadow-md">
                    <div className="bg-[#6061F7]  p-7 rounded-xl text-white mb-4  xl:max-w-[284px]">
                        <p className="font-inter font-normal text-white text-lg mb-5 ">Assets</p>
                        {assetData.map((item) => (
                            <div key={item.name} className="mb-5">
                                <div className="flex justify-between items-center mb-1">
                                    <div className="flex items-center gap-2">
                                        <img src={item.icon} alt={item.name} className="w-5 h-5" />
                                        <span>{item.name}</span>
                                    </div>
                                    <span className="font-inter font-normal text-white text-[16px] ">$ {item.value}</span>
                                </div>
                                <div className="flex items-center  gap-5">
                                    <div className="w-[80%] bg-white/30 h-1 rounded-full">
                                        <div
                                            className="h-1 rounded-full"
                                            style={{ width: `${item.percent}%`, backgroundColor: item.color }}
                                        ></div>
                                    </div>

                                    <p className="font-inter font-normal text-white text-sm  " >{item.percent}%</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <h3 className="font-semibold md:text-lg sm:text[14px] text-2xl mb-2 font-inter text-black ">Send & Receive Instantly</h3>
                    <p className=" text-sm  xl:text-lg text-black font-inter font-light  ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim..
                    </p>
                </div>

                {/* Multi-Currency Card */}
                <div className="bg-[#F5F6FF] rounded-2xl p-6 shadow-md">
                    <h3 className="font-semibold md:text-lg sm:text[14px] text-2xl mb-2 font-inter text-black">Multi-Currency Made Easy</h3>
                    <p className="text-sm  xl:text-lg text-shadow-black font-inter font-light  ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        varius enim...
                    </p>
                    <div className="bg-[#6061F7] py-4 px-4  md:px-2 lg:px-12 xl:px-16 rounded-xl text-white mt-5">
                        <div className="flex justify-between mb-4">
                            <img src="/Images/Svg/solana.svg" alt="Solana" />
                            <button className="bg-white text-[#6061F7] text-sm px-3 py-2 rounded-xl">
                                Play Again
                            </button>
                        </div>
                        <hr className="bg-whtie border-1 w-full mt-5  mb-7" />
                        <div className="sm:block   md:flex  justify-around text-center">
                            {MultiStat.map((stat, index) => (
                                <div key={stat.title} className="text-center my-5 text-white">
                                    {index === 0 ? (
                                        // Full circle made with separators only (no value fill)
                                        <div className="relative w-20 h-20 mx-auto rounded-full bg-[#6061F7]">
                                            {Array.from({ length: 36 }).map((_, i) => (
                                                <div
                                                    key={i}
                                                    style={{
                                                        position: "absolute",
                                                        height: "100%",
                                                        width: "100%",
                                                        transform: `rotate(${(360 / 36) * i}deg)`,
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            position: "absolute",
                                                            top: 0,
                                                            left: "50%",
                                                            transform: "translateX(-50%)",
                                                            background: "#fff",
                                                            width: "3px",
                                                            height: "10%",
                                                            borderRadius: "2px",
                                                        }}
                                                    />
                                                </div>
                                            ))}
                                            {/* Optional Text in Center */}
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-sm text-white">
                                                {stat.value}
                                                {stat.unit || ""}
                                            </div>
                                        </div>
                                    ) : (
                                        // Regular CircularProgressbar for others
                                        <div className="w-20 h-20 mx-auto">
                                            <CircularProgressbar
                                                value={stat.value}
                                                text={`${stat.value}${stat.unit || ""}`}
                                                styles={buildStyles({
                                                    textSize: "24px",
                                                    pathColor: "#FFFFFF",
                                                    textColor: "#fff",
                                                    trailColor: "rgba(255, 255, 255, 0.2)",
                                                })}
                                            />
                                        </div>
                                    )}
                                    <p className="text-xs mt-1">{stat.title}</p>
                                </div>
                            ))}


                        </div>
                    </div>
                </div>


            </div>

            <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-4 mt-6 ">
                <div className="bg-[#F5F6FF] rounded-2xl p-6 shadow-md">
                    <div className="bg-[#6061F7] p-4 rounded-xl text-white mb-4">
                        <div className="text-lg font-semibold">+$10.126</div>
                        <div className="text-green-400 text-sm mb-4">+10.26%</div>
                        <div className="h-32">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={chartData}>
                                    <XAxis dataKey="name" hide />
                                    <Bar dataKey="value" fill="#FFFFFF" radius={[4, 4, 0, 0]} barSize={80} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        <p className="mt-4 text-sm">Portfolio Tracking</p>
                        <a href="/" className=" text-white   font-poppins  sm:text-lg md:text-[10px] lg:text-sm font-light flex items-center gap-2 mt-2">
                            Lear more <span>→</span>
                        </a>

                    </div>
                </div>

                {/* Ultra-Low Fees */}
                <div className="bg-[#F5F6FF] rounded-2xl p-6  shadow-md">
                    <h3 className="font-semibold text-lg mb-2">Ultra-Low Fees</h3>
                    <p className="text-gray-600 text-sm mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        varius enim...
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-[37%_60%] items-stretch h-[70%]  gap-4">
                        <div className="bg-[#6061F7] text-white p-6 h-full rounded-xl">
                            <img src="/Images/Svg/Container.svg" alt="container" className="w-8 h-8" />
                            <p className="text-[15px] font-sans font-medium mb-1 mt-3">Avg. Fee Per Transaction</p>
                            <h4 className="text-2xl font-semibold ">$0.00025</h4>
                        </div>
                        <div className="bg-[#6061F7] text-white p-3 rounded-xl space-y-4">

                            <div className="flex justify-between items-center">

                                <div className="flex items-center gap-3">
                                    <img src="/Images/Svg/flash.svg" alt="flash" className="w-10 h-10" />
                                    <div>
                                        <p className="text-xl  text-[#FFFFFF8F]">7/25/2025</p>
                                        <p className="text-base text-white  font-bold ">ETH <span className="text-base  text-[#FFFFFF8F]">/USDT</span></p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="text-right">
                                        <p className="text-sm text-white/70 leading-none mb-3">1,628</p>
                                        <p className="text-sm font-semibold leading-none">3,138.8</p>
                                    </div>


                                    <div className="ml-2 bg-white text-[#6061F7] font-bold text-sm px-3 py-3 rounded-full">
                                        +23.32%
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between items-center ms-4">

                                <div className="flex items-center gap-3">
                                    <img src="/Images/Svg/flash.svg" alt="flash" className="w-10 h-10" />
                                    <div>
                                        <p className="text-xl  text-[#FFFFFF8F]">7/25/2025</p>
                                        <p className="text-base text-white  font-bold ">ETH <span className="text-base  text-[#FFFFFF8F]">/USDT</span></p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="text-right">
                                        <p className="text-sm text-white/70 leading-none mb-3">1,628</p>
                                        <p className="text-sm font-semibold leading-none">3,138.8</p>
                                    </div>


                                    <div className="ml-2 bg-white text-[#6061F7] font-bold text-sm px-3 py-3 rounded-full">
                                        +23.32%
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    );
};

export default OurBusinessFeatures;
