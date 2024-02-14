"use client"
import React, { useRef,useState } from 'react'
import * as yup from "yup"
import Link from 'next/link'
import TextInput from '@/app/components/TextInput/TextInput';
import toast from "react-hot-toast"
import { Formik,Form } from 'formik';
import Button from '@/app/components/Button/Button';
import { handleRegister } from './action';


const Signup = () => {
    const formikRef = useRef()
  const [isFilled,setIsFilled]=useState(false)
  
  const initialValues = {
    name:"",
    email: "",
    password:""
  }
  const validationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email format").required("Email is required"),
    password: yup.string().required("Password is required")
  })
  

  const handleSignUp = async(value) => {
    const body = {
      name:value.name,
      email: value.email,
      password: value.password
    }
    console.log("body", body)
    
    try {
      const handleSignUp = await handleRegister(body)
      if (handleSignUp) {
        
        toast.success("User registered successfully")
      }
    } catch (error) {
      console.log("error", error)
      toast.error(error)
    }


    
}



  return (
    <div className='flex flex-col items-center justify-center h-svh'>
      <div>
 <h1 className='text-blue-500 font-bold text-2xl'> URL SHORTNER</h1>
      </div>
      <div className=' flex flex-col border rounded-lg border-black p-5'>
      <Formik
        innerRef={formikRef}
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnMount={false}
        validate={(v)=>setIsFilled(Object.values(v).some(Boolean))}
      
      >
        {
            (formikProps) => (
            <div className='h-80 flex items-center flex-col justify-center gap-3'>
                    <Form className="flex items-center flex-col gap-4 ">
                        <TextInput type="text" name="name" label="Name" />
              <TextInput type="email" name="email" label="Email" />
              <TextInput type="password" name="password" label="Password" />
              <Button label={"SignUp"} style={"bg-blue-500 p-2 text-white rounded-lg min-w-36"} onClick={()=>handleSignUp(formikProps.values)}/>
            </Form>
 
            <p>Already have account ?<Link className="text-blue-500 underline"href={"/auth/signin"}>SignIn</Link></p>
 
            </div>
          )
        }
        
        </Formik> 
     
     </div>
     

    </div>
    
  )
}

export default Signup
