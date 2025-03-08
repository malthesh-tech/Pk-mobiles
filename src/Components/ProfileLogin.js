import React from 'react'
import logo from '../assets/PK=Mobileds.png'
import { MdClose } from 'react-icons/md'

const ProfileLogin = () => {
  return (
    <div>
        <div>
            <div>
                <img src={logo} alt="logo"  className='w-12,  h-20 '/>
                <MdClose />
            </div>
                <h1>Welcome to PK-Mobiles</h1>
                <p>Please add Bank Registered Phone Number to get Best Offers and Finance Options</p>
                <input type="text" />
                <p>
                    By continuing, I agree to the Privacy Policy
                    and Terms & Conditions
                </p>
                <button>Login</button>
        </div>
    </div>
  )
}

export default ProfileLogin
