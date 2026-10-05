import jwt from "jsonwebtoken"

const verifyToken = (req, res, next) =>{

    const token = req.cookies.token

    if(!token) return res.status(401).json({ message: "Unauthorized" })

    try{

        const decoded = jwt.verify(token, process.env.SECRET)

        req.user = decoded

        next()

    }catch{

        return res.status(401).json({ message: "Invalid or expired token" })

    }

}

export default verifyToken