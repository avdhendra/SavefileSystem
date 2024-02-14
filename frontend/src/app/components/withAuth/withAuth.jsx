"use client"
import { useEffect } from "react"
import { redirect } from "next/router"
import { getId } from "@/app/utils/session"
export default function withAuth(Component) {
  
    return function withAuth(props) {
       
       const token=getId()
        useEffect(() => {
            if (token) {
     redirect("/dashboard")
  } else {
    redirect("/auth/signin",{scroll:false})
   }      
        }, [token])
        

        return <Component {...props}/>
    }
}