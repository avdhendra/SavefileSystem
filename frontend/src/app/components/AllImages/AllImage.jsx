"use client"
import React from 'react'
import Image from "next/image"

const AllImage = ({ value }) => {
    console.log("value: " + JSON.stringify(value))
  return (
    <div className='w-full flex flex-wrap justify-between'>
          {value.map((item,index)=>(
              <div className='flex flex-col justify-between' key={index}>
            <div className='flex-1 '>
                      <Image src={`http://localhost:5000/assets/${item?.imagePath.split("\\")[2]}` } width={120} height={120} />
          </div>
          <div>
            {item?.imageName}
          </div>  
            </div>
          ))}
    </div>
  )
}

export default AllImage
