import sequelize from "../config/dbconfig.js";
import { Sequelize,DataTypes } from "sequelize";

import User from "./user.js";
import UploadImage from "./UploadImage.js";

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.User = User
db.UploadImage = UploadImage



db.UploadImage.belongsTo(db.User, {
    foreignKey:"userId"
})
db.User.hasMany(db.UploadImage, {
    foreignKey:'userId'
})

export default db