import React from 'react'

function Fotter() {
    return (
        <footer className="bg-white shadow-[0px_6px_27.8px_#00000026] py-12 px-6 sm:px-10 md:px-20  rounded-t-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-[#1F1F1F]">

                <div>
                    <h4 className="font-bold font-sans text-lg mb-4 text-[#0A142F]">Explore</h4>
                    <ul className="space-y-2 text-[#0A142F] text-lg font-light font-sans">
                        <li><a href="#">About Akeem</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Media Kit</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Security FAQs</a></li>
                    </ul>
                </div>


                <div>
                    <h4 className="font-bold font-sans text-lg mb-4 text-[#0A142F]">Quick Access</h4>
                    <ul className="space-y-2 text-[#0A142F] text-lg font-light font-sans">
                        <li><a href="#">Start using Akeem</a></li>
                        <li><a href="#">Convert currency</a></li>
                        <li><a href="#">Regional features</a></li>
                        <li><a href="#">Security FAQs</a></li>
                        <li><a href="#">Wallet modes</a></li>
                    </ul>
                </div>


                <div className="flex flex-col gap-6">

                    <div>
                        <h4 className="font-normal font-sans text-lg mb-4 text-[#0A142F]">OFFICE LOCATION</h4>
                        <p className="text-[#0A142F] text-[14px] font-light font-sans">
                            Akeem Wallet, 313 Sydenham Road, London SE26 5EW,<br />
                            United Kingdom
                        </p>
                    </div>


                    <div>
                        <h4 className="font-normal font-sans text-lg mb-4 text-[#0A142F]">Newsletter</h4>
                        <div className="flex items-center border-b border-[#D1D5DB] py-2 max-w-md">
                            <input
                                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                type="text"
                                placeholder="Enter your email address"
                            />
                            <button className="flex-shrink-0">
                                <img src="/Images/Svg/email.svg" alt="send" className="w-8 h-8" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>





            <div className="border-t border-[rgba(10,20,47,0.25)]  mt-10 pt-6 flex flex-col md:flex-row items-center justify-center text-sm  gap-4">
                <div className="flex space-x-4">
                    <a href="#"><img src="/Images/Svg/twitter.svg" alt="Twitter" className="w-8 h-8  " /></a>
                    <a href="#"><img src="/Images/Svg/linkedin.svg" alt="LinkedIn" className="w-8 h-8 " /></a>
                    <a href="#"><img src="/Images/Svg/facebook.svg" alt="Facebook" className="w-8 h-8" /></a>
                </div>
            </div>
            <p className='text-center text-[#0A142F] text-[14px] font-light font-sans"  mt-3'>© Akeem is the subsidiary of PayLater Inc</p>
        </footer>


    )
}

export default Fotter