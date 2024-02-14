import express from 'express';
import { getImage, uploadImage } from '../controllers/upload.controller.js';
import { verifyToken } from '../middleware/authorization.js';
import { upload } from '../config/multer.js';


const router = express.Router();

router.post("/image",verifyToken,upload.single('picture'),uploadImage )
router.get("/getimage",verifyToken,getImage)
export default router