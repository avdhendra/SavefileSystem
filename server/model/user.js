import {DataTypes,Sequelize} from "sequelize"
import sequelize from "../config/dbconfig.js"
import dotenv from "dotenv"
dotenv.config()
const User = sequelize.define('blinkitUser', {
    userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull:false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: {
                msg:"Email address must be valid"
            }
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull:false
    },
   
})


export default User