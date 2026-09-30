const logiUser = async(req, res) =>{

    res.json({ message: 'login user' })

}

const registerUser = async(req, res) =>{

    res.json({ message: 'register user' })

}

export { logiUser, registerUser }