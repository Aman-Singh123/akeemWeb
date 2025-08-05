import { useState } from 'react'
import './App.css'

import Navbar from './Components/Navbar/Navbar.jsx'
import Hero from './Components/Sections/Hero.jsx'
import Ourfeatures from './Components/Sections/Ourfeatures.jsx'
import Everyregion from './Components/Sections/Everyregion.jsx'
import EmpowerWallet from './Components/Sections/EmpowerWallet.jsx'

function App() {
  const [activeTab, setActiveTab] = useState('individual');

  return (

    <>
      <div className="w-full flex flex-col items-center shadow-md">
      
        <div className="w-full flex  bg-white">
          <div className="flex  mt-0   ms-0 md:ms-[136px]">
            <button
              className={`px-6 py-2 font-medium pointer ${activeTab === 'individual' ? 'bg-[#6B4EFF] text-white' : 'bg-white text-black'
                }`}
              onClick={() => setActiveTab('individual')}
            >
              Individual
            </button>

            <button
              className={`px-6 py-2 font-medium pointer  ${activeTab === 'business' ? 'bg-[#6B4EFF] text-white' : 'bg-white text-black'
                }`}
              onClick={() => setActiveTab('business')}
            >
              Business
            </button>
          </div>
        </div>

      </div>
      <div className="container px-4 sm:px-6  md:px-3 lg:px-6 mx-auto [@media(min-width:1280px)]:max-w-[1300px] [@media(min-width:1280px)]:px-12  [@media(min-width:1480px)]:px-4">
        <Navbar />
        <Hero />
        <Ourfeatures /> 
        <Everyregion />
        <EmpowerWallet/>
      </div>
    </>


  )
}

export default App
