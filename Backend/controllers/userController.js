import User from "../models/User.js"

const logiUser = async(req, res) =>{

    res.json({ message: 'login user' })

}

const registerUser = async(req, res) =>{

    const { email, password } = req.body

    try{

        const user = await User.register(email, password)

        res.status(201).json({ email: user.email, user })

    }catch(err){

        res.status(400).json({ message: err.message })

    }

}

export { logiUser, registerUser }