import React from 'react'
import Logo from '../images/logo1.jpeg'

const Header = () => {
  return (
    <div>
      <div className="border-gray-200 px-4 lg:px-6 py-2.5">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
              <img src={Logo} className="mr-3 text-black h-12 sm:h-12" alt="Logo" />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Biosense</span>
          </div>
      </div>
    </div>
  )
}

export default Header