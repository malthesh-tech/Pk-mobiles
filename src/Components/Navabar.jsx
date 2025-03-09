import React from 'react'
import logo from '../assets/PK=Mobileds.png'
import { FaChevronDown } from "react-icons/fa";
import { FaSearch, FaShoppingCart, FaRegBookmark, FaUserCircle } from "react-icons/fa";
import './Navbar.css'

const Navabar = () => {
  return (

    <div className='masterDiv w-full bg-black flex flex-wrap items-center px-20 py-2 justify-between' id='masterDiv' > {/* flex flex-wrap items-center px-4 py-3 md:px-10 justify-between */}
     {/* w-full bg-black flex flex-wrap items-center justify-between px-4 py-3 md:px-10  */}
     <div className="imgeDiv flex flex-row items-start gap-2" >
       <img src={logo} alt="logo"  className='imgTT w-12,  h-20 '/> 
      
       <div className='Minutes flex flex-row ml-0 pl-20 mt-5'>
        <h1 className='text-white text-xl font-bold'>30 Minutes</h1>
        <FaChevronDown size={16} color="white" className="ml-2 mt-2"/>
       </div>
       </div>
       {/* <div className="flex flex-col md:flex-row items-center md:items-start gap-2">
        <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
        <div className="flex flex-col items-center md:flex-row md:items-center text-white mt-2 md:mt-0">
          <h1 className="text-xl md:text-2xl font-bold">30 Minutes</h1>
          <FaChevronDown size={16} color="white" className="md:ml-2" />
        </div>
      </div> */}
       <div className=" SearchIcon  flex items-center bg-white rounded-lg p-2 w-full max-w-2xl mt-5 h-12  ">
          <FaSearch className="text-grey mr-2 " size={20} />
          <input
            type="text"
            placeholder="Search here..."
            className="flex-grow outline-none px-2 text-base"
          />
          </div>
       <div className='Profile-Cart flex mt-6 gap-3'>
       <FaRegBookmark color='white' size={24} className='Bookmark'/>
       <FaShoppingCart color='white' size={24} />
       <FaUserCircle color='white' size={24} />
       <FaChevronDown size={16} color="white" className="Bookmark ml-2"/>
       </div>
    </div> 
      
  )
}

export default Navabar
