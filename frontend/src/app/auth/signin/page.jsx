"use client"
import React, { useState, useRef } from 'react'
import Link from 'next/link'
import TextInput from '@/app/components/TextInput/TextInput';
import * as yup from "yup"
import { Formik, Form } from 'formik';
import Button from '@/app/components/Button/Button';
import toast from "react-hot-toast"
import { useRouter } from 'next/navigation'

import { handleSign } from './action';

const Signin = () => {
  const formikRef = useRef()
  const router = useRouter()
  const [isFilled, setIsFilled] = useState(false)

  const initialValues = {

    email: "",
    password: ""
  }
  const validationSchema = yup.object().shape({

    email: yup.string().email("Invalid email format").required("Email is required"),
    password: yup.string().required("Password is required")
  })




  const handleSignIn = async (value) => {

    const body = {
      email: value.email,
      password: value.password
    }
    console.log("body", body)
    try {

      const response = await handleSign(body)
      localStorage.setItem("token", response.token)
      localStorage.setItem("id",response.id)
      if (response) {

        // redirect("/dashboard")
        router.push("/dashboard", { scroll: false })
      }
    } catch (error) {
      toast.error(error.message)
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
          validate={(v) => setIsFilled(Object.values(v).some(Boolean))}

        >
          {
            (formikProps) => (
              <div className='h-72 flex items-center flex-col justify-center gap-3'>
                <Form className="flex items-center flex-col gap-4 ">
                  <TextInput type="email" name="email" label="Email" />
                  <TextInput type="password" name="password" label="Password" />
                  <Button label={"SignIn"} onClick={() => handleSignIn(formikProps.values)} style={"bg-blue-500 p-2 text-white rounded-lg min-w-36"} />
                </Form>

                <p>Dont have account <Link className="text-blue-500 underline" href={"/auth/signup"}>SignUp</Link></p>

              </div>
            )
          }

        </Formik>

      </div>


    </div>

  )
}

export default Signin
