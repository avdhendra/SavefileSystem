'use server'

export const submitImage = async (token, formdata) => {
    console.log('hi')
    const response = await fetch('http://localhost:5000/upload/image', {
        method: "POST",

        headers: {
             "Authorization": "Bearer " + token  

        },
           
        
        body: formdata
    }
    )
    return response.json()
}

export const getAllImage = async (token) => {
    const response = await fetch('http://localhost:5000/upload/getimage', {
        method: "GET",

        headers: {
             "Authorization": "Bearer " + token  

        },
        next:{revalidate:5}
    }
    )
    return response.json()
}