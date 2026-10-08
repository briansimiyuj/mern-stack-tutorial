import express from "express"
import { logiUser, logOutUser, registerUser } from "../controllers/userController.js"
import verifyToken from "../middlewares/verifyToken.js"
import User from "../models/User.js"

const userRoute = express.Router()

userRoute.post("/login", logiUser)

userRoute.post("/register", registerUser)

userRoute.post("/logout", verifyToken, logOutUser)

userRoute.get("/me", verifyToken, async(req, res) =>{

    try{

        const user = await User.findById(req.user._id).select("-password")

        res.status(200).json({ user })

    }catch(err){
        
        res.status(500).json({ message: err.message })

    }

})

export default userRoute