import UploadImage from "../model/UploadImage.js";

export const uploadImage = async (req, res) => {
    console.log("hi",req.file)
    try {
        console.log('uploadTi')
        
        const { path: imagePath, originalname: imageName } = req.file;
      //  console.log("reqbody",req.body,"reqfile",req.file)
        console.log("path: " + imagePath,"originalname: " + imageName)
        const userId = req.user.id;
        console.log("userId: " + userId)
         if (!imagePath || !imageName) {
        return res.status(401).json({error:'Image not provided'})
         }
         
        const image = await UploadImage.create({ userId, imageName, imagePath });
        console.log("good")
    res.status(201).json('Image uploaded successfully' );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const getImage = async (req, res) => {
    try {
    const userId = req.user.id;
    const images = await UploadImage.findAll({ where: { userId } });
    res.status(200).json( images );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}