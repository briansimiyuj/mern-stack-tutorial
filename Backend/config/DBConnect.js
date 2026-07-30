import mongoose from "mongoose"

const connectDB = async() =>{

    try{
    
        await mongoose.connect(process.env.MONGO_URI)
                
        console.log('MongoDB connected ✅')

    
    }catch(error){
    
        console.log("MongoDB failed to connect ❌", error.message)

        process.exit(1) 
    
    }

}

export default connectDB