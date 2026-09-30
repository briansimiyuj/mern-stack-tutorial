import express from "express"
import { logiUser, registerUser } from "../controllers/userController.js"

const userRoute = express.Router()

userRoute.post("/login", logiUser)

userRoute.post("/register", registerUser)

export default userRoute