export const uploadImage = async (req, res) => {
     try {
    const { path: imagePath, originalname: imageName } = req.file;
    const userId = req.user.id;
         if (!imagePath || !imageName) {
        return res.status(401).json({error:'Image not provided'})
         }
         
    const image = await Image.create({ userId, imageName, imagePath });
    res.json({ message: 'Image uploaded successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const getImage = async (req, res) => {
    try {
    const userId = req.user.id;
    const images = await Image.findAll({ where: { userId } });
    res.json({ images });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}