"use client"
import React, { useLayoutEffect } from 'react'
import {redirect} from "next/navigation"
const Page = () => {
    useLayoutEffect(() => {
      redirect("/auth/signin")
  },[])
}

export default Page
