
"use server"
export const handleRegister = async (body) => {
    
try {
  
      const result =await fetch(`http://localhost:5000/auth/register`, {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                        

          },
                   withCredentials: true,
                    body: JSON.stringify(body)
    })
    
    return result.json();


} catch (error) {
    console.log("error: " + error)
    return error;
    }
    
}