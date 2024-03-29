"use server"


export const handleSign = async (body) => {
    try {

        const result = await fetch(`http://localhost:5000/auth/login`, {
            method: "POST",

            headers: {
                 Accept: "application/json",
                "Content-Type": "application/json",


             },
           
            // mode: 'cors',
            body: JSON.stringify(body),
          
            credentials:"include"

        })
       return result.json()

    } catch (error) {
        console.log(error)
      return error.message
        
    }
}