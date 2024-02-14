"use client"

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import {Toaster} from "react-hot-toast"
const Auth = ({ children }) => {
  const router=useRouter()
  const token = typeof window !== 'undefined' ? localStorage.getItem('id') : false;
  useEffect(() => {
    if (token) {
       router.push('/dashboard',{scroll:false})
    } else {
      router.push('/auth/signin',{scroll:false})
     }
   },[token])

 
    return (
    <div>
        {children}
        <Toaster/>
    </div>
  )
}

export default Auth
