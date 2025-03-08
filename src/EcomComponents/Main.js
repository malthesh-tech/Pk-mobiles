import React from 'react'
import { CiSearch,CiShoppingCart } from 'react-icons/ci'

import watch from '../assets/EcomProducts/products/watch.jpg'
import laptop from '../assets/EcomProducts/products/labtop.jpg'
import keyboard from '../assets/EcomProducts/products/watch.jpg'
import phone from '../assets/EcomProducts/products/phone.jpg'
import sunGlass from '../assets/EcomProducts/products/glases.jpg'
import cap from '../assets/EcomProducts/products/cap.jpg'
import bag from '../assets/EcomProducts/products/bag.jpg'

const Main = () => {
  return (
    <div className='w-full relative'>
        <div className='sticky top-0 z-10'>
            <div className='header flex justify-between items-center p-4 bg-white'>
                <h1 className='text-3xl font-bold'>PKM shop</h1>
                <div className="search flex justify-between items-center px-5py-2 bg-gray-100 rounded">
                    <input type="text" placeholder='search product' className='bg-transparent outline-0' />
                    <button><CiSearch/></button>
                </div>
            </div>
            <div className="categories">
                <div>
                    <p>wathces</p>
                </div>
            </div>
        </div>
        <div className="products">
            <div className="product">
                <img src={sunGlass} className='h-36 w-36' alt="" />
                <div>
                    <h1>Sun Glassess</h1>
                    <p>Black Sunglass</p>
                    <div>
                        <p>50rupee</p>
                        <CiShoppingCart />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main
