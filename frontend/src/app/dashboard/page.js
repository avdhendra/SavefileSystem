"use client"
import React, { useEffect, useState } from 'react'
import Upload from '../components/Upload/Upload'
import AllImage from '../components/AllImages/AllImage'
import { getAllImage } from './action'

const Dashboard = () => {
    
    const [value,setValue]=useState([])
    useEffect(() => {
        const getAll = async() => {
            const token=typeof window!=='undefined' ? localStorage.getItem('token'):null
            const result = await getAllImage(token)
            console.log("result",result)
            setValue(result)
        }
        getAll()
    },[])
  return (
    <div className='w-full flex items-center justify-center flex-col overflow-y-auto'>
          <Upload />
          <AllImage value={value } />
     
          
    </div>
  )
}

export default Dashboard
