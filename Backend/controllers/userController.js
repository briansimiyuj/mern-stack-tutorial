import createToken from "../middlewares/createToken.js"
import User from "../models/User.js"

const logiUser = async(req, res) =>{

    const { email, password } = req.body

    try{

        const user = await User.login(email, password),
              token = createToken(user._id)

        res.cookie("token", token, {

            httpOnly: true,
            maxAge: 3 * 24 * 60 * 60 * 1000

        })

        res.status(200).json({ email: user.email, token })

    }catch(err){

        res.status(400).json({ message: err.message })

    }

}

const registerUser = async(req, res) =>{

    const { email, password } = req.body

    try{

        const user = await User.register(email, password),
              token = createToken(user._id) 
            
        res.cookie("token", token, {

            httpOnly: true,
            maxAge: 3 * 24 * 60 * 60 * 1000,
    
        })

        res.status(201).json({ email: user.email, token })

    }catch(err){

        res.status(400).json({ message: err.message })

    }

}

const logOutUser = async(req, res) =>{

    res.clearCookie("token")

    res.status(200).json({ message: "User logged out successfully." })

}

export { logiUser, registerUser, logOutUser }