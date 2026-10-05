import express from "express"
import { logiUser, registerUser } from "../controllers/userController.js"
import verifyToken from "../middlewares/verifyToken.js"

const userRoute = express.Router()

userRoute.post("/login", logiUser)

userRoute.post("/register", registerUser)

userRoute.get("/me", verifyToken, (req, res) =>{

    res.status(200).json({ email: req.user.email }) 

})

export default userRoute