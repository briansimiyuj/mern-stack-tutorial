import createToken from "../middlewares/createToken.js"
import User from "../models/User.js"

const logiUser = async(req, res) =>{

    const { email, password } = req.body

    try{

        const user = await User.login(email, password),
              token = createToken(user._id)

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

        res.status(201).json({ email: user.email, token })

    }catch(err){

        res.status(400).json({ message: err.message })

    }

}

export { logiUser, registerUser }