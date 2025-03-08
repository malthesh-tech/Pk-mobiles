import React from 'react'
import Sidebar from '../EcomComponents/Sidebar'
import Main from '../EcomComponents/Main'

const Home = () => {
  return (
    <div>
      <Sidebar />
      <div className='ml-[80px]'>
      <Main />
      </div>
    </div>
  )
}

export default Home
