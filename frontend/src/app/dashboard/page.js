"use client"
import React from 'react'
import Upload from '../components/Upload/Upload'
import AllImage from '../components/AllImages/AllImage'

const Dashboard = () => {
  return (
    <div className='w-full flex items-center justify-center flex-col'>
          <Upload />
          <AllImage/>
     
          
    </div>
  )
}

export default Dashboard
