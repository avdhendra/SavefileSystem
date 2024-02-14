'use server'

export const submitImage = async (token, formdata) => {
    console.log('hi')
    const response = await fetch('http://localhost:5000/upload/image', {
        method: "POST",

        headers: {
             Accept: "applicaiton/json",
            "Content-Type": "application/json",
             "Authorization": "Bearer " + token  

        },
           
        
        body: formdata
    }
    )
    return response.json()
}