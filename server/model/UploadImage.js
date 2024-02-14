import {DataTypes,Sequelize} from "sequelize"
import sequelize from "../config/dbconfig.js"
import dotenv from "dotenv"
dotenv.config()
const UploadImage = sequelize.define('UploadImage', {
    
    imageName: {
        type: DataTypes.STRING,
        allowNull:false
    },
    
    imagePath: {
        type: DataTypes.STRING,
        allowNull:false
    },
   
})


export default UploadImage