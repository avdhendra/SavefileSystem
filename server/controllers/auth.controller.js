import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import User from "../model/user.js";
// import cookie from "cookie"
import dotenv from "dotenv"
import { EMAIL_REGEX } from "../util/regex.js";
dotenv.config()

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!EMAIL_REGEX.test(email)) {
            return res.status(400).json({ error: "Invalid email format." });
        }
        let user = await User.findOne({ where: { email } })
        if (user) {
            return res.status(400).json({ error: 'User already exists' })
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        user = await User.create({ name, email, password: hashedPassword });

        return res.status(201).json({ message: "User created successfully" })
    } catch (error) {
        console.log("error :", error)
        res.status(500).json({ error: "Internal Server Error" })
    }
}

export const login = async (req, res) => {
    // console.log("login :12354")
    //    return res.status(200).json("123")
    const { email, password } = req.body

    if (!EMAIL_REGEX.test(email)) {
        return res.status(400).json({ error: "Invalid email" })

    }
    try {

        let user = await User.findOne({ where: { email:email } })
        console.log("ueer",user)
        if (!user) {
            console.log("hi")
            return res.status(404).json({ error: "User not Exist " })
        }
        const passwordMatch = await bcrypt.compare(password, user.password)
        if (!passwordMatch) {
            return res.status(401).json({ error: "Invalid password" })
        }
        const payload = {
            user: {
                id: user.userId
            }
        }
        const jwtToken = jwt.sign(payload, process.env.JWT_SECRET,{
          expiresIn: 60 * 60,
        })
        delete user.password
       console.log("gdahsd")
        
//         res.cookie("token", jwtToken, {
//             httpOnly: true,
//             maxAge: 60 * 60,
           
//             sameSite: 'None',
//             secure:process.env.NODE_ENV !== 'production' ? false : true
//         })
//         res.cookie("_id", user.userId, {
//              httpOnly: true,
//             maxAge: 60 * 60,
//             sameSite: 'None',
           
//             secure:process.env.NODE_ENV !== 'production' ? false : true
//         })
//         res.setHeader('Set-Cookie', [
//     `token=${jwtToken}; HttpOnly; Path=/; Max-Age=${60 * 60}; Secure=True;`,
//     `id=${user.userId}; HttpOnly; Path=/; Max-Age=${60 * 60 * 24 * 7 * 2}; Secure=True`
// ]);
      return res.status(200).json({token:jwtToken,id:user.userId})
     
       
      //  res.status(200).json(data)
   


    }
    catch (err) {
        console.log("login error: " + err.message)
        res.status(500).json({error:"Internal Server Error"})
    }
}