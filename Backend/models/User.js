import mongoose from "mongoose"
import bcrypt from "bcrypt"
import validator from "validator"

const UserSchema = new mongoose.Schema({
    
    email:{
        type: String,
        required: true,
        unique: true
    },

    password:{
        type: String,
        required: true
    }

})

UserSchema.statics.register = async function(email, password){

    if(!email || !password){
        
        throw Error('All fields must be filled')

    }

    if(!validator.isEmail(email)){

        throw Error('Email is not valid')

    }

    if(!validator.isStrongPassword(password)){

        throw Error('Password is not strong enough')
        
    }
    
    const existingUser = await this.findOne({ email })

    if(existingUser){
        
        throw Error("User already exists")

    }

    const salt = await bcrypt.genSalt(10),
          hash = await bcrypt.hash(password, salt)                

    const user = await this.create({ email, password: hash })

    return user

}

export default mongoose.model("User", UserSchema)