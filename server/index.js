import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import bodyParser from "body-parser";
import { fileURLToPath } from 'url';
import path from "path";
import db from "./model/index.js";
import authRoute from "./routes/auth.route.js"
import cookieParser from "cookie-parser";
import uploadRoute from "./routes/image.route.js"
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express();
dotenv.config()
const corsOptions ={
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "X-Access-Token",
  ],
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  // whatever port for next.js
  origin: "http://localhost:3000",
  preflightContinue: true,

}
app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(cookieParser())
app.use("/assets",express.static(path.join(__dirname,"public/assets")))

app.use("/auth", authRoute);
app.use("/upload",uploadRoute)

db.sequelize.sync().then(() => {
    console.log("Database is online");
    app.listen(process.env.PORT, () => {
        console.log("Server is running on PORT"+process.env.PORT)
    })
}).catch((error) => {
    console.log("Error Syncing sequelize:"+error)
})